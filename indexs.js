let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carouser');
let listItemDom = document.querySelector('.carouser .list');
let thumbnailDom =document.querySelector('.carouser .thumbnail');

nextDom.onclick = function(){
    showSlider('next')
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 100000;
let runTimeOut;
let runAutoRun= setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carouser .list .item');
    let itemThumbnail = document.querySelectorAll('.carouser .thumbnail .item');
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
   carouselDom.classList.remove('next');
   carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
     nextDom.click();
    }, timeAutoNext);
}
function menu(){
    document.querySelector('.sidebar').style.display = 'flex'
    }
function closeTop(){
     document.querySelector('.sidebar').style.display = 'none'
}
function lightButton(){
const cont =document.querySelector('body')
const grade = document.querySelector('.grades')
grade.style.border='solid 2px black'
cont.style.backgroundColor ='#fff'
cont.style.color ='black'
const books = document.querySelector('.library-cont');
books.style.background=' linear-gradient(43deg, #fff 20%, rgb(36, 24, 1) 100%)'
const box1 =document.querySelector('.quiz-cont')
box1.style.background='linear-gradient(23deg, rgb(142, 147, 221) 20%, #ffffdf 100%)'
document.querySelector('#light-icon').style.display ='none'
document.querySelector('#dark').style.display ='inline-block'
}
function darkButton(){
const books = document.querySelector('.library-cont');
books.style.background=' linear-gradient(43deg, black 20%, rgb(36, 24, 1) 100%)'
const grade = document.querySelector('.grades')
grade.style.border='solid 2px yellow'
const cont =document.querySelector('body')
cont.style.backgroundColor ='black'
cont.style.color='#fff'
const box1 =document.querySelector('.quiz-cont')
 box1.style.background='linear-gradient(34deg, rgb(0, 0, 0) 12%, rgba(5, 34, 61, 0.616) 70%, rgb(0, 57, 95) 100%)'
document.querySelector('#dark').style.display ='none'
document.querySelector('#light-icon').style.display ='inline-block'
}