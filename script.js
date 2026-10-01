const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "cyber-pulse") {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "◓⃙ Pokeball";
    } else {
        document.documentElement.setAttribute("data-theme", "cyber-pulse");
        themeToggle.textContent = "◓⃙ Normal";
    }
});
