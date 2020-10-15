class Slider {
    constructor($slide) {
        self = this;

        // elements
        self.$root = $slide;
        self.$prev = $slide.querySelector(".slider__prev");
        self.$next = $slide.querySelector(".slider__next");
        self.$indexContainer = $slide.querySelector(".slider__index-container");
        self.$indexes = [...$slide.querySelectorAll(".slider__index")];
        self.$slideContainer = $slide.querySelector(".slider__container");
        self.$slides = [...$slide.querySelectorAll(".slider__slide")];

        // states
        self.index = self.$indexes.indexOf(self.$indexContainer.querySelector(".slider__index--active"));
        self.count = self.$slides.length;

        for (let i = 0; i < self.count; ++i) {
            self.$indexes[i].dataset.index = i;
        }

        // hook events
        self.$prev.addEventListener("click", () => {
            self.setIndex(self.index - 1);
        });

        self.$next.addEventListener("click", () => {
            self.setIndex(self.index + 1);
        });

        for (const $e of self.$indexes) {
            $e.addEventListener("click", function () {
                self.setIndex(this.dataset.index);
            });
        }
    }

    setIndex(index) {
        if (index < 0) self.index = 0;
        else if (index > self.count - 1) self.index = self.count - 1;
        else self.index = index;

        for (const $e of self.$indexes) {
            $e.classList.remove("slider__index--active");
        }
        self.$root.style.setProperty("--index", self.index);
        self.$indexes[self.index].classList.add("slider__index--active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let slider = new Slider(document.querySelector(".slider"));
});
