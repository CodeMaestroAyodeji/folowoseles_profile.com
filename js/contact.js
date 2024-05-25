document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can add form submission logic here, such as sending the form data to a server or displaying a success message.
        // For demonstration purposes, we'll simply log the form data to the console.
        const formData = new FormData(contactForm);
        console.log(Object.fromEntries(formData));
        // You can then reset the form after submission if needed
        contactForm.reset();
    });
});
