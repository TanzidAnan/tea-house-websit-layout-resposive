const ulTag = document.getElementById('nav-container');
let lastClick = null
const listItem = ulTag.getElementsByTagName("li");
// console.log(listItem);

for (let signelListItem of listItem) {
    signelListItem.addEventListener('click', function () {
        if (lastClick== null) {
            signelListItem.style.backgroundColor = "red"
            signelListItem.style.color = 'white';
            lastClick =signelListItem
        }
        else{
            lastClick.style.backgroundColor ="transparent";
            lastClick.style.color = '#eee';
            signelListItem.style.backgroundColor ="red";
            signelListItem.style.color ="white";
            lastClick =signelListItem
        }

    })
}