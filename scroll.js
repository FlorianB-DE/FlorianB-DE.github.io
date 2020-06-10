Array.prototype.forEach.call(document.getElementsByClassName("tableentry"), function (e) {
    e.addEventListener("click", function () {
        Array.prototype.forEach.call(document.getElementsByClassName("active"), function (current) {
            current.className = current.className.replace(" active", "");
        });
        this.className += " active";
    })
});