import "./styles.css";
import { greeting } from "./greeting.js";
import home from './home.js'
import menu from './menu.js'
import about from './about.js'
let currentItem = 'home'
console.log(greeting);
const content = document.querySelector('#content');
// content.appendChild(home)
// debugger
if (document != undefined) {
  document.addEventListener("DOMContentLoaded", function (e) {
    // e.preventDefault();
    content.appendChild(home);
  });
} else {
  content.textContent = "Oops,something went wrong :(";
}
function changeContent(item) {
  

  // Fade out
  content.style.opacity = "0";

  setTimeout(() => {
    // Change content after fade-out
      content.textContent = '';
      content.appendChild(item)

    // Fade back in
    content.style.opacity = "1";
  }, 500); // Match the duration of the transition
}
// console.log(document.doctype);


console.log(content);
document.querySelector(".home-btn").addEventListener('click', function (e) {
    console.log(e);
    // debugger
    if (currentItem !== 'home') {
        
        changeContent(home)
    }
    currentItem = 'home'
    // content.appendChild(home)
})

document.querySelector(".menu-btn").addEventListener("click", function (e) {
    console.log(e);
    if (currentItem !== 'menu') {
    
        changeContent(menu)
    } currentItem = 'menu'
});

document.querySelector(".about-btn").addEventListener("click", function (e) {
  console.log(e);
  if (currentItem !== "about") {
    changeContent(about);
  }
  currentItem = "about";
});
// document.querySelector('.email').addEventListener('click', function (e) {
//     // e.preventDefault()
//     navigator.clipboard.writeText(e.target.textContent);
//     navigator.clipboard.readText().then((text) =>console.log( text));
// })

// console.dir(navigator.clipboard);
// navigator.clipboard.writeText('Test')
// console.log(navigator);


div.c