let entries = document.getElementsByClassName("tableentry");

Array.prototype.forEach.call(entries, function (e) {
    console.log(e);
});