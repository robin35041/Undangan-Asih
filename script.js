const targetDate = new Date("2026-11-14T09:00:00+07:00").getTime();
const ids = ["days", "hours", "minutes", "seconds"];
const cover = document.getElementById("invitationCover");
const openButton = document.getElementById("openInvitation");
const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

function updateCountdown() {
  const remaining = Math.max(0, targetDate - Date.now());
  const units = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
  ids.forEach((id, index) => {
    document.getElementById(id).textContent = String(units[index]).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.body.classList.add("no-scroll");

openButton.addEventListener("click", () => {
  cover.classList.add("is-open");
  document.body.classList.remove("no-scroll");
  musicToggle.classList.add("is-visible");
  music.play().catch(() => {
    musicToggle.setAttribute("aria-label", "Putar musik");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.classList.add("is-muted");
  });
});

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.setAttribute("aria-label", "Matikan musik");
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.classList.remove("is-muted");
  } else {
    music.pause();
    musicToggle.setAttribute("aria-label", "Putar musik");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.classList.add("is-muted");
  }
});
