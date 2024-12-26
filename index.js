document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("list").addEventListener("click", () => {
    document.getElementById("nav").style.display = "flex";
  });

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("nav").style.display = "none";
  });

  window.addEventListener("resize", (event) => {
    if (window.innerWidth >= 750) {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
  });
});