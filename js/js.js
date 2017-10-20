$(document).ready(() => {
var aboutButon = $(".about-drop");
var aboutMenu = $(".about-menu");
var galleryButon = $(".gallery-drop");
var galleryMenu = $(".gallery-menu");
var newsButon = $(".news-drop");
var newsMenu = $(".news-menu");
var galleryWindow1 = $(".gal1");
var galleryWindow2 = $(".gal2");
var galleryStripe1 = $(".stripe1");
var galleryStripe2 = $(".stripe2");

var chairlist = $(".yourchair-calc");
var priceList =  $(".yourprice-calc");
var sumList =  $(".yoursum-calc");
var chairColorCombo = $(".chair-color option");
var chairTypeComboStack = $(".chair-type");
var chairTypeCombo = $(".chair-type option");
var chairFabricCombo = $(".chair-mat option");

var chairSlide = $(".chair-img");
var textSlide = $(".chair-slider-text p");
var slideCount = 0;
var slides = ["images/red_chair.png",
                "images/black_chair.png"];

var slidesText = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia, lorem vel facilisis pharetra, risus nulla rhoncus lacus, a dictum libero enim sed risus. Maecenas vitae enim vel lacus porttitor porta. Nulla velit orci, interdum tristique metus vel, vulputate feugiat tortor.",
                  "Praesent molestie mi eget massa dignissim tincidunt. Maecenas volutpat blandit urna, non pulvinar arcu imperdiet quis. Ut semper sit amet ex ut semper. Cras sit amet magna nisi. Mauris ligula erat, molestie at justo vel, congue pulvinar eros. Mauris condimentum imperdiet consequat."];

/*
chairTypeCombo.map((item) => {
  $(item).on("select", (event) => {
    console.log(this);
  });
});
*/

chairSlide.on("click", () => {
slideCount++;
chairSlide.attr("src", slides[slideCount])
textSlide.text(slidesText[slideCount]);
if(slides.length == slideCount) {
  slideCount = 0;
  chairSlide.attr("src", slides[0]);
  textSlide.text(slidesText[0]);
}
});


aboutButon.on("mouseenter", (event) => {
  aboutMenu.toggleClass("hidden");
});
aboutButon.on("mouseleave", (event) => {
  aboutMenu.toggleClass("hidden");
});
galleryButon.on("mouseenter", (event) => {
  galleryMenu.toggleClass("hidden");
});
galleryButon.on("mouseleave", (event) => {
  galleryMenu.toggleClass("hidden");
});
newsButon.on("mouseenter", (event) => {
  newsMenu.toggleClass("hidden");
});
newsButon.on("mouseleave", (event) => {
  newsMenu.toggleClass("hidden");
});
galleryWindow1.on("mouseenter", (event) => {
  galleryStripe1.toggleClass("hidden");
});
galleryWindow2.on("mouseenter", (event) => {
  galleryStripe2.toggleClass("hidden");
});
galleryWindow1.on("mouseleave", (event) => {
  galleryStripe1.toggleClass("hidden");
});
galleryWindow2.on("mouseleave", (event) => {
  galleryStripe2.toggleClass("hidden");
});
});
