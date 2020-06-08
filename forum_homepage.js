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
  firebase.analytics();

 $('.go_more').on('click', function(){
 	go_to_post();
 })

 function go_to_post(){
 	
 }