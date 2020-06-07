$( document ).ready(function() {	
	var defaultPrimary = document.getElementsByClassName('default_primary');
	var Primary = document.getElementsByClassName('primary');
	var BlueCards = document.getElementsByClassName('bluecards');
	function bindEvents() {
		defaultPrimary[0].onclick = function() { // go to Forum
			console.log("View More Posts was clicked");
		}
		defaultPrimary[1].onclick = function() { // go to Rates 
			console.log("View More Places was clicked");
		}
		Primary[0].onclick = function() { // go to Routes and set search results accordingly
			console.log("Proceeding to Routes page");
		}
		BlueCards[0].onclick = function() { //go directly to Buff-Eat
			console.log("Visit Buff-Eat webpage");
		}
	}
	bindEvents();
	//autocomplete for search bar
});