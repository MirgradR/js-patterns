import { fetchRecipes } from "./api/recipeApi";
import { cardFactory } from "./components/RecipeCard/RecipeCard";
import { modalWindowFeature } from "./utils/modalWindowFeature";
import {
  sortRecipesByDifficulty,
  sortRecipesByTime,
} from "./utils/sortStrategy";
import "./styles.css";

let recipesState = [];

async function fetchAndDisplayRecipes(query) {
  try {
    const recipes = await fetchRecipes(query);

    displayRecipes(recipes);
    recipesState = recipes;
  } catch (error) {
    console.error("Ошибка при отображении рецептов:", error);
  }
}

function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeElementHTML = cardFactory(recipe, "basic");
    recipesContainer.innerHTML += recipeElementHTML;
  });
}

export const sortRecipesFeature = () => {
  const sortButton = document.getElementById("sort");

  sortButton.addEventListener("click", () => {
    const sortedRecipes = sortRecipesByTime(recipesState);
    displayRecipes(sortedRecipes);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayRecipes("pasta");
  modalWindowFeature();
  sortRecipesFeature();
});
