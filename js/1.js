document
  .getElementById("light-mode")
  .addEventListener("click", function () {
    document.body.classList.remove("blue-mode", "green-mode", "dark-mode");
    document.body.classList.add("light-mode");
  });

document
  .getElementById("blue-mode")
  .addEventListener("click", function () {
    document.body.classList.remove("light-mode", "green-mode", "dark-mode");
    document.body.classList.add("blue-mode");
  });

document
  .getElementById("green-mode")
  .addEventListener("click", function () {
    document.body.classList.remove("light-mode", "blue-mode", "dark-mode");
    document.body.classList.add("green-mode");
  });

document
  .getElementById("dark-mode")
  .addEventListener("click", function () {
    document.body.classList.remove("light-mode", "blue-mode", "green-mode");
    document.body.classList.add("dark-mode");
  });
