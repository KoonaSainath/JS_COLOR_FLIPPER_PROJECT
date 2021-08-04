var button = document.querySelector("button");
var colorLabel = document.querySelector("main p .color-label");
var background = document.querySelector("body main");
allValuesOfHex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

button.addEventListener("click", ()=>{
 let color = generateNewColor();
 colorLabel.textContent = color;
 background.style.backgroundColor = color;
})

function generateNewColor(){
 let color = "#";
 for(let i = 0; i < 6; i++){
  let randomNumber = Math.floor((Math.random() * allValuesOfHex.length));
  color = color + allValuesOfHex[randomNumber];
 }
 return color;
}