new Splide('.splide', {
    type: 'loop',
    width:'80vw',
    perPage: 1,
    perMove: 1,
    autoWidth: true,
    drag: true,
    snap: true,
    speed: 1000,
    gap:'1rem',
    center: true,
    breakpoints: {
    640: {
        perPage: 1,
    },
    768: {
        perPage: 2,
    }
    }
}).mount();