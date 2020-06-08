$( document ).ready(function() {

  const dbRef = firebase.database().ref();
  const routesRef = dbRef.child('routes');

  function searchRoute(){
    var from_value = $("#fromPlace").value;
    var to_value = $("#toPlace").value;
    var dataList = [];
    var query = routesRef.orderByKey();
    query.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var from_db = childSnapshot.val().from;
        var to_db = childSnapshot.val().to;
        var landmarks_db = childSnapshot.val().landmarks;
        var likes_db = childSnapshot.val().likes;
        var title_db = childSnapshot.val().title;
        var username = childSnapshot.val().username;
        if ((encodeURIComponent(from_value) == encodeURIComponent(from_db)) && (encodeURIComponent(to_value) == encodeURIComponent(to_db))){
          dataList.push
        }
      })
    })
  }

  $("#searchRouteButton").click(function(){
    searchRoute();
  })
}
