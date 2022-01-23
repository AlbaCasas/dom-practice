// Input de bill
const billInput = document.querySelector(".bill-input");

// cuando se termina de pulsar una tecla
billInput.addEventListener("keyup", (event) => {
  setBill(event.target.value);
  const result = getResult();
  renderResult(result);
});

// Botones de propina
const tipButtons = document.querySelectorAll(".tip-button");

// Add listener to each button of the list of elements with class .tip-button
tipButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    setTip(event.target.innerText);
    // elimino la clase button--active a todos los botones
    tipButtons.forEach((btn) => {
      btn.classList.remove("button--active");
    });
    button.classList.add("button--active"); // añade button--active al botón actual
    const result = getResult(); // calcula el resultado
    renderResult(result); //lo pinta.
  });
});

// Botón reset
const buttonReset = document.querySelector(".button-reset");

buttonReset.addEventListener("click", () => {
  setTip(0);
  setBill(0);
  billInput.value = 0;
  tipButtons.forEach((btn) => {
    btn.classList.remove("button--active");
  });
  const result = getResult(); // calcula el resultado
  renderResult(result); //lo pinta.
});
