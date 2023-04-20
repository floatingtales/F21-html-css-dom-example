let randomizeNumberBtn = document.getElementById("randomize-number");
let outputNumberDiv = document.querySelector("#output-number");
let randomizeInputLow = document.getElementById("randomize-input-low");
let randomizeInputHigh = document.getElementById("randomize-input-high");

randomizeNumberBtn.addEventListener("click", function () {
  if (isNaN(randomizeInputHigh.value) || isNaN(randomizeInputLow.value)) {
    // do the input validation here
    outputNumberDiv.innerHTML = `<p style="color: red;">PLEASE INPUT NUMBER</p>`;
  } else {
    let randomNumber =
      Math.random() *
      (Number(randomizeInputHigh.value) - Number(randomizeInputLow.value));
    let randomInteger =
      Math.floor(randomNumber) + Number(randomizeInputLow.value);

    // outputNumberDiv.innerText = `<p> the current number is: ${randomInteger}</p>`;
    outputNumberDiv.innerHTML = `<p style="color: green;"> the current number is: ${randomInteger}</p>`;
  }
});

randomizeNumberBtn.addEventListener("mouseover", function () {
  randomizeNumberBtn.innerHTML = randomizeNumberBtn.innerHTML.toUpperCase();
});
