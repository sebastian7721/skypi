// Function to store user data in Local Storage
function storeUserData(username, data) {
    localStorage.setItem(username, JSON.stringify(data));
}

// Function to retrieve user data from Local Storage
function getUserData(username) {
    return JSON.parse(localStorage.getItem(username));
}
