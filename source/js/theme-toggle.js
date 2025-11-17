function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-bs-theme");
    root.setAttribute("data-bs-theme", current === "light" ? "dark" : "light");

    const icon = document.getElementById("theme-toggle").querySelector("i");
    icon.classList.toggle("bi-sun");
    icon.classList.toggle("bi-moon");
}
