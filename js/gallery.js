document.addEventListener('DOMContentLoaded', () => {
    const gallery = [
        {
            title: 'July Celebrant',
            subHeading: 'July birthday and wedding anniversary celebrant',
            image: './images/couple.jpg',
            description: 'The best section of the service so far, pastor dancing with all the celebrant'
        },
        {
            title: 'July Celebrant',
            subHeading: 'July birthday and wedding anniversary celebrant',
            image: './images/couple.jpg',
            description: 'The best section of the service so far, pastor dancing with all the celebrant'
        },
        // Add more image objects up to 100+
    ];

    const cardsPerPage = 10;
    let currentPage = 1;

    function displayCards(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;
        const cardsToShow = gallery.slice(start, end);

        const container = document.getElementById('galleryCardsContainer');
        container.innerHTML = '';

        cardsToShow.forEach(imageData => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
                <div class="card gallery-card" data-bs-toggle="modal" data-bs-target="#imageModal" data-title="${imageData.title}" data-description="${imageData.description}" data-image="${imageData.image}">
                    <img src="${imageData.image}" class="card-img-top" alt="${imageData.title}">
                    <div class="card-body">
                        <h5 class="card-title">${imageData.title}</h5>
                        <p class="card-text">${imageData.subHeading}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        setupCardClick();
    }

    function setupCardClick() {
        const cards = document.querySelectorAll('.gallery-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-title');
                const description = card.getAttribute('data-description');
                const image = card.getAttribute('data-image');

                document.getElementById('imageModalLabel').innerText = title;
                document.getElementById('modalImage').src = image;
                document.getElementById('modalDescription').innerText = description;
            });
        });
    }

    function setupPagination() {
        const pageCount = Math.ceil(gallery.length / cardsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            if (i === currentPage) {
                pageItem.classList.add('active');
            }
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                displayCards(currentPage);
                setupPagination();
            });
            pagination.appendChild(pageItem);
        }
    }

    function setupSearch() {
        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const filteredGallery = gallery.filter(imageData =>
                imageData.title.toLowerCase().includes(query) ||
                imageData.subHeading.toLowerCase().includes(query) ||
                imageData.description.toLowerCase().includes(query)
            );
            displayFilteredCards(filteredGallery);
        });
    }

    function displayFilteredCards(filteredGallery) {
        const container = document.getElementById('galleryCardsContainer');
        container.innerHTML = '';

        filteredGallery.forEach(imageData => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
                <div class="card gallery-card" data-bs-toggle="modal" data-bs-target="#imageModal" data-title="${imageData.title}" data-description="${imageData.description}" data-image="${imageData.image}">
                    <img src="${imageData.image}" class="card-img-top" alt="${imageData.title}">
                    <div class="card-body">
                        <h5 class="card-title">${imageData.title}</h5>
                        <p class="card-text">${imageData.subHeading}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        setupCardClick();
    }

    displayCards(currentPage);
    setupPagination();
    setupSearch();
});
