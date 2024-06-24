function showMenu(menuId) {
    // Ẩn tất cả các menu dropdown
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(function(menu) {
        menu.style.display = 'none';
    });

    // Hiển thị menu với ID được cung cấp
    var menu = document.getElementById(menuId);
    if (menu) {
        menu.style.display = 'block';
    }
}
/////////////////////////////////////////////
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
///////////////////////////////////////////////////////
let imglist2 = document.querySelector('.slider2 .imglist2');
let item2 = document.querySelectorAll('.slider2 .imglist2 .items2');
let prev2 = document.getElementById('prev2');
let next2 = document.getElementById('next2');
let dot2 = document.querySelectorAll('.slider2 .dot2 li');
let active2 = 0;
let lengthItems2 = item2.length - 5;

next2.onclick = function () {
    if (active2 + 1 > lengthItems2) {
        active2 = 0;
    } else {
        active2 = active2 + 1;
    }
    reloadSlider2();
}

prev2.onclick = function () {
    if (active2 - 1 < 0) {
        active2 = lengthItems2;
    } else {
        active2 = active2 - 1;
    }
    reloadSlider2();
}

function reloadSlider2() {
    let checkLeft2 = item2[active2].offsetLeft-8;
    imglist2.style.left = -checkLeft2 + 'px';

    let lastActiveDot2 = document.querySelector('.slider2 .dot2 li.active2');
    lastActiveDot2.classList.remove('active2');
    dot2[active2].classList.add('active2');
    clearInterval(reFreshSlider2);
    reFreshSlider2 = setInterval(() => { next2.click() },100000);
}

let reFreshSlider2 = setInterval(() => { next2.click() }, 100000);
////////////////////////////////////////////////////////////////
