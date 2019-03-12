//Ao precionar Enter, Pesquisa
var input = document.getElementById("inputPesq");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btnMenu").click();
  }
});

// When the user clicks on div, open the popup
function sobreFunction() {
    var popup = document.getElementById("sobre");
    popup.classList.toggle("show");
}