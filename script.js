const targetDate = new Date("2026-11-14T09:00:00+07:00").getTime();
const ids = ["days", "hours", "minutes", "seconds"];

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
