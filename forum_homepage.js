// Makes sure the codes run when we open the page
  // Make textarea height automatically grow with content
  console.log("js works!");
  const tx = document.getElementsByTagName('textarea');
  for (let i=0; i<tx.length; i++){
  	tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px; overflow-y:hidden;');
  	tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput(){
  	this.style.height = 'auto';
  	this.style.height = (this.scrollHeight) + 'px';
  }
  console.log("still js works!");

  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDTWTSoE18qTy32m9_EB3gQbxeg2fJIcsY",
      authDomain: "wheelon-forum.firebaseapp.com",
      databaseURL: "https://wheelon-forum.firebaseio.com",
      projectId: "wheelon-forum",
      storageBucket: "wheelon-forum.appspot.com",
      messagingSenderId: "111914626097",
      appId: "1:111914626097:web:33649d540ffde5a9207910",
      measurementId: "G-Y9TXZC3P6P"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    // 
    console.log("still js works 2!");

   // $('.go_more').on('click', function(){
   // 	go_to_post();
   // })

   function go_to_post(){
   	  // console.log('going to post!');
   }

   $('#post_button').on('click', function(e){
      e.preventDefault();
      console.log('button is pushed');
      get_post();
      add_new_post();
   });
    console.log("still js works 3!");

   function get_post(){
    console.log('getting post');
    var input_content = document.getElementById("user_input"); //content
    var title_content = document.getElementById("topic_input"); //topic
    var e = document.getElementById("select_category");
    var category = e.options[e.selectedIndex].text;
    //if user keeps one of them blank, dont make post
    if (input_content.value.length != 0 && title_content.value.length!=0){
      // console.log('input: ', input_content.value);
      // console.log('topic: ', title_content.value);
      //make a firebase database so that it can be editable in the future.
      var key = firebase.database().ref().child("post_comment").push().key;
      console.log(key);
      var post = {
        key: key,
        category: category,
        title: title_content.value,
        content: input_content.value,
        total_likes: 0,
        total_replies: 0,
        poster: 'Wheelie', //Changed later to username when login is implemented!
        comment_array:{},
      };

      var updates = {};
      updates["/post_comment/" + key] = post;
      firebase.database().ref().update(updates);
    }
  };

   function add_new_post(){
      var post_section = document.getElementById('post_container');
      // post_container.innerHTML = "";
      post_array = []; 
      firebase.database().ref('post_comment').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var childKey = childSnapshot.key; //key of post
          var childContent = childSnapshot.val(); //object
          post_array.push(Object.values(childContent)); //convert to array
        });

        post_array = post_array.reverse(); //so most recent post is displayed at the top
        if (post_array.length > 0){
          post_container.innerHTML = "";
        }

        for (var i=0; i<post_array.length;i++){
          var post_category = post_array[i][0];
          var post_content = post_array[i][1];
          var post_key = post_array[i][2];
          // var post_poster = post_array[i][3];
          var post_poster = "Wheelie";
          var post_title = post_array[i][4];
          var post_likes = post_array[i][5];
          var post_replies = post_array[i][6];

          //Add to HTML
          //Make Container for each card
          var post_card = document.createElement("divs");
          post_card.setAttribute("class", "card");
          post_card.classList.add("comment");
          post_card.setAttribute("data-key", post_key);


          var upper_part = document.createElement("div");
          upper_part.setAttribute('class', 'comment-info');
          var topic_name = document.createElement('label');
          topic_name.setAttribute('class','tag');
          topic_name.innerHTML = post_category;
          var big_title = document.createElement('h2');
          big_title.setAttribute('class', 'disc_topic');
          big_title.innerHTML = post_title;
          var caption = document.createElement('p');
          caption.setAttribute('class','disc_content');
          caption.innerHTML = post_content;

          upper_part.append(topic_name);
          upper_part.append(big_title);
          upper_part.append(caption);

          post_section.append(upper_part);
          post_section.append(post_card);
        }


      });
   };





















