$( document ).ready(function() {	
	var defaultPrimary = document.getElementsByClassName('default_primary');
	var Primary = document.getElementsByClassName('primary');
	var BlueCards = document.getElementsByClassName('bluecards');
	
	function bindEvents() {
		defaultPrimary[0].onclick = function() { // go to Forum
			window.open("forum_homepage.html", "_self");
		}
		defaultPrimary[1].onclick = function() { // go to Rates 
			window.open("rates.html", "_self");
		}
		Primary[0].onclick = function() { // go to Routes and set search results accordingly
			window.open("routes-index.html", "_self");
			// window.open(url);
		}
		BlueCards[0].onclick = function() { //go directly to Buff-Eat
			window.open("rating_ind.html", "_self");
		}
	}

	bindEvents();
});