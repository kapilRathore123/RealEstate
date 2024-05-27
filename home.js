// script.js (optional)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.choice-button').forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Navigating to: ${event.target.textContent}`);
        });
    });
});
