var button = document.getElementsByTagName("button")[0];
var background = document.querySelector("body main");
var colorLabel = document.querySelector("main p .color-label")
var allColors = ["red", "green", "yellow", "white", "#ab1122", "#bcjj22", "brown", "blue", "white", "#112233"];
button.addEventListener("click", ()=>{
 var randomNumber = Math.floor(Math.random() * allColors.length);
 background.style.backgroundColor = allColors[randomNumber];
 colorLabel.textContent = allColors[randomNumber];
});