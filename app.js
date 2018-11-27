//SLIDER

var buttons = document.querySelectorAll(".arrow");
var buttonPrev = buttons[0];
var buttonNext = buttons[1];
var elements = document.querySelectorAll(".slider .container li");
var index = 0;

console.log(buttons);
console.log(buttonPrev);
console.log(buttonNext);
console.log(elements);

elements[0].classList.add("visible");

buttonPrev.addEventListener("click", function () {
    elements[index].classList.remove("visible");
    index--;
    if (index < 0) {
        index = elements.length - 1;
    }
    elements[index].classList.add("visible");
});

buttonNext.addEventListener("click", function () {

    elements[index].classList.remove("visible");
    index++;
    if (index >= elements.length) {
        index = elements[0].value;
    }
    elements[index].classList.add("visible");
});

// CHAIRS ANIMATION

var box1 = document.querySelector(".box1 div");
var box2 = document.querySelector(".box2 div");

