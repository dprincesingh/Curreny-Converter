const url =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eAxkOpIVtVt04OYBqyiWGnhN07zZB8M2mUGWu3ZV";

const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const resultdiv = document.getElementById("resultdiv");
const Convertbtn = document.getElementById("Convertbtn");
let result = document.getElementById("result");

Convertbtn.addEventListener("click", (e) => {
  e.preventDefault();

  getresult();
});

async function getresult() {
  const currency = await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error("problme fetching data", err);
    });

  resultdiv.style.display = "flex";
  if (amount.value === "") {
    result.innerHTML = "Enter Amount to Convert ";
  } else if (from.value === "USD") {
    result.innerHTML = `${(+amount.value * currency.data[to.value]).toFixed(
      2
    )}Indian Rupee`;
  } else if (from.value === "INR" && to.value === "USD") {
    result.innerHTML = `${(+amount.value / currency.data[from.value]).toFixed(
      2
    )} United States Dollar`;
  }
}
