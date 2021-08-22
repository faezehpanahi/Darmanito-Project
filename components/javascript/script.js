function myFunction1() {
    var menu = document.getElementById("myLinks");
    var close = document.getElementById("close");
    var open = document.getElementById("open");

    menu.style.display = "block"
    open.style.display = "none";
    close.style.display = 'block';
}

function myFunction2() {
    var menu = document.getElementById("myLinks");
    var close = document.getElementById("close");
    var open = document.getElementById("open");

    menu.style.display = "none"
    open.style.display = "block";
    close.style.display = 'none';
}