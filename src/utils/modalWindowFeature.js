import { formBuilder } from "../components/Form/Form";

async function displayLoginForm() {
  const loginForm = formBuilder()
    .setAction("/login")
    .setMethod("POST")
    .addInput("text", "username", "Username")
    .addInput("password", "password", "Password")
    .addButton("submit", "Login")
    .build();

  document.getElementById("form-container").appendChild(loginForm);
}

export function modalWindowFeature() {
  function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    displayLoginForm();
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    document.getElementById("form-container").innerHTML = "";
  }

  const profileImg = document.querySelector(".header__profile");
  const closeButton = document.querySelector(".close-button");

  profileImg.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  });
}
