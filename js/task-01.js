const categoryList = document.querySelectorAll(`.item`)
console.log(`Number of categories: `, categoryList.length);

const titleList = document.querySelector(`.item`).firstElementChild.textContent;
console.log(`Category: ${titleList}`)

const oneElement = document.querySelector(`.item ul`).childElementCount;
console.log(`Elements: `, oneElement)

const titleListTwo = document.querySelectorAll(`.item`)[1].firstElementChild.textContent;
console.log(`Category: ${titleListTwo}`);

const twoElement = document.querySelectorAll(`.item ul`)[1].childElementCount;
console.log(`Elements: `, twoElement)

const titleListThree = document.querySelectorAll(`.item`)[2].firstElementChild.textContent;
console.log(`Elements: ${titleListThree}`);

const threeElement = document.querySelectorAll(`.item ul`)[2].childElementCount;
console.log(`Elements: `, threeElement)