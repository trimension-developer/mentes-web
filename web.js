const periods = document.querySelectorAll('[data-period]');
const note = document.querySelector('#period-note');
const prices = document.querySelectorAll('.price[data-yearly]');

for (const button of periods) {
  button.addEventListener('click', () => {
    const period = button.dataset.period;
    const yearly = period === 'yearly';
    for (const option of periods) {
      option.setAttribute('aria-pressed', String(option === button));
    }
    for (const price of prices) {
      price.querySelector('strong').textContent = price.dataset[period];
      price.querySelector('span').textContent = yearly ? ' / év' : ' / hó';
    }
    note.textContent = yearly
      ? 'A feltüntetett éves ár egy év teljes díja.'
      : 'A feltüntetett havi ár egy hónap teljes díja.';
  });
}
