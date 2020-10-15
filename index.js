class Slider {
    constructor($slide) {
        // elements
        this.$root = $slide;
        this.$prev = $slide.querySelector(".slider__prev");
        this.$next = $slide.querySelector(".slider__next");
        this.$indexContainer = $slide.querySelector(".slider__index-container");
        this.$indexes = [...$slide.querySelectorAll(".slider__index")];
        this.$slideContainer = $slide.querySelector(".slider__container");
        this.$slides = [...$slide.querySelectorAll(".slider__slide")];

        // states
        this.index = this.$indexes.indexOf(this.$indexContainer.querySelector(".slider__index--active"));
        this.count = this.$slides.length;

        for (let i = 0; i < this.count; ++i) {
            this.$indexes[i].dataset.index = i;
        }

        // hook events
        this.$prev.addEventListener("click", () => {
            this.setIndex(this.index - 1);
        });

        this.$next.addEventListener("click", () => {
            this.setIndex(this.index + 1);
        });

        for (const $index of this.$indexes) {
            $index.addEventListener("click", (e) => {
                this.setIndex(e.target.dataset.index);
            });
        }
    }

    setIndex(index) {
        if (index < 0) this.index = 0;
        else if (index > this.count - 1) this.index = this.count - 1;
        else this.index = index;

        for (const $index of this.$indexes) {
            $index.classList.remove("slider__index--active");
        }
        this.$root.style.setProperty("--index", this.index);
        this.$indexes[this.index].classList.add("slider__index--active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let slider = new Slider(document.querySelector(".slider"));
});
