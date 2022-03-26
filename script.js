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
		body.className = "color-1";
	} else if (scrollTop + 2 > scrollPosition && scrollTop + 2 < scrollPosition * 2) {
		dom.className = "color-2";
	} else if (scrollTop + 2 > scrollPosition * 2 && scrollTop + 2 < scrollPosition * 3) {
		dom.className = "color-3";
	}
}

const dialog = document.getElementById("modal");
const openModal = document.getElementById("email-button");
const closeModal = document.querySelector(".email-submit");
var cancel = document.getElementById("cancel-button");

function openCheck(dialog) {
	if (dialog.open) {
		console.log("dialog open");
	} else {
		console.log("dialog close");
	}
}

openModal.addEventListener("click", function () {
	dialog.showModal();
});

cancel.addEventListener("click", function () {
	dialog.close();
});

closeModal.addEventListener("click", function () {
	dialog.close();
});
