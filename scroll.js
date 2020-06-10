Array.prototype.forEach.call(document.getElementsByClassName("tableentry"), function (e) {
    e.addEventListener("click", function () {
        Array.prototype.forEach.call(document.getElementsByClassName("active"), function (current) {
            current.className = current.className.replace(" active", "");
        });
        this.className += " active";
    })
});

let mainbody = document.getElementById("mainbody");
mainbody.onscroll = function () {
    let footer =  document.getElementById("footer");
    let timer = setInterval(function () {
        if(mainbody.scrollHeight - mainbody.scrollTop <= mainbody.clientHeight) {
            let value = parseFloat(window.getComputedStyle(footer).marginBottom);
            if (value < parseInt(window.getComputedStyle(footer).height ) / 5) {
                value += 1;
                footer.style.marginBottom = value.toString() + "px";
            }else clearInterval(timer);
        }
        else{
            footer.style.marginBottom = "0";
            clearInterval(timer);
        }
    }, 50);
};