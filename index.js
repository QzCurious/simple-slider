let $next = document.querySelector(".slider__next");
let $prev = document.querySelector(".slider__prev");
let $container = document.querySelector(".slider__container");
let num_of_slides = $container.querySelectorAll(".slider__slide").length;
let $indexes = document.querySelectorAll(".slider__index-container .slider__index");

for (let i = 0; i < $indexes.length; ++i) {
    $indexes[i].dataset.index = i + 1;
}

for (let i = 0; i < $indexes.length; ++i) {
    $indexes[i].addEventListener("click", function (e) {
        // clear active states
        for (let i = 0; i < $indexes.length; ++i) {
            $indexes[i].classList.remove("slider__index--active");
        }

        $container.style.marginLeft = (parseInt(e.target.dataset.index) - 1) * -480 + `px`;
        e.target.classList.add("slider__index--active");
    });
}

$next.addEventListener("click", function () {
    let currentMargin = parseInt($container.style.marginLeft);
    if (Number.isNaN(currentMargin)) currentMargin = 0;

    console.log(currentMargin);
    console.log(-480 * (num_of_slides - 1));

    // if lastest, don't push
    // margin * (num_of_slides-1)
    if (currentMargin == -480 * (num_of_slides - 1)) return;

    // push to left
    $container.style.marginLeft = currentMargin - 480 + `px`;
});

$prev.addEventListener("click", function () {
    let currentMargin = parseInt($container.style.marginLeft);
    if (Number.isNaN(currentMargin)) currentMargin = 0;

    console.log(currentMargin);
    console.log(480 * (num_of_slides - 1));

    // if first, don't push
    // first margin 0
    if (currentMargin == 0) return;

    // push to right
    $container.style.marginLeft = currentMargin + 480 + `px`;
});
