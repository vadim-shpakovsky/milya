new WOW().init();  
  
  $(document).on("click", "#when-button", function() {
  $(".when").css("display", "block");
  $(".result").css("display", "none");
  $(".mustnot").css("display", "none");
});

  $(document).on("click", "#result-button", function() {
  $(".when").css("display", "none");
  $(".result").css("display", "block");
  $(".mustnot").css("display", "none");
});

  $(document).on("click", "#mustnot-button", function() {
  $(".when").css("display", "none");
  $(".result").css("display", "none");
  $(".mustnot").css("display", "block");
});

const modal = document.querySelector('.modal');

const classicRow = document.querySelector('#classic-row');
const peelingRow = document.querySelector('#peeling-row');
const alginRow = document.querySelector('#algin-row');

const classic = document.querySelector("#classic");
const peeling = document.querySelector('#peeling');
const algin = document.querySelector('#algin');

const closeClassic = document.querySelector(".close-classic");
const closePeeling = document.querySelector(".close-peeling");
const closeAlgin = document.querySelector(".close-algin");

classicRow.addEventListener('click', toggleClassic);
closeClassic.addEventListener('click', toggleClassic);

peelingRow.addEventListener('click', togglePeeling);
closePeeling.addEventListener('click', togglePeeling);

alginRow.addEventListener('click', toggleAlgin);
closeAlgin.addEventListener('click', toggleAlgin);


function toggleClassic () {
  classic.classList.toggle("is-open");
}

function togglePeeling () {
  peeling.classList.toggle("is-open");
}

function toggleAlgin () {
  algin.classList.toggle("is-open");
}

