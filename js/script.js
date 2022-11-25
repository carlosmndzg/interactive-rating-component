"use strict";

const content = [...document.querySelector(".rating").children];
const form = document.querySelector("form");
const submitButton = document.querySelector(".rating__btn-submit");
const radioButtons = [...document.querySelectorAll(".rating__input")];
const selectionTxt = document.querySelector(".rating__selections");
const errorTxt = document.querySelector(".rating__error");

const changeAppState = () => {
  content.forEach((element) => {
    element.classList.toggle("hidden");
  });
};

const getSelectedBtn = () => {
  return radioButtons.reduce(
    (selected, button) => (button.checked ? button.value : selected),
    0
  );
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let selected = getSelectedBtn();

  if (!selected) {
    errorTxt.classList.remove("hidden");
    return;
  }

  selectionTxt.textContent = `You selected ${selected} out of 5`;
  changeAppState();
});
