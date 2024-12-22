var savedHTML = document.body.innerHTML;


function restore() {
    document.body.innerHTML = savedHTML;
}
function exploreInternet() {
    document.body.innerHTML = '';
    addContent("<h1>Explore the World</h1>", document.body, "n");
    addContent("<p>Here is a list of websites.</p>", document.body, "n");
    addContent("<p><a href=\"https://www.google.com/\">Google</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.youtube.com/\">YouTube</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.reddit.com/\">Reddit</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.facebook.com/\">Facebook</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.swdescy.com/\">Sebbyd</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.apple.com/\">Apple</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.microsoft.com/\">Microsoft</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.amazon.com/\">Amazon</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.netflix.com/\">Netflix</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.wikipedia.org/\">Wikipedia</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.instagram.com/\">Instagram</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.twitter.com/\">Twitter</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.linkedin.com/\">LinkedIn</a></p>", document.body, "n");
    addContent("<p><a href=\"https://www.pinterest.com/\">Pinterest</a></p>", document.body, "n");
    addContent("<p><button onclick=\"mainScreen()\">Back</button></p>", document.body, "n");
}   

function addContent(newContent, div, text) {
    if (text === "y") {
        var currentText = div.innerText;
        var concatenatedText = currentText + newContent;
        div.innerText = concatenatedText;
    } else {
        var currentHTML = div.innerHTML;
        var concatenatedHTML = currentHTML + newContent;
        div.innerHTML = concatenatedHTML;
    }
}

function mainScreen() {
    document.body.innerHTML = '';
    addContent("<h1>Welcome to the jump assistant!</h1>", document.body, "n");
    addContent("<p>This assistant was created by Jack Jump. To exit, press the esc key.</p>", document.body, "n");
    addContent("<button onclick=\"exploreInternet()\">Explore The Internet</button>", document.body, "n");
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        restore();
    }
});

mainScreen();
addContent("<p><button onclick=\"restore()\">Exit</button></p>", document.body, "n");