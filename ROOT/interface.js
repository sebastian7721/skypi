function addContent(newContent, element, text) {
    if (text === "y") {
        var currentText = element.innerText;
        var concatenatedText = currentText + newContent;
        element.innerText = concatenatedText;
    } else {
        var currentHTML = element.innerHTML;
        var concatenatedHTML = currentHTML + newContent;
        element.innerHTML = concatenatedHTML;
    }
}

window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("adventure")) {
        window.location.href = '/adventure/index.html';
    }
    else {
        terminal = document.createElement('script')
        terminal.src = '/terminal.js';
        terminal.type = "module";
        document.body.appendChild(terminal);
    }
});
