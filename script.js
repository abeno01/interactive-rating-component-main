"use strict";

// Assigning variables
const submitBtn = document.querySelector(".card__btn");
const card = document.querySelectorAll(".card__base");
const btn = document.querySelectorAll(".btn");
const cardBtn = document.querySelector(".card__btn");
const span = document.querySelector("span");

console.log(btn[1].value);
// Блок выставления оценок

// event handler должен взять текст, который в кнопке
// и вставить его в span элемент
// forEach() привязал event handler к каждой кнопке
// innerText внутри callback fnct пушит значение item
// которое берёт из параметра forEach((item))

btn.forEach((item) => {
  item.addEventListener("click", () => {
    span.innerText = item.value;
  });
});

// Блок. Кнопка отправления формы

// добавил event handler 'click' к кнопке submit
// callback function executes for loop
// for loop для проходит по node list 'card' для снятия/добавления
// класса 'hidden' через classList.toggle метод

submitBtn.addEventListener("click", function () {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("hidden");
  }
  cardBtn.classList.add("hidden");
});
