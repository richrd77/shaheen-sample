function BodyClickEvent(e) {
    if (!e.target.closest('nav')) {
        document.querySelector('nav').classList.remove('active');
        document.body.removeEventListener('click', BodyClickEvent);
    }
}

document.querySelector('.menu').addEventListener('click', (e) => {
    document.querySelector('nav').classList.add('active');
    e.stopPropagation();
    document.body.addEventListener('click', BodyClickEvent);
});