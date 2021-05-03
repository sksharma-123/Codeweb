window.addEventListener("DOMContentLoaded", () => {
  addFormEventListener();
});

const addFormEventListener = () => {
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
};
