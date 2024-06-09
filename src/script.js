import { fetchRecipes } from "./api/recipeApi";
import { formBuilder } from "./components/Form/Form";
import { cardFactory } from "./components/RecipeCard/RecipeCard";
import "./styles.css";

async function displayRecipes(query, type = "basic") {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";

  try {
    const recipes = await fetchRecipes(query);

    recipes.forEach((recipe) => {
      const recipeElementHTML = cardFactory(recipe, type);
      recipesContainer.innerHTML += recipeElementHTML;
    });
  } catch (error) {
    console.error("Ошибка при отображении рецептов:", error);
  }
}

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

function modalWindowFeature() {
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

document.addEventListener("DOMContentLoaded", () => {
  displayRecipes("pasta");
  modalWindowFeature();
});
