$(document).ready(function () {
	var firebaseConfig = {
	    apiKey: "AIzaSyDTFFrlgMNcm4J0uJixFbI5U9pIYDayUmY",
	    authDomain: "wheeloninthistogether123.firebaseapp.com",
	    databaseURL: "https://wheeloninthistogether123.firebaseio.com",
	    projectId: "wheeloninthistogether123",
	    storageBucket: "wheeloninthistogether123.appspot.com",
	    messagingSenderId: "728495178731",
	    appId: "1:728495178731:web:06792b904ccd5693b2cfae",
	    measurementId: "G-2SRFF7XTB2"
	};

	firebase.initializeApp(firebaseConfig);

    $('.our_buttons').on('click', function() {
        if (this.innerHTML == "Go to Forum Page") { console.log("Forum"); }
        else if (this.innerHTML == "Search Route") { console.log("Routes"); }
    })   

    // FORUM SPECIFIC CATEGORIES 
    $('.advice_card').on('click', function() {
        let categoryName = $(this).find('.category').html();
        // store categoryName in Firebase
        if (categoryName == "Advice") { console.log("Advice"); }
        else if (categoryName == "Health") { console.log("Health"); }
        else if (categoryName == "Events") { console.log("Events"); }
    }) 

    //ROUTES SEARCH BAR

    //RATES CLICK PLACES
});