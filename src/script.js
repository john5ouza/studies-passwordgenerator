const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLenghtId");
const infoLenght = document.querySelector('label[for="inputLenghtId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLenght.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
    infoLenght.innerHTML = lenInput.value;
})

btnGerar.addEventListener("click", () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    );
});