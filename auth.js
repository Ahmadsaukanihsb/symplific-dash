document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const navbar = document.getElementById("navbar");
    const buttons = document.getElementById("buttons");

    // Cek apakah user sudah login sebelumnya
    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (userLoggedIn) {
        showLoggedInState();
    }

    loginBtn.addEventListener("click", function () {
        // Simulasikan login dengan menyimpan status ke localStorage
        localStorage.setItem("userLoggedIn", "true");
        showLoggedInState();
    });

    logoutBtn.addEventListener("click", function () {
        // Hapus status login
        localStorage.removeItem("userLoggedIn");
        showLoggedOutState();
    });

    function showLoggedInState() {
        loginBtn.style.display = "none";
        navbar.style.display = "flex";
        buttons.style.display = "block";
    }

    function showLoggedOutState() {
        loginBtn.style.display = "block";
        navbar.style.display = "none";
        buttons.style.display = "none";
    }
});
