document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(button => {
        button.addEventListener('click', function () {
            const testimonyText = this.previousElementSibling;
            if (testimonyText.style.maxHeight === '60px') {
                testimonyText.style.maxHeight = 'none';
                this.textContent = 'Show Less';
            } else {
                testimonyText.style.maxHeight = '60px';
                this.textContent = 'Read More';
            }
        });
    });

    const testimonies = document.querySelectorAll('.testimony-card');
    const itemsPerPage = 4;
    const pageCount = Math.ceil(testimonies.length / itemsPerPage);

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        testimonies.forEach((testimony, index) => {
            if (index >= startIndex && index < endIndex) {
                testimony.style.display = 'block';
            } else {
                testimony.style.display = 'none';
            }
        });
        highlightActiveButton(page);
    }

    function createPaginationButtons() {
        const paginationContainer = document.querySelector('.pagination-container');

        for (let i = 1; i <= pageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('pagination-btn');
            pageButton.addEventListener('click', function () {
                showPage(i);
            });
            paginationContainer.appendChild(pageButton);
        }
    }

    function highlightActiveButton(activePage) {
        const buttons = document.querySelectorAll('.pagination-btn');
        buttons.forEach(button => {
            button.classList.remove('active');
            if (parseInt(button.textContent) === activePage) {
                button.classList.add('active');
            }
        });
    }

    createPaginationButtons();
    showPage(1);
});
