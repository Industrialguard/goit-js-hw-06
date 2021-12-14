const inputEl = document.querySelector("#validation-input");

const dataLengthRef = inputEl.getAttribute("data-length");

const onInputRefChange = function (quantityOfSymbols) {
  if (quantityOfSymbols.currentTarget.value.length === Number(dataLengthRef)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
inputEl.addEventListener("blur", onInputRefChange);