const tv = document.getElementById("container");
const buttons = document.querySelectorAll("button");
const light = document.getElementById("light");
const tvLight = document.getElementById("tvLight");

let onOff = true;
let interval;

buttons.forEach((e, i) =>
  e.addEventListener("click", (event) => {
    if (event.target.innerText === "On/Off" && onOff === true) {
      onOff = false;
      tv.innerText = "";
      tvLight.style.backgroundColor = "red";
      setTimeout(() => {
        tvLight.style.backgroundColor = "black";
      }, 100);
    } else if (event.target.innerText === "On/Off" && onOff === false) {
      onOff = true;
      tv.innerText = "Power off";
      tvLight.style.backgroundColor = "red";
      setTimeout(() => {
        tvLight.style.backgroundColor = "black";
      }, 100);
    } else if (event.target.innerText !== "On/Off" && onOff === false) {
      tv.innerText = event.target.innerText;
      tvLight.style.backgroundColor = "red";
      setTimeout(() => {
        tvLight.style.backgroundColor = "black";
      }, 100);
    }
    light.style.backgroundColor = "red";
    setTimeout(() => {
      light.style.backgroundColor = "black";
    }, 100);
  })
);
