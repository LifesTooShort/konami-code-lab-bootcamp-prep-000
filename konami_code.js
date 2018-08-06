const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function konami(e) {
  const key = e.key;
  console.log(key);

  if (key === codes[index]) {
    console.log(index);
    index++;

    if (index === codes.length) {
      console.log("congratulations");
      alert ("Congratulations!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}

function init() {
  console.log('start konami listening');
  const body = document.querySelector('body');

  body.addEventListener('keydown', konami);
}

alert("starting konami");
init();

