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
  	var comment_section = document.getElementsByClassName("container")[2]; //the third item with the class container is our card format
  	comment_section.style.backgroundColor = "blue";
  	comment_section.innerHTML = "";

  	comment_array = [];
  	firebase.database().ref("forum_post").once('value', function(snapshot){
  		snapshot.forEach(function(childSnapshot){
  			var childKey = childSnapshot.key;
  			var childValue = childSnapshot.val(); //object
  			comment_array.push(Object.values(childValue)); //convert object to array
  		});

  		comment_array = comment_array.reverse();

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

  			//Comment Data
  			var username_info = document.createElement("div");

  			var user_circle = document.createElement("span");
  			user_circle.setAttribute("class","user-circle");

  			var username = document.createElement("span");
  			username.setAttribute("class","username");
  			username.innerHTML = "Wheelie";

  			var user_write = document.createElement("p");
  			user_write.innerHTML = comment_content;

			comment_section.append(comment_card);
			username_info.append(user_circle);
			username_info.append(username);
			comment_card.append(username_info);
			comment_card.append(user_write);

  		}
  	});
  }

})




















