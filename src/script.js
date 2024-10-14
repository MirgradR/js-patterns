import { fetchRecipes } from "./api/recipeApi";
import { cardFactory } from "./components/RecipeCard/RecipeCard";
import { modalWindowFeature } from "./utils/modalWindowFeature";
import { sortRecipesByDifficulty } from "./utils/sortStrategy";
import "./styles.css";
import { createObservable } from "./utils/createObservable";

const recipesObservable = createObservable([]);

function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeElementHTML = cardFactory(recipe, "basic");
    recipesContainer.innerHTML += recipeElementHTML;
  });
}

recipesObservable.subscribe(displayRecipes);
recipesObservable.subscribe((state) => console.log(state));

async function fetchAndDisplayRecipes(query) {
  try {
    const recipes = await fetchRecipes(query);

    recipesObservable.setState(recipes);
  } catch (error) {
    console.error("Ошибка при отображении рецептов:", error);
  }
}

export const sortRecipesFeature = () => {
  const sortButton = document.getElementById("sort");

  sortButton.addEventListener("click", () => {
    const sortedRecipes = sortRecipesByDifficulty(recipesObservable.getState());

    recipesObservable.setState(sortedRecipes);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayRecipes("pasta");
  modalWindowFeature();
  sortRecipesFeature();
});
