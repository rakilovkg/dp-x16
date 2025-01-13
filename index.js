document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const listIcon = document.getElementById("list");
  const closeIcon = document.getElementById("close");

  if (window.innerWidth < 750) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

  listIcon.addEventListener("click", () => {
    nav.style.display = "flex";
  });

  closeIcon.addEventListener("click", () => {
    nav.style.display = "none";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 750) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  });
});
