const imageCircleBtn = document.querySelector('.btn__image-circle');
const sliderArray = Array.from(document.querySelectorAll('.slide'));
let degree = 0;
let blurGrade = 0;
let scaleX = 1, scaleY = 1, scaleZ = 1, scaleCounter = 0;
let marginCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    rotateBtnCircle();
})


function rotateBtnCircle() {
    if (degree >= 360) {
        degree = 0;
    }
    degree += 0.2;

    imageCircleBtn.style.transform = `rotateZ(${degree}deg)`;
    window.requestAnimationFrame(rotateBtnCircle);
}

let currentHeight;
let slideHeight = sliderArray[0].offsetHeight;
const coef = 0.5/slideHeight/0.96;

let i = 0;
let a = 0;
// document.querySelector('body').addEventListener('wheel', (e) => {
//     if (e.deltaY > 0) {
//        changeScaleDown();
//        console.log(currentHeight);
//     } else if (e.deltaY < 0) {
//         changeScaleUp();
//     }
    
// })

// function changeScaleDown() {
//     currentHeight = window.pageYOffset;
//     if (currentHeight > 0 && currentHeight < slideHeight/0.96) {
//         sliderArray[0].style.transform = `scale3d(${1-coef*currentHeight}, ${1-coef*currentHeight}, 1)`;
    
//         sliderArray[0].style.position = "sticky";
//         sliderArray[0].style.top = "0";
//     }
// }

// function changeScaleUp() {
//     // const compStyles = window.getComputedStyle(sliderArray[0]);
//     // const paraScale = compStyles.getPropertyValue('transform');
//     const paraScale = sliderArray[0].style.transform;
//     console.log(paraScale);
//     currentHeight = window.pageYOffset;
//     if (currentHeight > 0 && currentHeight < slideHeight/0.96) {
//         sliderArray[0].style.transform = `scale3d(${0.5+coef*currentHeight}, ${0.5+coef*currentHeight}, 1)`;
    
//         sliderArray[0].style.position = "sticky";
//         sliderArray[0].style.top = "0";
//     }
// }