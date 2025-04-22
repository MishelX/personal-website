const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('hidden');
});

window.addEventListener('load', () => {
    setTimeout(() => {
        body.classList.remove('hidden');
    }, 1);
});