let buttonTheme = document.getElementById('buttonTheme');
let body = document.querySelector('body');
let icon = document.querySelector('#icon');

buttonTheme.addEventListener('click', function() {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    window.localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");

    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
})