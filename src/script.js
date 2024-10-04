import { fetchRecipes } from "./api/recipeApi";
import { cardFactory } from "./components/RecipeCard/RecipeCard";
import { modalWindowFeature } from "./utils/modalWindowFeature";
import { sortRecipesByDifficulty } from "./utils/sortStrategy";
import "./styles.css";
import { createObservable } from "./utils/createObservable";

// let recipesState = [];
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
// recipesObservable.subscribe(displayRecipes);

async function fetchAndDisplayRecipes(query) {
  try {
    const recipes = await fetchRecipes(query);

    recipesObservable.setState(recipes);
    // displayRecipes(recipes);
    // recipesState = recipes;
  } catch (error) {
    console.error("Ошибка при отображении рецептов:", error);
  }
}

export const sortRecipesFeature = () => {
  const sortButton = document.getElementById("sort");

  sortButton.addEventListener("click", () => {
    const sortedRecipes = sortRecipesByDifficulty(recipesObservable.getState());

    recipesObservable.setState(sortedRecipes);
    // displayRecipes(sortedRecipes);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayRecipes("pasta");
  modalWindowFeature();
  sortRecipesFeature();
});
