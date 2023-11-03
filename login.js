document.getElementById("submit-button").addEventListener("click", function() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;

    // Replace 'username1', 'username2', 'password1', and 'password2' with your desired usernames and passwords
    if (username === "salmananik" && password === "833644427") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("salmananik").style.display = "block";
        document.getElementById("welcome-username").textContent = username;
    } else if (username === "2" && password === "2") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("next-page2").style.display = "block";
        document.getElementById("welcome-username2").textContent = username;
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});