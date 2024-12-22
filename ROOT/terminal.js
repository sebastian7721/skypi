import * as rad from "/setCookies.js";
rad.checkLogin();

var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'commandLine');
var commandLineMode = false;
newDiv.innerHTML = "<button onclick='startCommandLine()'>Command Line</button>";
document.body.appendChild(newDiv);

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

async function results(command) {
    if (command === "spaceship") {
        window.location.href = '/adventure/index.html';
    } else if (command === "home") {
        window.location.href = '/index.html';
    } else if (command === "updates") {
        window.location.href = '/updates.html';
    } else if (command === "launchpad") {
        window.location.href = '/launchpad.html';
    } else if (command === "login") {
        window.location.href = '/login.html';
    } else if (command === "tsetheater") {
        window.location.href = '/tsetheater/index.html';
    
    } else if (command === "help") {
        addContent("\nCommands:", document.getElementById('commandLine'), "y");
        addContent("\n - spaceship - Enters the spaceship, and you can launch it into the adventure!", document.getElementById('commandLine'), "y");
        addContent("\n - home - Go to the home page", document.getElementById('commandLine'), "y");
        addContent("\n - updates - Go to the updates page", document.getElementById('commandLine'), "y");
        addContent("\n - launchpad - Go to the launchpad", document.getElementById('commandLine'), "y");
        addContent("\n - help - Display this help message", document.getElementById('commandLine'), "y");
        addContent("\n - clear - Clear the screen", document.getElementById('commandLine'), "y");
        addContent("\n - jump - Enters the jump assistant.", document.getElementById('commandLine'), "y");
        addContent("\n - exit - Exit the command line", document.getElementById('commandLine'), "y");
        addContent("\n - about - Display information about the server", document.getElementById('commandLine'), "y");
    } 
    else if (command === "clear") {
        document.getElementById('commandLine').innerHTML = "";
    } 
    else if (command === "jump") {
        var script = document.createElement('script');
        script.src = '/jump.js';
        document.body.appendChild(script);
    }
    else if (command === "signout") {
        rad.signOut();
    }
    else if (command === "exit") {
        document.getElementById('commandLine').innerHTML = "<button onclick='startCommandLine()'>Command Line</button>";
        commandLineMode = false;
    }
    else if (command === "about") {
        addContent("Maker: Sebastian Descy.", document.getElementById('commandLine'), "y");
        addContent("\nServer Name: skypi", document.getElementById('commandLine'), "y");
        addContent("\nVersion: 0.4.0", document.getElementById('commandLine'), "y");
    }
    else if (command === "dspell") {
        window.location.href = '/dspell/index.html';
    }
    else {
        addContent("Unknown command: " + command, document.getElementById('commandLine'), "y");
    }
}

function startCommandLine() {
    var div = document.getElementById('commandLine');
    div.innerHTML = "";
    commandLineMode = true;
    div.style.fontSize = "20px";
    addContent(rad.getCookie("username") + "@skypi *", div, "y");
    addContent('<input type="text" id="inputField">', div, "n");

    var inputField = document.getElementById("inputField");
    inputField.style.fontSize = "20px";
    inputField.focus();
    inputField.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            var command = this.value;
            addContent(command, div, "y");
            addContent("\n", div, "y");
            results(command).then(() => {
                if (command !== "exit") {
                    if (command !== "clear") {
                        addContent("\n", div, "y");
                    }
                    addContent(rad.getCookie("username") + "@skypi *", div, "y");
                    addContent('<input type="text" id="inputField">', div, "n");
                    var newInputField = document.getElementById("inputField");
                    newInputField.style.fontSize = "20px";
                    newInputField.focus();
                    newInputField.addEventListener('keydown', arguments.callee);
                }
            });
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (!commandLineMode && event.key === '/') {
        event.preventDefault();
        startCommandLine();
    }
});