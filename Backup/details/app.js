const active = "active";
const now = "now";
const firstBtn = document.querySelector(".box:first-child");
const firstBox = document.querySelector(".carousel-box:first-child");
const lastBtn = document.querySelector(".box:last-child");
const lastBox = document.querySelector(".carousel-box:last-child");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");

const moveLeft = function () {
  const current = document.querySelector(`.${active}`);
  const currentBtn = document.querySelector(`.${now}`);
  if (current) {
    current.classList.remove(active);
    const prev = current.previousElementSibling;
    if (prev) {
      prev.classList.add(active);
    } else {
      lastBox.classList.add(active);
    }
  } else {
    firstBox.classList.add(active);
  }
  if (currentBtn) {
    currentBtn.classList.remove(now);
    const prevBtn = currentBtn.previousElementSibling;
    if (prevBtn) {
      prevBtn.classList.add(now);
    } else {
      lastBtn.classList.add(now);
    }
  } else {
    firstBtn.classList.add(now);
  }
};
const moveRight = function () {
  const current = document.querySelector(`.${active}`);
  const currentBtn = document.querySelector(`.${now}`);
  if (current) {
    current.classList.remove(active);
    const next = current.nextElementSibling;
    if (next) {
      next.classList.add(active);
    } else {
      firstBox.classList.add(active);
    }
  } else {
    firstBox.classList.add(active);
  }
  if (currentBtn) {
    currentBtn.classList.remove(now);
    const nextBtn = currentBtn.nextElementSibling;
    if (nextBtn) {
      nextBtn.classList.add(now);
    } else {
      firstBtn.classList.add(now);
    }
  } else {
    firstBtn.classList.add(now);
  }
};

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

function init() {
  firstBox.classList.add(active);
}
init();
