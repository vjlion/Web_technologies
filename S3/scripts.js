class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.timer = null;
    }

    // Методы для управления коруселью
    showSlide(index) {
        this.slides.forEach(function (slide) {
            slide.classList.remove('active');
        });
        this.slides[index].classList.add('active');
    }

    nextSlide() {
        this.currentSlide++;
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        this.showSlide(this.currentSlide);
    }

    startAuto() {
        let that = this;
        this.timer = setInterval(function () {
            that.nextSlide();
        }, 5000);
    }

    stopAuto() {
        clearInterval(this.timer);
    }
}

let slider = new Slider();
slider.showSlide(0);
slider.startAuto();