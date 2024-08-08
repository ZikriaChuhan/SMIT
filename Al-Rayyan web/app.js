
let upto1 = 0;
function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML = `${++upto1} +`;
    if (upto1 < 9) {
        setTimeout(updated1, 300); 
    }
}
setTimeout(updated1, 800);




let counts2 = setInterval(updated2);
let upto2 = 0;

function updated2() {

    let count = document.getElementById("counter2");
    count.innerHTML = `${++upto2} +`;
    if (upto2 === 850) {
        clearInterval(counts2);
    }
}

let upto3 = 0;
function updated3() {
    let count = document.getElementById("counter3");
    count.innerHTML = `${++upto3} +`;
    if (upto3 < 8) {
        setTimeout(updated3, 300); 
    }
}
setTimeout(updated3, 800);


let upto4 = 0;
function updated4() {
    let count = document.getElementById("counter4");
    count.innerHTML = `${++upto4} +`;
    if (upto4 < 50) {
        setTimeout(updated4, 50); 
    }
}
setTimeout(updated4, 800);







let logoSlider = document.getElementById("logoSlider");
let logos = document.querySelectorAll(".slide");

let currentIndex = 0;
let logosToShow = 6;
let interval = 2000;

function slide() {
  currentIndex = (currentIndex + 1) % (logos.length - logosToShow + 1);
  logoSlider.style.transform = `translateX(${-currentIndex * (150 + 25)}px)`;
}

setInterval(slide, interval);














