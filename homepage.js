$( document ).ready(function() {	
	var defaultPrimary = document.getElementsByClassName('default_primary');
	var Primary = document.getElementsByClassName('primary');
	var BlueCards = document.getElementsByClassName('bluecards');
	var Links = document.getElementsByClassName('links');
	// var Logo = document.getElementById('logo');
	// var SideBarOpen = document.getElementById('sideBarOpen');
	// var SideBarClose = document.getElementById('sideBarClose');
	// var ULContent = document.getElementsByTagName("UL")[0];
	// var SideBarWidth = document.getElementsByClassName("sidebar")[0];

	// var SideBarText = '<li><span class="col-md-2" id="logo"><b> WheelOn </b></span><span class="icon-star" id="sideBarClose" onclick="closeMenu()"></span></li><br><li class="options">Forum</li><li class="options">Routes</li><li class="options">Rate</li><li class="copyright"> WheelOnInThisTogether <br> Copyright 2020 </li>'

	
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
		// Logo.onclick = function() {
		// 	window.open("homepage.html", "_self");
		// }

		// SideBarOpen.onclick = function() {
		// 	SideBarWidth.style.width = '20%';
		// 	ULContent.innerHTML = SideBarText;
		// }

		// $(document).on('click', '#sideBarClose', function () {
		// 	SideBarWidth.style.width = 0;
		// 	ULContent.innerHTML = "";
		// });

		// $(document).on('click', '.options', function() {
		// 	if (this.innerHTML == "Forum") {window.open("forum_homepage.html", "_self");}
		// 	else if (this.innerHTML == "Routes") { } // routes
		// 	else if (this.innerHTML == "Rate") {window.open("rates.html", "_self");}
		// });
	}

	// document.getElementsByClassName("sidebar")[0].style.width = 0;
	// document.getElementsByTagName("UL")[0].innerHTML = "";
	bindEvents();
	//autocomplete for search bar
});