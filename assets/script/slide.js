document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel", // ou 'slider' para comportamento diferente
    startAt: 0,
    perView: 1,
    autoplay: 3000, // 3 segundos
    hoverpause: true, // pausa ao passar o mouse
    animationDuration: 600,
    gap: 0,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide-products", {
    type: "carousel",
    autoplay: 4000,
    animationDuration: 600,
    perView: 4,
    gap: 20,
    breakpoints: {
      1200: { perView: 3 },
      800: { perView: 3 },
      500: { perView: 2 },
    },
  }).mount();

  new Glide(".glide-products-2", {
    type: "carousel",
    autoplay: 4000,
    animationDuration: 600,
    perView: 4,
    gap: 20,
    breakpoints: {
      1200: { perView: 3 },
      800: { perView: 3 },
      500: { perView: 2 },
    },
  }).mount();
  new Glide(".glide-products-3", {
    type: "carousel",
    autoplay: 4000,
    animationDuration: 600,
    perView: 4,
    gap: 20,
    breakpoints: {
      1200: { perView: 3 },
      800: { perView: 3 },
      500: { perView: 2 },
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-bags", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    breakpoints: {
      1200: { perPage: 3 },
      800: { perPage: 2 },
      600: { perPage: 1 },
    },
  }).mount();
});
