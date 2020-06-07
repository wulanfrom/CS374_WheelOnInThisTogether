$( document ).ready(function() {
	var Logo = document.getElementById('logo');
	var SideBar = document.getElementById('sideBarClose');
	var Options = document.getElementsByClassName('options');		
	
	function bindEvents() {
		SideBar.onclick = function() { //close sidebar
			console.log("Closing sidebar");
			window.open("homepage.html", "_self");
			// window.open(url);
		}

		Logo.onclick = function() {
			console.log("Go to Homepage");
			window.open("homepage.html", "_self");
		}

		Options[0].onclick = function() { // go to Forum page
			console.log("Proceeding to Forum page");
			window.open("forum_homepage.html", "_self");
		}

		Options[1].onclick = function() { // go to Routes page
			console.log("Proceeding to Routes page");
			// window.open(url);
		}

		Options[2].onclick = function() { // go to Rates page
			console.log("Proceeding to Rates page");
			window.open("rates.html", "_self");
		}
	}

	bindEvents();
});

