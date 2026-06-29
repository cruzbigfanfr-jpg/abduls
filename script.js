
// Smooth page loading
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Button click animation
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});

// Console Message
console.log("ABDULS Website Loaded Successfully!");
