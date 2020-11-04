let content_div = document.getElementById("mainbody");
content_div.addEventListener("scroll", function (event) {
    let body_div_bounds = content_div.getBoundingClientRect();
    let element = content_div.getElementsByClassName("article");
    for (let i = 0; i < element.length; i++){
        let article_div_bounds = element[i].getBoundingClientRect();
        if (article_div_bounds.y >= 0 && article_div_bounds.y < body_div_bounds.height){
            let active_entry = document.getElementsByClassName("tableentry active")[0];
            if(active_entry != element[i]){
                active_entry.className = active_entry.className.replace(" active", "");
                console.log(active_entry.className + " " + active_entry.id);
                document.getElementById(element[i].id + "_entry").className += " active";
            }
            return;
        }
    }
});



let mainbody = document.getElementById("mainbody");
mainbody.onscroll = function () {
    let footer =  document.getElementById("footer");
    let timer = setInterval(function () {
        if(mainbody.scrollHeight - mainbody.scrollTop <= mainbody.clientHeight) {
            let value = parseFloat(window.getComputedStyle(footer).marginBottom);
            if (value < parseInt(window.getComputedStyle(footer).height ) / 5) {
                value += 2;
                footer.style.marginBottom = value.toString() + "px";
            }else clearInterval(timer);
        }
        else{
            footer.style.marginBottom = "0";
            clearInterval(timer);
        }
    }, 50);
};