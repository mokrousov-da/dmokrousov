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

// document.addEventListener('wheel', (e) => {
//     if (e.deltaY < 0) {

//     } else if (e.deltaY > 0) {
//         decreaseScale();
//     }
// });


// function decreaseScale() {
    
//     if (scaleCounter >= 0.12) {
//         scaleCounter = scaleCounter;
//         return;
//     } else {
//         scaleCounter += 0.005; 
//         marginCounter += 5;
//         document.querySelector('.second-slide').style.marginTop = `-${marginCounter}px`;
//     }
//     sliderArray[0].style.transform = `scale3d(${scaleX-scaleCounter}, ${scaleY-scaleCounter}, 1)`;
// }

// document.querySelector('.second-slide').addEventListener('click', () => {
//     console.log(document.querySelector('.second-slide').offsetTop);
//     console.log(document.querySelector('.second-slide').scrollTop);
//     console.log(window.pageYOffset);
// })