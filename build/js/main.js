let imglist = document.querySelector('.slider .imglist ');
let item = document.querySelectorAll('.slider .imglist .item');
let dot = document.querySelectorAll('.slider .dot li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lenghtItems =item.length -1;
next.onclick = function(){
    if(active +1 > lenghtItems){
        active =0;
    }else{
        active = active+1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active -1 < 0){
        active = lenghtItems;
    }else{
        active = active-1;
    }
    reloadSlider();
}
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    imglist.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dot li.active');
    lastActiveDot.classList.remove('active');
    dot[active].classList.add('active');
    clearInterval(reFreshSlider);
    reFreshSlider = setInterval(()=>{next.click()},3000);
}
dot.forEach((li,key)=>{
    li.addEventListener('click',function(){
        active=key;
        reloadSlider();
    })
})
let reFreshSlider = setInterval(()=>{next.click()},3000);