const count = document.getElementById('count');
console.log(count.innerText);

function increaseCount(){
   let currentCount =Number(count.innerText);
   currentCount++
   count.innerText =currentCount;
    
}

function discresCount(){
    let currentCount =Number(count.innerText);
    if(currentCount>0){
        currentCount--
    }
    
    count.innerText =currentCount;
}

document.getElementById('increaseCount').addEventListener('click', function(){
   let carrentCount = Number(count.innerText);
   carrentCount++
   count.innerText =carrentCount
})