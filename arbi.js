const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
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
// ----------

const grid = document.querySelector('#scholars-video .videos-grid');
const cards = Array.from(grid.children);

function adjustLastRow() {
    const gridWidth = grid.clientWidth;

    cards.forEach(card => card.style.gridColumn = ''); // نرجع كل شي للوضع الطبيعي

    let lastRow = [];
    let rowTop = null;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (rowTop === null || cardTop === rowTop) {
            lastRow.push(card);
            rowTop = cardTop;
        } else {
            lastRow = [card];
            rowTop = cardTop;
        }
    });

    if (lastRow.length === 1) {
        lastRow[0].style.gridColumn = '1 / -1'; // يمتد على كامل السطر
    }
}

window.addEventListener('load', adjustLastRow);
window.addEventListener('resize', adjustLastRow);



