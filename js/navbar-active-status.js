const ulTag =document.getElementById('nav-container');

const listItem =ulTag.getElementsByTagName("li");
// console.log(listItem);

for(let signelListItem of listItem){
    signelListItem.addEventListener('click',function(){
        console.log(signelListItem.innerText)
    })
}