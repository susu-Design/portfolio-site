const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    filter.classList.add('is-active');

    const selected = filter.dataset.filter;
    cards.forEach((card) => {
      const visible = selected === 'all' || card.dataset.category === selected;
      card.classList.toggle('is-hidden', !visible);
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
