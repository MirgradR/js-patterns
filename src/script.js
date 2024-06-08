import { fetchRecipes } from "./api/recipeApi";
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

document.addEventListener("DOMContentLoaded", () => {
  displayRecipes("pasta");
});
