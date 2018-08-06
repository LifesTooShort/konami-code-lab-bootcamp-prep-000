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

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert ("Congratulations!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}

function init() {
  consol.log('start konami listening');
  const body = document.querySelector('body');

  body.addEventListener('keydown', konami);
}

init();
