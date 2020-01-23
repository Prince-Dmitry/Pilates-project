var link = document.querySelector(".login");
var popup = document.querySelector(".window");
var close = popup.querySelector(".window__close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("window--show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("window--show");
    popup.classList.remove("window--error");
});
