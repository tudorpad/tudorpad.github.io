(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const year = document.querySelector("[data-current-year]");
  const savedTheme = localStorage.getItem("theme");
  const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  root.dataset.theme = savedTheme || preferredTheme;

  toggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
