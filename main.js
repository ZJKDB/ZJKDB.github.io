const year = document.getElementById("year");
year.textContent = String(new Date().getFullYear());

const links = Array.from(document.querySelectorAll(".nav a"));
const sections = links
  .map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  })
  .filter(Boolean);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      const id = "#" + entry.target.id;
      links.forEach(function (link) {
        link.classList.toggle("is-on", link.getAttribute("href") === id);
      });
    });
  },
  { rootMargin: "-45% 0px -48% 0px" }
);

sections.forEach(function (section) {
  observer.observe(section);
});
