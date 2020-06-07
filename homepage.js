$( document ).ready(function() {	
	var defaultPrimary = document.getElementsByClassName('default_primary');
	var Primary = document.getElementsByClassName('primary');
	var BlueCards = document.getElementsByClassName('bluecards');
	var Links = document.getElementsByClassName('links');
	
	function bindEvents() {
		defaultPrimary[0].onclick = function() { // go to Forum
			console.log("View More Posts was clicked");
			window.open("forum_homepage.html", "_self");
		}
		defaultPrimary[1].onclick = function() { // go to Rates 
			console.log("View More Places was clicked");
			window.open("rates.html", "_self");
		}
		Primary[0].onclick = function() { // go to Routes and set search results accordingly
			console.log("Proceeding to Routes page");
			// window.open(url);
		}
		BlueCards[0].onclick = function() { //go directly to Buff-Eat
			console.log("Visit Buff-Eat webpage");
			window.open("rating_ind.html", "_self");
		}
		Links[0].onclick = function() {
			console.log("What is the best way to get free food around KAIST?");
			// window.open(url);
		}
	}
	
	bindEvents();
	//autocomplete for search bar
});