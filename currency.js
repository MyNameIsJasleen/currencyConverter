const amountEl = document.getElementById("amount");
const fromCurrencyEl = document.getElementById("fromCurrency");
const toCurrencyEl = document.getElementById("toCurrency");
const resultEl = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

// Static conversion rates relative to USD
const rates = {
  USD: 1,
  INR: 83,
  EUR: 0.93,
  GBP: 0.79
};

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountEl.value);
  const from = fromCurrencyEl.value;
  const to = toCurrencyEl.value;

  if (isNaN(amount) || amount <= 0) {
    resultEl.textContent = "⚠️ Please enter a valid amount.";
    return;
  }

  // Step 1: Convert 'from' currency → USD
  const amountInUSD = amount / rates[from];

  // Step 2: Convert USD → 'to' currency
  const convertedAmount = amountInUSD * rates[to];

  // Step 3: Show result
  resultEl.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});
