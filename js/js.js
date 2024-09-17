const images =document.getElementsByTagName('img');
const card =document.getElementsByClassName('grid');
const button =document.getElementsByClassName('btnButton')[0]


const tagName =document.getElementsByTagName('html')[0];
tagName.setAttribute("data-theme","dark")
console.log(tagName.getAttribute("data-theme"))
// console.log(images)
// console.log(card)
console.log(button.textContent)