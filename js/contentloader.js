function load(html, DOMElement) {
    const request = new XMLHttpRequest();
    request.open('GET', 'articles/' + html, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const resp = request.responseText;
            DOMElement.innerHTML = resp;
        }
    };
    request.send();
}

window.onload = function (){
    const articles = document.getElementsByClassName("article");
    for (let i = 0; i < articles.length; ++i)
        load((i + 1) + ".html", articles[i]);
}