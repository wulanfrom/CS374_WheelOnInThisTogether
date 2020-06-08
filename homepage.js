function bindEvents() {
	$(".default_primary").onclick {
		var innerText = $(".default_primary").html();
		if (innerText == "VIEW MORE POSTS") { 
			//go to Forum page 
			console.log("View More Posts was clicked");
		} else if (innerText == "VIEW MORE PLACES") {
			//go to Rates page
			console.log("View More Places was clicked");
		} 
	}
	$(".primary").onclick {
		var fromText = $("#fromPlace").html();
		var toText = $("#toPlace").html();
		console.log("Proceeding to Routes page");
		//go to Routes page
		//set values of the search bars respectively
	}
}

//autocomplete for search bar