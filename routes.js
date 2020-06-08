$( document ).ready(function() {

  const dbRef = firebase.database().ref();
  const routesRef = dbRef.child('routes');

  function loadCard(){
    
  }

  function searchRoute(){
    var from_value = $("#fromPlace").value;
    var to_value = $("#toPlace").value;
    var dataList = [];
    var query = routesRef.orderByKey();
    query.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var from_db = childSnapshot.val().from;
        var to_db = childSnapshot.val().to;
        if ((encodeURIComponent(from_value) == encodeURIComponent(from_db)) && (encodeURIComponent(to_value) == encodeURIComponent(to_db))){
          var pushid = childSnapshot.key;
          var landmarks_db = childSnapshot.val().landmarks;
          var likes_db = childSnapshot.val().likes;
          var title_db = childSnapshot.val().title;
          var username_db = childSnapshot.val().username;
          var description_db = childSnapshot.val().description;
          var images_db = childSnapshot.val().images;

          var descriptionList = [];
          var imagesList = [];

          for (var i in description_db){
            descriptionList.push(description_db[i]);
          }

          for (var i in images_db){
            imagesList.push(images_db[i]);
          }

          dataList.push([]);
        }
      })
    })
  }

  $("#searchRouteButton").click(function(){
    searchRoute();
  })
}
