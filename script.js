const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

function getCssValuePrefix() {
	var rtrnVal = "";
	var prefixes = ["-o-", "-ms-", "-moz-", "-webkit-"];
	var dom = document.createElement("div");

	for (var i = 0; i < prefixes.length; i++) {
		dom.style.background = prefixes[i] + "linear-gradient(#000000, #ffffff)";
		if (dom.style.background) {
			rtrnVal = prefixes[i];
		}
	}

	dom = null;
	delete dom;

	return rtrnVal;
}

var dom = document.getElementById("body");

var scrollPosition = window.innerHeight;

window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var elem = document.getElementById("body");

	if (scrollTop + 2 > 0 && scrollTop + 2 < scrollPosition) {
		dom.style.background = "rgb(48, 50, 55)";
	} else if (scrollTop + 2 > scrollPosition && scrollTop + 2 < scrollPosition * 2) {
		dom.style.backgroundImage =
			getCssValuePrefix() + "linear-gradient( 45deg, #b5179e, #7209b7)";
	} else if (scrollTop + 2 > scrollPosition * 2 && scrollTop + 2 < scrollPosition * 3) {
		dom.style.backgroundImage =
			getCssValuePrefix() + "linear-gradient( 40deg, rgb(20, 200, 100), rgb(10, 160, 120)";
	} else if (scrollTop + 2 > scrollPosition * 3 && scrollTop + 2 < scrollPosition * 4) {
		dom.style.backgroundImage =
			getCssValuePrefix() + "linear-gradient( 50deg, #2a89b0, #4895ef)";
	} else {
		elem.className = "site-main";
	}
}
