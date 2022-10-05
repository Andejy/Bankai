window.addEventListener("scroll", () => {
  let card = document.querySelector(".card"),
    cardTwo = document.getElementById("two"),
    cardOne = document.getElementById("one"),
    cardPosition = card.getBoundingClientRect().top;
  let tamanoDepantalla = window.innerHeight * 0.7;
  if (cardPosition < tamanoDepantalla)
    (card.style.animation = "card-animation 3s "),
      (cardTwo.style.animation = "card-animation 3s "),
      (cardOne.style.animation = "card-animation 3s ");
});
window.addEventListener("scroll", () => {
  let card = document.querySelector(".card"),
    cardTwo = document.getElementById("two"),
    cardOne = document.getElementById("one"),
    cardPosition = card.getBoundingClientRect().top;
  let tamanoDepantalla = window.innerHeight * 0.3;
  if (cardPosition < tamanoDepantalla)
    (card.style.animation = "card-animation 3s "),
      (cardTwo.style.animation = "card-animation 3s "),
      (cardOne.style.animation = "card-animation 3s ");
});


const btnModalClose = document.querySelector(".modal-close"),
 modal = document.querySelector(".Modal"),
inputBtn = document.querySelector(".input-btn"), 
modalBtn = document.querySelector(".modal-btn")



modalBtn.addEventListener("click", () => {
  modal.classList.add("modalClosed");
});


//boton que abra el modal 
inputBtn.addEventListener("click", () => {
  modal.classList.remove("modalClosed");
});

btnModalClose.addEventListener("click", () => {
  modal.classList.toggle("modalClosed")
})
