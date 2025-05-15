// Данные продуктов (в реальном проекте можно загружать с сервера)
const productsData = [
    {
        id: 1,
        name: "Полувагон модель 12-9876",
        category: "freight",
        year: 2023,
        capacity: 71,
        length: "13,4 м",
        weight: "22,5 т",
        volume: "82 м³",
        price: "4 850 000 ₽",
        images: ["wagon1.jpg", "wagon1-2.jpg", "wagon1-3.jpg"],
        description: "Полувагон модели 12-9876 предназначен для перевозки насыпных и навалочных грузов. Конструкция вагона обеспечивает высокую надежность и долговечность эксплуатации.",
        features: [
            "Усиленная рама",
            "Автосцепка СА-3",
            "Пневматическая тормозная система",
            "Защитное покрытие кузова"
        ]
    },
    {
        id: 2,
        name: "Цистерна для нефтепродуктов 15-3421",
        category: "freight",
        year: 2022,
        capacity: 65,
        length: "12,8 м",
        weight: "24,1 т",
        volume: "75 м³",
        price: "5 200 000 ₽",
        images: ["cistern1.jpg", "cistern1-2.jpg"],
        description: "Цистерна для перевозки нефтепродуктов с улучшенными характеристиками безопасности. Оснащена современными системами контроля и защиты.",
        features: [
            "Двойные стенки",
            "Система подогрева",
            "Электронный контроль уровня",
            "Антикоррозийное покрытие"
        ]
    },
    {
        id: 3,
        name: "Пассажирский вагон купе 48-1234",
        category: "passenger",
        year: 2023,
        capacity: 36,
        length: "24,5 м",
        weight: "56 т",
        volume: null,
        price: "18 750 000 ₽",
        images: ["passenger1.jpg", "passenger1-2.jpg", "passenger1-3.jpg"],
        description: "Комфортабельный пассажирский вагон купе-класса с современным дизайном и повышенным уровнем комфорта.",
        features: [
            "18 купе по 2 места",
            "Кондиционирование",
            "Биотуалеты",
            "Wi-Fi и розетки",
            "Система видеонаблюдения"
        ]
    },
    {
        id: 4,
        name: "Платформа для контейнеров 13-7654",
        category: "freight",
        year: 2021,
        capacity: 80,
        length: "19,8 м",
        weight: "28,3 т",
        volume: null,
        price: "3 900 000 ₽",
        images: ["platform1.jpg"],
        description: "Универсальная платформа для перевозки морских и железнодорожных контейнеров. Высокая грузоподъемность и надежность.",
        features: [
            "Крепления для контейнеров",
            "Усиленная конструкция",
            "Антикоррозийная обработка",
            "Возможность перевозки спецгрузов"
        ]
    },
    {
        id: 5,
        name: "Вагон-ресторан 44-5678",
        category: "passenger",
        year: 2023,
        capacity: 48,
        length: "24,5 м",
        weight: "52 т",
        volume: null,
        price: "22 300 000 ₽",
        images: ["restoran1.jpg", "restoran1-2.jpg"],
        description: "Современный вагон-ресторан с просторным обеденным залом и полностью оборудованной кухней.",
        features: [
            "36 посадочных мест",
            "Полноценная кухня",
            "Барная стойка",
            "Кондиционирование",
            "Стильный дизайн"
        ]
    },
    {
        id: 6,
        name: "Вагон-дефектоскоп ВДК-3",
        category: "special",
        year: 2022,
        capacity: 45,
        length: "22,1 м",
        weight: "48 т",
        volume: null,
        price: "35 000 000 ₽",
        images: ["defectoscope1.jpg"],
        description: "Специализированный вагон для диагностики железнодорожного полотна. Оснащен современным диагностическим оборудованием.",
        features: [
            "Ультразвуковой контроль",
            "Видеофиксация пути",
            "Лазерное сканирование",
            "Лаборатория на борту",
            "Система анализа данных"
        ]
    },
    {
        id: 7,
        name: "Хоппер для зерна 19-4321",
        category: "freight",
        year: 2023,
        capacity: 70,
        length: "14,2 м",
        weight: "23,8 т",
        volume: "90 м³",
        price: "4 600 000 ₽",
        images: ["hopper1.jpg", "hopper1-2.jpg"],
        description: "Современный хоппер для перевозки зерновых культур с системой пневматической разгрузки.",
        features: [
            "Быстрая разгрузка",
            "Защита от влаги",
            "Контроль температуры",
            "Автоматические люки"
        ]
    },
    {
        id: 8,
        name: "Комплект тележек для грузовых вагонов",
        category: "components",
        year: 2023,
        capacity: null,
        length: null,
        weight: "4,2 т",
        volume: null,
        price: "1 200 000 ₽",
        images: ["trolley1.jpg"],
        description: "Тележки для грузовых вагонов с улучшенными ходовыми характеристиками и увеличенным сроком службы.",
        features: [
            "Усиленная конструкция",
            "Износостойкие детали",
            "Подшипники повышенной надежности",
            "Совместимость с большинством моделей"
        ]
    }
];

// Инициализация каталога
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка продуктов
    renderProducts(productsData);

    // Фильтрация по категориям
    document.querySelectorAll('.category-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.category-list a').forEach(a => a.parentNode.classList.remove('active'));
            this.parentNode.classList.add('active');
            
            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    // Фильтр по году
    document.getElementById('year-filter').addEventListener('change', function() {
        filterProducts();
    });

    // Фильтр по грузоподъемности
    const capacitySlider = document.getElementById('capacity-range');
    const capacityValue = document.getElementById('capacity-value');
    
    capacitySlider.addEventListener('input', function() {
        capacityValue.textContent = this.value;
        filterProducts();
    });

    // Сброс фильтров
    document.querySelector('.reset-filters').addEventListener('click', function() {
        document.querySelector('.category-list li a[data-category="all"]').parentNode.classList.add('active');
        document.querySelectorAll('.category-list li:not(:first-child)').forEach(li => li.classList.remove('active'));
        document.getElementById('year-filter').value = 'all';
        capacitySlider.value = 50;
        capacityValue.textContent = '50';
        renderProducts(productsData);
    });

    // Сортировка
    document.getElementById('sort-by').addEventListener('change', function() {
        sortProducts(this.value);
    });

    // Поиск
    document.querySelector('.search-box input').addEventListener('input', function() {
        searchProducts(this.value);
    });

    // Инициализация модального окна
    initModal();
});

// Рендер продуктов
function renderProducts(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    if (products.length === 0) {
        productGrid.innerHTML = '<div class="no-results">По вашему запросу ничего не найдено</div>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="images/products/${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-specs">
                    <div><span>Год:</span> <span>${product.year}</span></div>
                    ${product.capacity ? `<div><span>Грузоподъемность:</span> <span>${product.capacity} т</span></div>` : ''}
                    ${product.length ? `<div><span>Длина:</span> <span>${product.length}</span></div>` : ''}
                </div>
                <span class="product-price">${product.price}</span>
                <div class="product-actions">
                    <button class="details-btn" data-id="${product.id}">Подробнее</button>
                    <button class="order-btn" data-id="${product.id}">Заказать</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Добавляем обработчики для кнопок
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal(parseInt(this.dataset.id));
        });
    });

    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const product = productsData.find(p => p.id === productId);
            alert(`Заказ на ${product.name} оформлен! Мы свяжемся с вами для уточнения деталей.`);
        });
    });
}

// Фильтрация продуктов
function filterProducts(category = null) {
    const selectedCategory = category || document.querySelector('.category-list li.active a').dataset.category;
    const yearFilter = document.getElementById('year-filter').value;
    const capacityFilter = parseInt(document.getElementById('capacity-range').value);

    let filteredProducts = productsData;

    // Фильтр по категории
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Фильтр по году
    if (yearFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.year.toString() === yearFilter);
    }

    // Фильтр по грузоподъемности
    if (selectedCategory === 'freight' || selectedCategory === 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (!product.capacity) return true;
            return product.capacity >= capacityFilter;
        });
    }

    renderProducts(filteredProducts);
}

// Сортировка продуктов
function sortProducts(criteria) {
    let sortedProducts = [...productsData];

    switch(criteria) {
        case 'price-asc':
            sortedProducts.sort((a, b) => parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, '')));
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => parseFloat(b.price.replace(/[^\d]/g, '')) - parseFloat(a.price.replace(/[^\d]/g, '')));
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // По умолчанию - исходный порядок
            break;
    }

    renderProducts(sortedProducts);
}

// Поиск продуктов
function searchProducts(query) {
    if (!query.trim()) {
        renderProducts(productsData);
        return;
    }

    const searchTerm = query.toLowerCase();
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);
}

// Получение названия категории
function getCategoryName(category) {
    const names = {
        'freight': 'Грузовой вагон',
        'passenger': 'Пассажирский вагон',
        'special': 'Спецтехника',
        'components': 'Комплектующие'
    };
    return names[category] || 'Другое';
}

// Работа с модальным окном
function initModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openModal(productId) {
    const modal = document.getElementById('productModal');
    const product = productsData.find(p => p.id === productId);

    if (!product) return;

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="modal-images">
            <div class="main-image">
                <img src="images/products/${product.images[0]}" alt="${product.name}">
            </div>
            <div class="thumbnail-container">
                ${product.images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-img="images/products/${img}">
                        <img src="images/products/${img}" alt="${product.name}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            <span class="modal-category">${getCategoryName(product.category)}</span>
            <div class="modal-price">${product.price}</div>
            
            <div class="modal-specs">
                <div class="spec-row">
                    <span class="spec-name">Год выпуска:</span>
                    <span class="spec-value">${product.year}</span>
                </div>
                ${product.capacity ? `
                <div class="spec-row">
                    <span class="spec-name">Грузоподъемность:</span>
                    <span class="spec-value">${product.capacity} т</span>
                </div>` : ''}
                ${product.length ? `
                <div class="spec-row">
                    <span class="spec-name">Длина:</span>
                    <span class="spec-value">${product.length}</span>
                </div>` : ''}
                ${product.weight ? `
                <div class="spec-row">
                    <span class="spec-name">Вес:</span>
                    <span class="spec-value">${product.weight}</span>
                </div>` : ''}
                ${product.volume ? `
                <div class="spec-row">
                    <span class="spec-name">Объем:</span>
                    <span class="spec-value">${product.volume}</span>
                </div>` : ''}
            </div>
            
            <div class="modal-description">
                <h4>Описание</h4>
                <p>${product.description}</p>
            </div>
            
            ${product.features.length ? `
            <div class="modal-features">
                <h4>Особенности</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>` : ''}
            
            <div class="modal-actions">
                <button class="order-btn">Заказать</button>
                <button class="details-btn">Скачать спецификации (PDF)</button>
            </div>
        </div>
    `;

    // Обработчики для миниатюр
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.querySelector('.main-image img').src = this.dataset.img;
        });
    });

    // Обработчик кнопки заказа
    document.querySelector('.modal-actions .order-btn').addEventListener('click', function() {
        alert(`Заказ на ${product.name} оформлен! Мы свяжемся с вами для уточнения деталей.`);
        modal.style.display = 'none';
    });

    modal.style.display = 'block';
}