const textInputEl = document.querySelector("#name-input");
const textResultEl = document.querySelector("#name-output");


const onChangeInput = ((event) => {
    if (event.target.value === "") {
        return textResultEl.textContent = "Anonymous";
    }

    return textResultEl.textContent = event.currentTarget.value;
})

textInputEl.addEventListener("input", onChangeInput);