const randomColor = function () {
  const hex = "1234567890ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

let intervalId;
const startChangingColor = function () {
  if ((intervalId = "null")) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; //we did this to stop consuming the memory
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
