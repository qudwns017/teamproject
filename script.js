const saDefaultMargin = 50;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll('.s1');

const saFunc = function () {
    for (const element of saElementList) {
        if (!element.classList.contains('show')) {
            if (element.dataset.saMargin) {
                saTriggerMargin = parseInt(element.dataset.saMargin);
            } else {
                saTriggerMargin = saDefaultMargin;
            }

            if (element.dataset.saTrigger) {
                saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
            } else {
                saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
            }

            if (window.innerHeight > saTriggerHeight) {
                let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
                setTimeout(function () {
                    element.classList.add('show');
                }, delay);
            }
        }
    }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


const links = document.querySelectorAll(".btn1 a");
const link2 = document.querySelectorAll(".btn2 a");
const link1 = document.querySelectorAll(".btn3 a");

for (const link of links) { link.addEventListener("click", clickHandler); }
for (const link of link2) { link.addEventListener("click", clickHandler); }
for (const link of link1) { link.addEventListener("click", clickHandler); }

function clickHandler(e) {

    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    setTimeout(function () {
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    },
        000);
}