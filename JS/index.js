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
