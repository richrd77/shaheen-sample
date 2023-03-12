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

function PopulateScroll() {
    const scroller = document.createElement('button');
    scroller.id = 'scroller';
    scroller.innerHTML = '<span style="font-size:1.5rem" class="material-symbols-outlined">arrow_upward</span>';
    scroller.title = 'Scroll Up';
    scroller.onclick = () => scroll(0, 0);
    document.body.appendChild(scroller);
}

PopulateScroll();

window.onscroll = () => {
    if (Math.round(window.scrollY) > 50) {
        ShowScoller();
    } else {
        HideScoller();
    }
};

const ShowScoller = () => document.querySelector('#scroller').classList.add('show');

const HideScoller = () => document.querySelector('#scroller').classList.remove('show');