const div = document.createElement('div');
div.id = "theatertop";
div.innerHTML = '<img src="/tsetheater/TSE.jpeg" width="100" height="100" onclick="mainInterface()">';
const firstChild = document.body.firstChild;
var f = true;
document.body.insertBefore(div, firstChild);

const interfaceDiv = document.createElement('div');
interfaceDiv.id = "interfaceDiv";
interfaceDiv.innerHTML = "";
document.body.appendChild(interfaceDiv);

function addContent(newContent, element, text) {
    if (!element) {
        console.error('Element not found for addContent');
        return;
    }

    if (text === "y") {
        const currentText = element.innerText;
        const concatenatedText = currentText + newContent;
        element.innerText = concatenatedText;
    } else {
        const currentHTML = element.innerHTML;
        const concatenatedHTML = currentHTML + newContent;
        element.innerHTML = concatenatedHTML;
    }
}

function getCharOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;  // Ensure function returns a value if not found
}
function clearInterface() {
    const interface = document.getElementById("interfaceDiv");
    if (f = false) {
        interface.innerHTML = "";  // Clear the content of the interface
    }
    else {
        f = false;
    }
}
function wow() {
    const interface = document.getElementById("interfaceDiv");
    clearInterface();   // Clear the content of the interface
    addContent("<h1>Wonder of Wonders</h1>", interface, "n");
    addContent("<p>Wonder of Wonders is a musical revue that will be performed on December 8, 2024 at 11:30.</p>", interface, "n");
    addContent("<p>It will be performed at the Temple Shaari Emeth.</p>", interface, "n");
    addContent('<p><button onclick="shows()">Shows</button></p>', interface, "n");
}

function shows() {
    const interface = document.getElementById("interfaceDiv");
    clearInterface();   // Clear the content of the interface
    addContent("<h1>Shows</h1>", interface, "n");
    addContent("<p>Here is a list of shows.</p>", interface, "n");
    addContent('<p><button onclick="wow()">(WOW) Wonder of Wonders</button></p>', interface, "n");
}

function mainInterface() {
    const river = document.getElementById("interfaceDiv");
    clearInterface();
    addContent('<h1>Welcome to the Temple Shaari Emeth Theater</h1><p>Temple Shaari Emeth is a temple in Manalapan, New Jersey. This is the page for the theater group.</p>', river, "n");
    addContent('<p><button onclick="shows()">Shows</button></p>', river, "n");
}

function exitButton() {
    addContent('<p><button onclick="exit()">Exit</button></p>', document.body, "n");
}

function exit() {
    window.location.href = '/index.html';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        exit();
    }
});

addContent("\n\n\n\n\n\n\n\n\n\n", document.body, "y");

// Check URL for the 'wow' and 'shows' parameters and call the appropriate function if present
mainInterface();
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('wow')) {
        wow();
    }
    if (urlParams.has('shows')) {
        shows();
    }
});
