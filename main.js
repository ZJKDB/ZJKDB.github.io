const year = document.getElementById("year");
const hostName = document.getElementById("host-name");
const visitLine = document.getElementById("visit-line");
const clockBtn = document.getElementById("clock-btn");
const clockLine = document.getElementById("clock-line");

year.textContent = String(new Date().getFullYear());
hostName.textContent = location.hostname || "this site";

const protocol = location.protocol.replace(":", "").toUpperCase();
visitLine.textContent =
  "This page was opened as " +
  protocol +
  " on " +
  (location.hostname || "a local file") +
  ". The name is resolved with DNS, the connection is TCP, and GitHub Pages serves the files over HTTPS.";

clockBtn.addEventListener("click", function () {
  const now = new Date();
  clockLine.hidden = false;
  clockLine.textContent = "Local time: " + now.toLocaleString();
});
