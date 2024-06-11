// Example of dynamic toggle for feature visibility (optional)
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const featureList = button.nextElementSibling;
        featureList.classList.toggle('show');
    });
});