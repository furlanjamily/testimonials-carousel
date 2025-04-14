const produtos = Array.from({ length: 15 }, (_, i) => ({
  nome: `Produto ${i + 1}`,
  preco: 'R$ 79,90',
  imagem: 'https://via.placeholder.com/150',
}));

const wrapper = document.getElementById('swiper-wrapper');

produtos.forEach(produto => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  slide.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <p>${produto.nome}</p>
    <p><strong>${produto.preco}</strong></p>
  `;

  wrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});
