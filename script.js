const boxes = document.querySelectorAll(".box");

// variable for changing the header
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");
const colors = ["#efd81d", "#61dbfb", "#41b883", "#b52e31", "#43853d"];
const techs = ["CLT", "SCD", "CRC", "IIPC", "SRI"];


// variable to count the boxes in the array
let current = 1;

// function to change the header
const textStyle = () => {
    heading.style.color = colors[current - 1];
    heading.textContent = techs[current - 1];
    btn.style.backgroundColor = colors[current - 1];
    btn.firstElementChild.textContent = techs[current - 1];
}

// to move and rotate the boxes
let interval = setInterval(() => {
    boxes.forEach((box) => {
        // to move the boxes infinitly
        if (current > boxes.length) current = 1;

        if (box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
    textStyle();
    current++;
}, 5000);

// adding event to the boxes on click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        })
        box.classList.add("active");
        current = box.classList[1].split("-")[1] * 1;
        textStyle();
        clearInterval(interval);
    });
});