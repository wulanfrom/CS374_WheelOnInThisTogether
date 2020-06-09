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

  $("#post_comment").on('click', function(){
  	get_comment();
  	create_comment();
  })

  function get_comment(){
  	var input_content = document.getElementById("user_input");

  	if (input_content.value.length !=0){
  		//make a firebase database so that it can be editable in the future.
  		var key = firebase.database().ref().child("post_comment").push().key;
  		var comment = {
  			comment: input_content.value,
  			key: key,
  		};

  		var updates= {};
  		updates["/forum_post/" + key] = comment;
  		firebase.database().ref().update(updates);
  	}
  }

  function create_comment(){
  	var comment_section = document.getElementsByClassName("comment_container")[0]; //the third item with the class container is our card format

  	comment_array = [];
  	firebase.database().ref("forum_post").once('value', function(snapshot){
  		snapshot.forEach(function(childSnapshot){
  			var childKey = childSnapshot.key;
  			var childValue = childSnapshot.val(); //object
  			comment_array.push(Object.values(childValue)); //convert object to array
  		});
  		comment_array = comment_array.reverse();
  		if (comment_array.length >0){
  			comment_section.innerHTML = "";
  		}

  		for (var i=0; i<comment_array.length;i++){
  			var username = "username";
  			var comment_content = comment_array[i][0];
  			var comment_key = comment_array[i][1];

  			//Add to HTML
  			//Make Container
  			var comment_card = document.createElement("container");
  			comment_card.setAttribute("class", "card");
  			comment_card.classList.add("user_comment");
  			comment_card.setAttribute("data-key", comment_key);
  			// comment_card.style.marginLeft="0px";

  			//Comment Data
  			var username_info = document.createElement("div");
  			username_info.setAttribute('class',"username_info");

  			var user_circle = document.createElement("span");
  			user_circle.setAttribute("class","user-circle");

  			var username = document.createElement("span");
  			username.setAttribute("class","username");
  			username.innerHTML = "Wheelie" + " (you)";

  			var user_write = document.createElement("p");
  			user_write.innerHTML = comment_content;

			comment_section.append(comment_card);
			username_info.append(user_circle);
			username_info.append(username);
			comment_card.append(username_info);
			comment_card.append(user_write);

			var number_replies = document.getElementsByClassName('number_replies')[0];
			var total_like = document.getElementById('total_like');
			if (comment_array.length == 1){
				number_replies.innerHTML = comment_array.length + " Reply";
				total_like.innerHTML = comment_array.length + " Reply";
			}
			else{
				number_replies.innerHTML = comment_array.length + " Replies";
				total_like.innerHTML = comment_array.length + " Replies";
			}

			// $(.comment_container).append('<div class="container comment_card"> <div class="user_comment card"><div class="username_info row"><span class="user-circle"></span><label class="username">Username</label></div><p class="comment_content">I’m having trouble with finding food around here. Hello I’m a new student here and I’m not that familiar with the campus, do you guys have recommended places to go to that’s accessible?</p></div></div>');

  		}
  	});
  }
  create_comment();
})




















