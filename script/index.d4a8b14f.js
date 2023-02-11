//Card back
const cardCVC = document.querySelector(".card-cvc--text");
//Card front
const cardNumber = document.querySelector(".card-number--text");
const cardName = document.querySelector(".card-name--text");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
//Inputs
const inputName = document.querySelector("#card_name");
const inputNumber = document.querySelector("#card_number");
const inputMonth = document.querySelector("#exp_date_month");
const inputYear = document.querySelector("#exp_date_year");
const inputCVC = document.querySelector("#cvc");
const confirmBtn = document.querySelector(".confirm-btn");
const warnings = document.querySelectorAll(".warning");
const form = document.querySelector('.form');
const finish = document.querySelector('.finish')
//Name
inputName.addEventListener("keyup", () => {
    cardName.textContent = inputName.value;
    if (inputName.value === "") cardName.textContent = "Jane Appleseed";
});
//Number
inputNumber.addEventListener("keyup", () => {
    const val = inputNumber.value.match(/\w{0,4}/g).join(" ");
    cardNumber.textContent = val;
    if (inputNumber.value === "") cardNumber.textContent = "OOOO OOOO OOOO OOOO";
});
//Month
inputMonth.addEventListener("keyup", () => {
    cardMonth.textContent = inputMonth.value.padStart(2, 0);
    if (inputMonth.value === "") cardMonth.textContent = "OO";
});
//Year
inputYear.addEventListener("keyup", () => {
    cardYear.textContent = inputYear.value.padStart(2, 0);
    if (inputYear.value === "") cardYear.textContent = "OO";
});
//cvc
inputCVC.addEventListener("keyup", () => {
    cardCVC.textContent = inputCVC.value;
    if (inputCVC.value === "") cardCVC.textContent = "OOO";
});
const checkInfo = () => {
    const inputs = document.querySelectorAll("input");
    const results = [
        /^[a-z\s?]+$/ig.test(inputName.value),
        /\d{16}/.test(inputNumber.value),
        /^\d{1,2}$/g.test(inputMonth.value),
        /^\d{1,2}$/g.test(inputYear.value),
        /\d{3}/g.test(inputCVC.value)
    ];
    results.forEach((val, i) => {
        const warning = inputs[i].parentNode.querySelector("span");
        const inputType = inputs[i].dataset.type;
        if (val !== true) {
            inputs[i].style.border = "1px solid #ff5252";
            warning.textContent = `${inputs[i].value === "" ? "Can't be blank" : `Wrong format, ${inputType} only`}`;
        } else {
            inputs[i].style.border = "1px solid #8e8593";
            inputs[i].parentNode.querySelector("span").textContent = "";
        }
    });
    if (results.every(val => val === true)) {
        form.classList.add('d-none')
        finish.classList.remove('d-none')
    }
};
confirmBtn.addEventListener("click", checkInfo);

//# sourceMappingURL=index.d4a8b14f.js.map
