var stars = 0;
var started = false;
var coordi = { x: 0, y: 0, z: 0, planet: "Outer Space", room: "Tourum"};
var moonStarFound = false;
var spaceStationStarFound = false;
var spaceStarFound = false;
var mercuryStarFound = false;
var marsStarFound = false;
var achivement1Found = false;
document.body.style.color = "white";  // Change text color to white

function removeId(divid) {
    var x = document.getElementById(divid);
    if (x) {
        x.style.display = "none";
    }
}

function playAgain() {
    started = false;
    startdiverse();
}

function addStar(planet) {
    switch (planet) {
        case "Moon":
            moonStarFound = true;
            break;
        case "International Space Station":
            spaceStationStarFound = true;
            break;
        case "Outer Space":
            spaceStarFound = true;
            break;
        case "Mars":
            marsStarFound = true;
            break;
        case "Mercury":
            mercuryStarFound = true;
            break;
    }
    if (started) {
        stars++;
        document.getElementById("alerts").innerHTML = "<p> You have collected " + stars + " stars </p>";
        if (stars == 5) {
            document.getElementById("stardiverse").innerHTML = '<h1>Congratulations! You have won the game!</h1> <p> <button onclick="playAgain()">Play Again</button></p>';
        } else {
            document.getElementById("dashboard").innerHTML = '<h1>You earned a star on this planet!</h1>';
            document.getElementById("windshield").innerHTML = '<h2>You have plenty of stars. Go to other planets to find stars.</h2>';
        }
    }
}

function startdiverse() {
    if (!started) {
        stars = 0;
        coordi = { x: 0, y: 0, z: 0, planet: "Outer Space", room: "Tourum"};
        moonStarFound = false;
        spaceStationStarFound = false;
        spaceStarFound = false;
        started = true;
    }
    var img = new Image();
    img.src = 'space.jpg';
    img.onload = function() {
        document.body.style.backgroundImage = "url('space.jpg')";
        document.body.style.color = "yellow";  // Change text color to yellow
    };
    img.onerror = function() {
        console.error("Image not found or failed to load");
    };
    document.getElementById("stardiverse").innerHTML = '<h1>Welcome to the universe!</h1><h2>Collect stars to win!</h2>';
    document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ' on ' + coordi.planet + '</p>';
    planetDashboard();
}

function planetDashboard(startx=0, starty=0, startz=0, startr="Tourum") {
    if (started) {
        document.getElementById("dashboard").innerHTML = '<h1>Planet Dashboard</h1> <p>Is the moon somewhere to the right? You might easily find the star after you find the moon!</p>';
        coordi.x = startx;
        coordi.y = starty;
        coordi.z = startz;
        coordi.room = startr;
        coordi.planet = "Outer Space";
        document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ' on ' + coordi.planet + '</p>';
        var img = new Image();
        img.src = 'space.jpg';
        img.onload = function() {
            document.body.style.backgroundImage = "url('space.jpg')";
        };
        img.onerror = function() {
            console.error("Image not found or failed to load");
        };
        document.getElementById("stardiverse").innerHTML = '<h1>Welcome to the universe!</h1><h2>Collect stars to win!</h2>';
        document.getElementById("windshield").innerHTML = 'This is the windshield of our spaceship. You can see the stars and planets from here.';
    }
}
function mars(startx=0, starty=0, startz=0, startr="Tourum") {
    if (started) {
        coordi.x = startx;
        coordi.y = starty;
        coordi.z = startz;
        coordi.room = startr;
        coordi.planet = "Mars";
        document.getElementById("windshield").innerHTML = 'This is the windshield of our spaceship. You can see the stars and planets from here.';
        document.getElementById("dashboard").innerHTML = '<h1>Mars</h1> <p>The fun stuff in the southeast is very good.</p>';
        document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
        var img = new Image();
        img.src = 'mars.jpg';
        img.onload = function() {
            document.body.style.backgroundImage = "url('mars.jpg')";
        }
        img.onerror = function() {
            console.error("Image not found or failed to load");
        }
    }
}

function triangularSpaceship(startx=0, starty=0, startz=0, startr="Tourum") {
    if (started) {
        coordi.x = startx;
        coordi.y = starty;
        coordi.z = startz;
        coordi.room = startr;
        coordi.planet = "Triangular Spaceship";
        document.body.style.backgroundColor = "gold";
        document.getElementById("windshield").innerHTML = '<h1>Triangular Spaceship</h1> <p>This is a golden area of many keys. This is where you get your key to go to other planets. Mercury, Venus, Outer Galaxy Hub, and Titan are all part of Achivement 1.</p>';
    }
}
function findAchivement1() {
    if (started) {
        achivement1Found = true;
        document.getElementById("alerts").innerHTML = "<p>You earned achivement 1! There is a lot to do after the first achivement! You can now exit the Triangular Spaceship.</p>";
        document.getElementById("windshield").innerHTML = '<h2>You have found the key to Achivement 1. You can now go to new planets.</h2>';
    }
}
function planetHighlights() {
    if (started) {
        if (coordi.planet != "Outer Space") {
            coordi.z = 0;
            document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
        }
        if (coordi.x === 12 && coordi.y === 13 && coordi.planet == "Moon" && coordi.z === 0) {
            document.getElementById("alerts").innerHTML = "<p> The star is really close to you! Just take 1 step in front of you and you'll find it! </p>"
        }
        if (coordi.x == 12 && coordi.y === 14 && coordi.planet == "Moon" && coordi.z === 0) {
            if (!moonStarFound) {
                document.getElementById("dashboard").innerHTML = '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Moon\')">';
            }
        }
        if (coordi.x == 12 && coordi.y === 0 && coordi.planet == "Moon" && coordi.z === 0) {
            document.getElementById("alerts").innerHTML = "<p> Stop going right. You need to go up to find the star. </p>";
        }
        if (coordi.x == 20 && coordi.y === 0 && coordi.planet == "Outer Space" && coordi.z === 0) {
            if (!spaceStarFound) {
                document.getElementById("windshield").innerHTML = '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Outer Space\')">';
            }
        }
        if (coordi.x == 0 && coordi.y == -1 && coordi.planet == "Moon" && coordi.z == 0) {
            document.getElementById("alerts").innerHTML = "<p> You are moving towards the International Space Station. You need to go back to the star unless you want to go there. </p>";
        }
        if (coordi.x == 10 && coordi.y == 0 && coordi.planet == "Outer Space" && coordi.z == 0) {
            document.getElementById("windshield").innerHTML = '<img src="moonButton.jpg" width="50" height="50" onclick="moon()">';
        }
        if (coordi.x == 0 && coordi.y == -10 && coordi.planet == "Moon" && coordi.z == 0) {
            document.getElementById("windshield").innerHTML = '<img src="spaceStation.jpg" width="50" height="50" onclick="spaceStation()">';
        }
        if (coordi.x == 0 && coordi.y == 0 && coordi.z == 0) {
            switch (coordi.planet) {
                case "Moon":
                    document.getElementById("windshield").innerHTML = '<img src="space.jpg" width="50" height="50" onclick="planetDashboard(startx=10, starty=0)">';
                    break;
                case "International Space Station":
                    document.getElementById("windshield").innerHTML = '<img src="moon.jpg" width="50" height="50" onclick="moon(startx=0, starty=-10)">';
                    break;
                case "Mars":
                    document.getElementById("windshield").innerHTML = '<img src="spaceStation.jpg" width="50" height="50" onclick="spaceStation(x=0, starty=15)">';
                    break;
                case "Triangular Spaceship":
                    document.getElementById("windshield").innerHTML = '<img src="space.jpg" width="50" height="50" onclick="planetDashboard(startz=50)">';
                    break;
                case "Mercury":
                    document.getElementById("windshield").innerHTML = '<img src="space.jpg" width="50" height="50" onclick="planetDashboard(startx=-10, starty=10">';
                    break;
            }
        }
        if (coordi.x == 0 && coordi.y == 10 && coordi.planet == "International Space Station" && coordi.z == 0) {

            if (!spaceStationStarFound) {
                document.getElementById("windshield").innerHTML = '<img src="star.jpg" width="50" height="50" onclick="addStar(\'International Space Station\')">';
            }
        }
        if (coordi.x == 0 && coordi.y == 15 && coordi.planet == "International Space Station" && coordi.z == 0) {
            document.getElementById("windshield").innerHTML = '<img src="mars.jpg" width="50" height="50" onclick="mars()">';
        }
        if (coordi.x == 15 && coordi.y == -15 && coordi.planet == "Mars" && coordi.z == 0) {
            if (!marsStarFound) {
                document.getElementById("windshield").innerHTML = '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Mars\')">';
            }
        }
        if (coordi.x == 0 && coordi.y == 0 && coordi.z == 50) {
            document.getElementById("windshield").innerHTML = '<img src="triangle.jpg" width="50" height="50" onclick="triangularSpaceship()">';
        }
        if (coordi.x == 50 && coordi.y == 20 && coordi.z == 0 && coordi.planet == "Triangular Spaceship") {
            if (!achivement1Found) {
                document.getElementById("windshield").innerHTML = '<img src="key.jpg" width="50" height="50" onclick="findAchivement1()">';
            }
        }
        if (coordi.x == -10 && coordi.y == 10 && coordi.z == 0 && coordi.planet == "Outer Space") {
            document.getElementById("windshield").innerHTML = '<img src="mercury.jpg" width="50" height="50" onclick="mercury()">';
        }
        if (coordi.x == 25 && coordi.y == 25 && coordi.z == 0 && coordi.planet == "Mercury") {
            if (!mercuryStarFound) {
                document.getElementById("windshield").innerHTML = '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Mercury\')">';
            }
        }
    }
}

function mercury(startx=0, starty=0, startz=0, startr="Tourum") {
    if (started) {
        if (achivement1Found) {
            coordi.x = startx;
            coordi.y = starty;
            coordi.z = startz;
            coordi.room = startr;
            coordi.planet = "Mercury";
            document.getElementById("windshield").innerHTML = 'This is the windshield of our spaceship. You can see the stars and planets from here.';
            document.getElementById("dashboard").innerHTML = '<h1>Mercury</h1> <p>Mercury is a great place to find a star. You can find the star by moving to the right.</p>';
            document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
            var img = new Image();
            img.src = 'mercury.jpg';
            img.onload = function() {
                document.body.style.backgroundImage = "url('mercury.jpg')";
            }
            img.onerror = function() {
                console.error("Image not found or failed to load");
            }
        }
    }
}

function spaceStation(startx=0, starty=0, startz=0, startr="International Space Station") {
    if (started) {
        coordi.x = startx; 
        coordi.y = starty;
        coordi.z = startz;
        coordi.room = startr;
        coordi.planet = "International Space Station";
        document.getElementById("windshield").innerHTML = 'This is the windshield of our spaceship. You can see the stars and planets from here.';
        document.getElementById("dashboard").innerHTML = '<h1>International Space Station</h1> <p>The International Space Station is a great place to find a star. You can find the star by moving to the right.</p>';
        document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
        var img = new Image();
        img.src = 'spaceStation.jpg';
        img.onload = function() {
            document.body.style.backgroundImage = "url('spaceStation.jpg')";
        }
        img.onerror = function() {
            console.error("Image not found or failed to load");
        }
    }
}


function moon(startx=0, starty=0, startz=0) {
    if (started) {
        coordi.x = startx;
        coordi.y = starty;
        coordi.z = startz;
        coordi.planet = "Moon";
        document.getElementById("windshield").innerHTML = 'This is the windshield of our spaceship. You can see the stars and planets from here.';
        document.getElementById("dashboard").innerHTML = '<h1>Moon</h1> <p>The moon is a great place to find a star. You can find the star by moving to the right.</p>';
        document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
        var img = new Image();
        img.src = 'moon.jpg';
        img.onload = function() {
            document.body.style.backgroundImage = "url('moon.jpg')";
        }
        img.onerror = function() {
            console.error("Image not found or failed to load");
        }
    }
}

function moveC(direction) {
    if (started) {
        switch (direction) {
            case 'forward':
                coordi.y++;
                break;
            case 'backward':
                coordi.y--;
                break;
            case 'left':
                coordi.x--;
                break;
            case 'right':
                coordi.x++;
                break;
            case 'up':
                coordi.z++;
                break;
            case 'down':
                coordi.z--;
                break;
        }
        document.getElementById("coordinate").innerHTML = '<h1>Coordinates</h1>' + '<p>' + coordi.x + ', ' + coordi.y + ', ' + coordi.z + ' on ' + coordi.planet + '</p>';
        document.getElementById("windshield").innerHTML = "";
        document.getElementById("alerts").innerHTML = "";
        planetHighlights();
    }
}

document.addEventListener('keydown', function(event) {
    if (started) {
        switch (event.key) {
            case 'ArrowUp':
                moveC('forward');
                break;
            case 'ArrowDown':
                moveC('backward');
                break;
            case 'ArrowLeft':
                moveC('left');
                break;
            case 'ArrowRight':
                moveC('right');
                break;
            case 'w':
                moveC('up');
                break;
            case 's':
                moveC('down');
                break;
        }
        if (event.code == 'Space') {
            switch (document.getElementById("windshield").innerHTML) {
                    case '<img src="moonButton.jpg" width="50" height="50" onclick="moon()">':
                        moon();
                        break;
                    case '<img src="spaceStation.jpg" width="50" height="50" onclick="spaceStation()">':
                        spaceStation();
                        break;
                    case '<img src="mars.jpg" width="50" height="50" onclick="mars()">':
                        mars();
                        break;
                    case '<img src="star.jpg" width="50" height="50" onclick="addStar(\'International Space Station\')">':
                        addStar('International Space Station');
                        break;
                    case '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Outer Space\')">':
                        addStar('Outer Space');
                        break;
                    case '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Mars\')">':
                        addStar('Mars');
                        break;
                    case '<img src="space.jpg" width="50" height="50" onclick="planetDashboard(10, 0)">':
                        planetDashboard(10, 0);
                        break;
                    case '<img src="moon.jpg" width="50" height="50" onclick="moon(0, -10)">':
                        moon(0, -10);
                        break;
                    case '<img src="spaceStation.jpg" width="50" height="50" onclick="spaceStation(0, 15)">':
                        spaceStation(0, 15);
                        break;
                    case '<img src="triangle.jpg" width="50" height="50" onclick="triangularSpaceship()">':
                        triangularSpaceship();
                        break;
                }
            if (document.getElementById("planetDashboard").innerHTML == '<img src="star.jpg" width="50" height="50" onclick="addStar(\'Moon\')">') {
                addStar('Moon');
            }
        }
    }    
});