const button = document.getElementById("button");
const clickCount = document.getElementById("buttonClick");
const debounceCount = document.getElementById("debounce");
const throttleCount = document.getElementById("throttle");

let countP = 0;
let countD = 0;
let countT = 0;

const myDebounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const myThrottle = (cb, delay) => {
  let last = 0;

  return (...args) => {
    let now = Date.now();
    if (now - last < delay) return;
    last = now;
    cb(...args);
  };
};

const debounceClick = myDebounce(() => {
  debounceCount.innerHTML = ++countD;
}, 800);

const throttleClick = myThrottle(() => {
  throttleCount.innerHTML = ++countT;
}, 800);

button.addEventListener("click", () => {
  clickCount.innerHTML = ++countP;
  debounceClick();
  throttleClick();
});
