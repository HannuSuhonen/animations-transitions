// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var customButton = document.getElementsByClassName("customButton")[0];
var grayCanvas = document.getElementById("grayCanvas");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
customButton.onclick = function() {
    showHide();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    showHide();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    showHide();
  }
}

function showHide() {
    if (modal.classList[1] === "fade-in") {
      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");

    } else {
      modal.classList.remove("fade-out");
      modal.classList.add("fade-in");
    }
    grayCanvas.classList.toggle("opacity");
    console.log("run");
  }