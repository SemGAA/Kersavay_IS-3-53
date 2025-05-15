document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Загрузка последних новостей на главную
    const newsGrid = document.querySelector('.news-grid');
    
    if (newsGrid) {
        const latestNews = [
            {
                title: 'Новая модель вагона',
                date: '15.10.2023',
                excerpt: 'Представляем новую модель грузового вагона с улучшенными характеристиками.'
            },
            {
                title: 'Выставка транспорта',
                date: '05.10.2023',
                excerpt: 'Участие УКВЗ в международной выставке железнодорожного транспорта.'
            },
            {
                title: 'Экологическая инициатива',
                date: '28.09.2023',
                excerpt: 'Завод переходит на экологически чистые технологии производства.'
            }
        ];

        latestNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p class="news-date">${news.date}</p>
                <p>${news.excerpt}</p>
                <a href="news.html" class="read-more">Подробнее →</a>
            `;
            newsGrid.appendChild(newsItem);
        });
    }

    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Инициализация фильтров новостей
function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Здесь можно добавить логику фильтрации новостей
            const filter = this.textContent;
            console.log(`Фильтр: ${filter}`);
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли на странице фильтры новостей
    if (document.querySelector('.news-filters')) {
        initNewsFilters();
    }
    
    // Проверяем, есть ли на странице форма обратной связи
    if (document.getElementById('feedbackForm')) {
        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
});
