// setCookies.js
export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function eraseCookie(name) {
    // Set the cookie with a past expiration date
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

export function setLoginCookie() {
    var username = document.getElementById('username').value;
    setCookie('username', username, 365); // Set username cookie for a year
    window.location.href = '/index.html'; // Redirect to another page after login
}

export function checkLogin() {
    var username = getCookie('username');
    if (!username) {
        setCookie('username', 'skypi', 365); // Set default username 'skypi' for 1 year
    }
}

export function signOut() {
    eraseCookie('username'); // Erase the username cookie
    window.location.href = '/login.html'; // Redirect to the login page
}
