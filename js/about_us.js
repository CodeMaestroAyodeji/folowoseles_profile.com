document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readMoreContent = document.getElementById('readMoreContent');

    readMoreBtn.addEventListener('click', function () {
        if (readMoreContent.style.display === 'none' || readMoreContent.style.display === '') {
            readMoreContent.style.display = 'block';
            readMoreBtn.textContent = 'Show Less';
        } else {
            readMoreContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});
