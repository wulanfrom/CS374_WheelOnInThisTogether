// Makes sure the codes run when we open the page

$(document).ready(function(){
  // Make textarea height automatically grow with content
  const tx = document.getElementsByTagName('textarea');
  for (let i=0; i<tx.length; i++){
  	tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px; overflow-y:hidden;');
  	tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput(){
  	this.style.height = 'auto';
  	this.style.height = (this.scrollHeight) + 'px';
  }

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

   $('.go_more').on('click', function(){
   	go_to_post();
   })

   function go_to_post(){
   	  // console.log('going to post!');
   }

   $('#post_button').on('click', function(){
    get_post();
    add_new_post();
   });

   function get_post(){
    var input_content = document.getElementById("user_input");
    var title_content = document.getElementById("topic_input");

    if (input_content.value.length !=0){
      //make a firebase database so that it can be editable in the future.
      var key = firebase.database().ref().child("forum_post").push().key;
      var comment = {
        key: key,
        title: title_content,
        content: input_content.value,
        total_likes: 0,
        total_replies: 0,
        poster: 'Wheelie', //Changed later to username when login is implemented!

      };

      var updates= {};
      updates["/forum_post/" + key] = comment;
      firebase.database().ref().update(updates);
    }
  }

   function add_new_post(){

   }
   
}