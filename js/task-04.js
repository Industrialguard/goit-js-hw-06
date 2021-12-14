// Variables 
const valueRef = document.querySelector("#value");

let counterValue = 0;

const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);

// functions

const onDecrementBtnEl = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const onIncrementBtnEl = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};


// EventListener
decrementBtnEl.addEventListener(`click`, onDecrementBtnEl);
incrementBtnEl.addEventListener(`click`, onIncrementBtnEl);


