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
let sliderCounter;
let slideHeight = sliderArray[0].offsetHeight;
const coef = 0.5/slideHeight/0.96;

sliderCounter = Math.floor(window.pageYOffset / slideHeight);
currentHeight = window.pageYOffset;

const cursorImage = document.createElement('p');
cursorImage.innerHTML = 'see the project';
cursorImage.classList.add('cursorImage');

const sliderImageArray = Array.from(document.querySelectorAll('.right-col'));

sliderImageArray.forEach(element => {
    element.appendChild(cursorImage.cloneNode(true));
    element.addEventListener('mousemove', (e) => {
        element.querySelector('.cursorImage').style.left = e.pageX + 15 + 'px';
        element.querySelector('.cursorImage').style.top = e.pageY + 15 + 'px';
        element.querySelector('.cursorImage').style.display = 'block';
    })
})