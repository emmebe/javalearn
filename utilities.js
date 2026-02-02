function clicker() {
     alert("clicked!");
 }

const click = document.getElementById("buttonclick");

click.addEventListener("click", (event) => {
    clicker();
});