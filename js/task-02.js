const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`ul`);

const items = ingredients.map(el => {
  const itemListEl = document.createElement(`li`);
  itemListEl.classList.add(`item`);
  itemListEl.textContent = el;
  return itemListEl
})

listEl.append(...items);