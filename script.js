// Sample restaurant data with 200+ restaurants
const restaurants = [
    {
        id: 1,
        name: "Le Gondwana",
        category: "africain",
        description: "Un restaurant offrant une délicieuse cuisine africaine dans une ambiance chaleureuse et authentique.",
        commune: "Plateau",
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
        ],
        phone: "+225 27 20 30 40 51",
        address: "Plateau, Avenue Chardy, Abidjan",
        hours: "10h - 23h (Lun-Dim)",
        price: "5 000 - 25 000 FCFA",
        minPrice: 5000,
        maxPrice: 25000,
        lat: 5.3236,
        lng: -4.0265,
        rating: 4.5
    },
    {
        id: 2,
        name: "La Terrasse Parisienne",
        category: "europeen",
        description: "Cuisine française raffinée dans un cadre élégant avec une terrasse panoramique.",
        commune: "Cocody",
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        ],
        phone: "+225 27 21 31 41 51",
        address: "Cocody, Rue des Jardins, Abidjan",
        hours: "11h - 23h (Lun-Dim)",
        price: "8 000 - 35 000 FCFA",
        minPrice: 8000,
        maxPrice: 35000,
        lat: 5.3610,
        lng: -3.9872,
        rating: 4.7
    },
    // Add more restaurants here to reach 200+...
    // For the sake of brevity, I'm including only a few examples
    {
        id: 3,
        name: "Sakura Sushi",
        category: "asiatique",
        description: "Spécialités japonaises et sushi frais préparés par des chefs expérimentés.",
        commune: "II Plateaux",
        images: [
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1583623025817-180200a6b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1611143669185-af224c5e0102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        ],
        phone: "+225 27 22 32 42 52",
        address: "II Plateaux, Angré, Abidjan",
        hours: "11h30 - 22h (Mar-Dim) Fermé Lundi",
        price: "7 000 - 30 000 FCFA",
        minPrice: 7000,
        maxPrice: 30000,
        lat: 5.3540,
        lng: -3.9860,
        rating: 4.3
    },
    {
        id: 4,
        name: "Burger King",
        category: "fastfood",
        description: "La célèbre chaine internationale de burgers avec des options locales.",
        commune: "Marcory",
        images: [
            "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
            "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
        ],
        phone: "+225 27 23 33 43 53",
        address: "Marcory, Zone 4, Abidjan",
        hours: "10h - 23h (Lun-Dim)",
        price: "2 500 - 8 000 FCFA",
        minPrice: 2500,
        maxPrice: 8000,
        lat: 5.3000,
        lng: -3.9900,
        rating: 4.0
    },
    {
        id: 5,
        name: "Grillade du Boulevard",
        category: "grillade",
        description: "Spécialistes des grillades ivoiriennes et viandes braisées depuis 15 ans.",
        commune: "Yopougon",
        images: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ],
        phone: "+225 27 24 34 44 54",
        address: "Yopougon, Boulevard principal, Abidjan",
        hours: "12h - minuit (Lun-Dim)",
        price: "3 000 - 15 000 FCFA",
        minPrice: 3000,
        maxPrice: 15000,
        lat: 5.3250,
        lng: -4.1000,
        rating: 4.2
    },
    {
        id: 6,
        name: "Maquis Chez Yao",
        category: "africain",
        description: "Cuisine ivoirienne authentique dans une ambiance conviviale et typique.",
        commune: "Treichville",
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
        ],
        phone: "+225 27 25 35 45 55",
        address: "Treichville, Avenue 12, Abidjan",
        hours: "11h - 23h (Lun-Dim)",
        price: "2 000 - 12 000 FCFA",
        minPrice: 2000,
        maxPrice: 12000,
        lat: 5.2950,
        lng: -4.0100,
        rating: 4.4
    }
];

// In a real application, you would have 200+ restaurants in this array

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the restaurants page
    if (document.getElementById('restaurantList')) {
        // Load all restaurants
        renderRestaurants();
        
        // Setup filter buttons
        setupFilters();
        
        // Setup search functionality
        setupSearch();
        
        // Setup pagination
        setupPagination();
    }
    
    // Animate elements on scroll
    animateElements();
});

// Render restaurant cards
function renderRestaurants(filter = 'all', searchTerm = '') {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = '';
    
    let filteredRestaurants = filter === 'all' 
        ? restaurants 
        : restaurants.filter(r => r.category === filter);
    
    // Apply search filter if provided
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredRestaurants = filteredRestaurants.filter(resto => 
            resto.name.toLowerCase().includes(term) || 
            resto.commune.toLowerCase().includes(term) ||
            resto.description.toLowerCase().includes(term)
        );
    }
    
    filteredRestaurants.forEach((resto, index) => {
        const card = document.createElement('div');
        card.className = `col-lg-4 col-md-6 animate-fadeIn delay-${index % 3}`;
        card.innerHTML = `
            <div class="card resto-card" data-id="${resto.id}">
                <img src="${resto.images[0]}" class="card-img-top" alt="${resto.name}">
                <span class="price-tag">${resto.price}</span>
                <div class="card-body">
                    <h5 class="card-title">${resto.name}</h5>
                    <p class="card-text">${resto.description.substring(0, 80)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary">${getCategoryName(resto.category)}</span>
                        <span class="badge bg-secondary">${resto.commune}</span>
                    </div>
                </div>
            </div>
        `;
        restaurantList.appendChild(card);
    });
    
    // Add event listeners to cards
    document.querySelectorAll('.resto-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            openRestaurantModal(id);
        });
    });
}

// Get category name from slug
function getCategoryName(slug) {
    const categories = {
        'africain': 'Africain',
        'europeen': 'Européen',
        'asiatique': 'Asiatique',
        'fastfood': 'Fast Food',
        'grillade': 'Grillade'
    };
    return categories[slug] || slug;
}

// Setup filter buttons
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter restaurants
            const filter = this.getAttribute('data-filter');
            renderRestaurants(filter);
        });
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    renderRestaurants(activeFilter, searchTerm);
}

// Setup pagination
function setupPagination() {
    // In a real application, you would implement pagination logic here
    // For now, we'll just show a simple pagination UI
    const pagination = document.getElementById('pagination');
    if (pagination) {
        pagination.innerHTML = `
            <li class="page-item disabled"><a class="page-link" href="#">Précédent</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Suivant</a></li>
        `;
    }
}

// Open restaurant modal
function openRestaurantModal(id) {
    const resto = restaurants.find(r => r.id === id);
    if (!resto) return;
    
    // Update modal content
    document.getElementById('modal-resto-name').textContent = resto.name;
    document.getElementById('modal-resto-description').textContent = resto.description;
    document.getElementById('modal-resto-category').textContent = getCategoryName(resto.category);
    document.getElementById('modal-resto-hours').textContent = resto.hours;
    document.getElementById('modal-resto-price').textContent = resto.price;
    document.getElementById('modal-resto-phone').textContent = resto.phone;
    document.getElementById('modal-resto-address').textContent = resto.address;
    document.getElementById('modal-resto-commune').textContent = resto.commune;
    
    // Set up carousel
    const carouselInner = document.getElementById('carousel-inner');
    carouselInner.innerHTML = '';
    
    resto.images.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `<img src="${img}" class="d-block w-100" alt="${resto.name}">`;
        carouselInner.appendChild(item);
    });
    
    // Set up map
    initMap(resto.lat, resto.lng, resto.name);
    
    // Set direction link
    document.getElementById('modal-resto-direction').href = `https://www.google.com/maps/dir/?api=1&destination=${resto.lat},${resto.lng}`;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('restaurantModal'));
    modal.show();
}

// Initialize map
function initMap(lat, lng, name) {
    // Clear previous map
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = '';
    
    // Create new map
    const map = L.map('map').setView([lat, lng], 15);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add marker
    L.marker([lat, lng]).addTo(map)
        .bindPopup(name)
        .openPopup();
}

// Animate elements on scroll
function animateElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .section-title, .feature-icon').forEach(el => {
        observer.observe(el);
    });
}