function clicker() {
     alert("clicked!");
 }

 window.onload = function() {
    const click = document.getElementById("buttonclick");

    click.addEventListener("click", (event) => {
        clicker();
    });
 };
