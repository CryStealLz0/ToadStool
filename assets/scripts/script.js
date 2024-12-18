const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Autoplay slider
let runAutoPlay = setTimeout(() => {
    next.click();
}, 10000);

next.addEventListener('click', () => {
    initSlider('next');
});

prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        //     list.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]);
        //     thumbnail.insertBefore(thumbnailItems[thumbnailItems.length - 1], thumbnailItems[0]);
        const lasItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lasItemPosition]);
        thumbnail.prepend(thumbnailItems[lasItemPosition]);
        slider.classList.add('prev');
    }

    setTimeout(() => {
        slider.classList.remove('next', 'prev');
    }, 2000);

    clearTimeout(runAutoPlay);
    runAutoPlay = setTimeout(() => {
        next.click();
    }, 10000);
};
