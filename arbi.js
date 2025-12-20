const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".bidaa-toggle-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                btn.innerText = btn.innerText.replace("▼", "▲");
            } else {
                content.style.display = "none";
                btn.innerText = btn.innerText.replace("▲", "▼");
            }
        });
    });
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('Service Worker failed', err));
  });
}
