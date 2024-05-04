//  start menu box
let ShowAndHideMenu = document.querySelectorAll('.MenuBtn'),
menuBox = document.querySelector('.menuBox');

ShowAndHideMenu.forEach(e =>{
e.addEventListener('click',()=>{
    if(e.matches('.openMenuBtn')) menuBox.style = `right:0;`;
      else menuBox.style = `right:-100vw;`;
})})
// end menu box
// start slider
let sliderMoveBtn = document.querySelectorAll('.sliderMoveBtn'),
    sliderContainer = document.querySelectorAll('.sliderContainer'),
    sliderCounter = [0,0];


 function sliderMove(Counter,counterIndex,container,containerIndex,btnClick){
//      Counter => sliderCounter index for check container move
//     counterIndex => index of slider counter
//     container => container slider
//      btnClick => check btn
    if(!btnClick.matches(".rightBtn")){
    if(Counter[counterIndex] < container[containerIndex].clientWidth*2) {
        Counter[counterIndex]+=container[containerIndex].clientWidth;
        container[containerIndex].style = `transform : translateX(-${Counter[counterIndex]}px)`;
    }}
    else {
          if(Counter[counterIndex] > 0){
        Counter[counterIndex]-=container[containerIndex].clientWidth;
        container[containerIndex].style = `transform : translateX(-${Counter[counterIndex]}px)`;
       }
    }
 }

 sliderMoveBtn.forEach((e,i)=>{
     if(i<2){
    e.addEventListener('click',()=>{
            sliderMove(sliderCounter,0,sliderContainer,0,e)
        })
     }
     else {
        e.addEventListener('click',()=>{
            sliderMove(sliderCounter,1,sliderContainer,1,e)
        })

     }

 })

//  sliderMoveBtn[0].addEventListener('click',()=>{
//     sliderMove(sliderCounter,0,sliderContainer,sliderMoveBtn[0])

// })
// sliderMoveBtn[1].addEventListener('click',()=>{
//     sliderMove(sliderCounter,0,sliderContainer,sliderMoveBtn[1])

// })














