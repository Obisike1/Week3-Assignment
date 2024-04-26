// Using DOM Selector

const mine = document.getElementById("food");
console.log(mine);

// DOM Manipulation Adding a New Element

mine.textContent = "My Favorite foods";

// Changing Existing Color
const button = document.getElementById ("btn")
button.addEventListener("click", ()=>{
mine.style.color = "red"
mine.style.fontSize = "60px"
})