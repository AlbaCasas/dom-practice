function renderResult(result) {
  const view = `
    <div class="calculator__tip result-box">
      <h2 class="title title--white">Tip amount</h2>
      <span class="result-box__result">$${result.tipAmount}</span>
    </div>
    <div class="result-box">
      <h2 class="title title--white">Total</h2>
      <span class="result-box__result">$${result.total}</span>
    </div>
  `;
  let results = document.querySelector(".calculator__result");
  results.innerHTML = view;
}
