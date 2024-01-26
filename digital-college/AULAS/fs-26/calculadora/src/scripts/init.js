const bodyTag = document.querySelector('body');
const theme = window.localStorage.getItem("theme");

if(theme === "dark") {
    bodyTag.classList.add("dark");
    bodyTag.classList.remove("light");
}
