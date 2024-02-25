// Background Image Slider
const backgroundImagesListContainer = document.querySelector(
	".background-image-list"
);
const backgroundImages = document.querySelectorAll(
	".background-image-list .actual-background-image"
);

// Next and Previous Buttons
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
let imageIdx = 0;

// Function is used so that image index is always stays in its range.
function validateImageIndex() {
	if (imageIdx == backgroundImages.length ) {
		imageIdx = 0;
	} else if (imageIdx == -1) {
		imageIdx = backgroundImages.length - 1;
	}
}

// Function to change Image.
function changeSliderImage(caller) {
	backgroundImages[imageIdx].style.display = "none";

	if (caller == "next") {
		imageIdx++;
	} else if (caller == "prev") {
		imageIdx--;
	}
	validateImageIndex();
	backgroundImages[imageIdx].style.display = "block";
}

// Next Button
nextButton.addEventListener("click", function () {
	changeSliderImage("next");
});

// Previous Button
prevButton.addEventListener("click", function () {
	changeSliderImage("prev");
});


// Sidebar
const sidebarElement = document.querySelector(".sidebar-container");
const hamburgerMenuButton = document.querySelector(".hamburger-menu-container");
const bodyElement = document.getElementsByTagName("body");
console.log(bodyElement);
hamburgerMenuButton.addEventListener('click', function(){
	sidebarElement.style.transform = `translateX(0%)`;
	bodyElement[0].style.overflowY = "hidden";
	
})

// Close Button.
const menuClose = document.querySelector(".sidebar-container .hamburger-menu-close-button");
menuClose.addEventListener('click', function(){
	sidebarElement.style.transform = `translateX(-100%)`;
	bodyElement[0].style.overflowY = "auto";
});
