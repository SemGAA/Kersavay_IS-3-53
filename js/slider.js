class ProductSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        // Создаем навигацию
        const nav = document.createElement('div');
        nav.className = 'slider-nav';
        nav.innerHTML = `
            <button class="prev">←</button>
            <button class="next">→</button>
        `;
        this.slider.appendChild(nav);

        // Показываем первый слайд
        this.showSlide(this.currentSlide);

        // Навешиваем обработчики
        this.slider.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        this.slider.querySelector('.next').addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.product-slider')) {
        new ProductSlider('.product-slider');
    }
});