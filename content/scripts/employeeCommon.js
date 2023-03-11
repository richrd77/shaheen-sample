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
    scroller.style.position = 'fixed';
    scroller.style.bottom = '2em';
    scroller.style.right = '3em';
    scroller.style.padding = '0.5em';
    scroller.style.backgroundColor = 'red';
    scroller.style.color = 'white';
    scroller.style.borderRadius = '50%';
    scroller.style.height = 'calc(1.5rem + 1.5em)';
    scroller.style.width = 'calc(1.5rem + 1.5em)';
    scroller.title = 'Scroll Up';
    scroller.style.cursor = 'pointer';
    scroller.style.boxShadow = '0 0 8px 0 rgba(0, 0, 0, 0.5)';
    scroller.style.opacity = '0';
    scroller.style.transition = 'opacity 0.5s';
    scroller.style.userSelect = 'none';
    scroller.style.pointerEvents = 'none';
    scroller.style.outline = 'none';
    scroller.style.border = 'transparent';
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

const ShowScoller = () => {
    const s = document.querySelector('#scroller');
    s.style.opacity = '1';
    s.style.pointerEvents = 'all';
};
const HideScoller = () => {
    const s = document.querySelector('#scroller');
    s.style.opacity = '0';
    s.style.pointerEvents = 'none';
};
