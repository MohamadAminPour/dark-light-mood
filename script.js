let btn = document.querySelector("button");
let root = document.querySelector(":root");

let theme = "light";
btn.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark";
    root.style.setProperty("--primary", "#1b1a1a");
  } else {
    theme = 'light';
    root.style.setProperty("--primary", "#f5f5f5");
  }
  console.log(theme);
});
