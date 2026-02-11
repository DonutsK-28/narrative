// main.js

console.log("Hello, World!");
let targetElement = document.querySelector("h2");
console.log(targetElement.outerHTML);
targetElement.addEventListener("mouseover", function() {
    console.log(this.innerText); 
    this.innerText = "CRUELTY";
}); 
targetElement.addEventListener("mouseout", function() {
    this.innerText = "IMPERFECTIONS";
    this.style = "cursor: wait"; 
    this.style = "cursor: pointer"; 
})