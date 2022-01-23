function setBill(value) {
  calculator.bill = +value;
}

function setTip(value) {
  calculator.tip = +value;
}

function getResult() {
  const tipAmount = (calculator.tip / 100) * calculator.bill;
  const total = tipAmount + calculator.bill;
  return {
    tipAmount: roundTwoDecimals(tipAmount),
    total: roundTwoDecimals(total),
  };
}
