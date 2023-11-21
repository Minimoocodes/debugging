"use strict";

let formEl = document.querySelector("#search");
let cityInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");
let messageEl = document.querySelector("#message");


async function getData() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=8f20807cea52eed92572aea82df038d5`);
  let data = await res.json();
  
  
  let temp = Number(Math.round(data.main.temp - 273.15));
  console.log(temp);
  tempEl.textContent = `${temp}°C`;

  if (temp < 0) {
    messageEl.textContent = "Winter is coming...";
  } else if (temp >= 0 && temp <= 10 ) {
    messageEl.textContent = "Sweater weather!"
  } else if (temp>= 11 && temp<=20) {
    messageEl.textContent = "Put a jacket on and regret it as soon as you start moving";
  } else if (temp > 20) {
    messageEl.textContent = "Hotter outside than Taylor Swift's latest single";
  }
}

formEl.addEventListener("submit", function(e) {
  e.preventDefault();
  getData();
});