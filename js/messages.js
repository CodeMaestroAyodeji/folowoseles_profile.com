document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        // Replace these with actual data
        {
            title: 'Demand for Breakthrough',
            description: 'A message of action and mind awakening',
            link: 'https://drive.google.com/file/d/10N25iBH2_GZ1TJYre1cepDx2zV2pDM0D/view?usp=drive_link',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2024-05-01',
            time: '10:00 AM'
        },
        {
            title: 'Family at Jubilee',
            description: 'Family Weekend message of the Redeemed Christian Church of God, Canaanland Area Hq',
            link: 'https://drive.google.com/drive/folders/1JkFrabxAwtEi_q9Hkxh8Qs5vqwP7Fsn6',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2022-11-17',
            time: '10:00 AM'
        },
        {
            title: 'The Gift of God',
            description: 'Demanding for the gift of God by prayer',
            link: 'https://drive.google.com/drive/folders/1JkFrabxAwtEi_q9Hkxh8Qs5vqwP7Fsn6',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2022-11-17',
            time: '6:30 PM'
        },
        {
            title: 'Conquering the Spirit of Opposition',
            description: '',
            link: 'https://drive.google.com/file/d/1PnFU6d2q2yPEaK_czsXVu4fukJFXkU4j/view?usp=drive_link',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2023-01-23',
            time: '10:00 AM'
        },
        {
            title: 'Sound of Abundance',
            description: 'Day One of Three days End of the Year Fasting and Prayers at RCCG Canaanland Area Headquarters',
            link: 'https://drive.google.com/drive/u/1/folders/17SK10PqJc6ZXJ7G_Iwo4jACRq48lHvkq',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2022-12-29',
            time: '5:00 PM'
        },
        {
            title: 'Preparing for Abundance',
            description: 'Day Two of Three days End of the Year Fasting and Prayers at RCCG Canaanland Area Headquarters',
            link: 'https://drive.google.com/drive/u/1/folders/17SK10PqJc6ZXJ7G_Iwo4jACRq48lHvkq',
            image: './images/couple.jpg',
            preacher: 'Pastor Abiola Folowosele',
            date: '2022-12-30',
            time: '5:00 PM'
        },
        // Add more message objects up to 80
    ];

    const cardsPerPage = 10;
    let currentPage = 1;

    function displayCards(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;
        const cardsToShow = messages.slice(start, end);

        const container = document.getElementById('messageCardsContainer');
        container.innerHTML = '';

        cardsToShow.forEach(message => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
                <div class="card message-card mb-5">
                    <img src="${message.image}" class="card-img-top card_img" alt="${message.title}">
                    <div class="card-body">
                        <h5 class="card-title">${message.title}</h5>
                        <p class="card-text">${message.description}</p>
                        <p class="card-preacher"><strong>Preacher:</strong> ${message.preacher}</p>
                        <p class="card-date-time"><strong>Date:</strong> ${message.date} <br> <strong>Time:</strong> ${message.time}</p>
                        <a href="${message.link}" class="btn card-btn btn-primary" target="_blank">Listen</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function setupPagination() {
        const pageCount = Math.ceil(messages.length / cardsPerPage);
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
        const searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'text');
        searchInput.setAttribute('placeholder', 'Search for a message...');
        searchInput.classList.add('form-control', 'mb-4');
        document.querySelector('.messages .container').prepend(searchInput);

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const filteredMessages = messages.filter(message =>
                message.title.toLowerCase().includes(query) ||
                message.description.toLowerCase().includes(query) ||
                message.preacher.toLowerCase().includes(query) ||
                message.date.toLowerCase().includes(query) ||
                message.time.toLowerCase().includes(query)
            );
            displayFilteredCards(filteredMessages);
        });
    }

    function displayFilteredCards(filteredMessages) {
        const container = document.getElementById('messageCardsContainer');
        container.innerHTML = '';

        filteredMessages.forEach(message => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
                <div class="card message-card">
                    <img src="${message.image}" class="card-img-top" alt="${message.title}">
                    <div class="card-body">
                        <h5 class="card-title">${message.title}</h5>
                        <p class="card-text">${message.description}</p>
                        <p class="card-preacher"><strong>Preacher:</strong> ${message.preacher}</p>
                        <p class="card-date-time"><strong>Date:</strong> ${message.date} <br> <strong>Time:</strong> ${message.time}</p>
                        <a href="${message.link}" class="btn btn-primary" target="_blank">Listen</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    displayCards(currentPage);
    setupPagination();
    setupSearch();
});
