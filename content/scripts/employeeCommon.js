document.body.addEventListener('click', (e) => {
    console.log('body click event');
    if (!e.target.closest('nav')) {
        document.querySelector('nav').classList.remove('active');
    }
});
document.querySelector('.menu').addEventListener('click', (e) => {
    console.log('menu click event');
    document.querySelector('nav').classList.add('active');
    e.stopPropagation();
});