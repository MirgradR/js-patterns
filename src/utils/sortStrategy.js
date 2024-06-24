// Стратегии сортировки рецептов
const sortByName = (recipes) => {
  return recipes.toSorted((a, b) => a.name.localeCompare(b.name));
};

const sortByTime = (recipes) => {
  return recipes.toSorted((a, b) => a.cookTime - b.cookTime);
};

const sortByDifficulty = (recipes) => {
  return recipes.toSorted((a, b) => a.difficulty - b.difficulty);
};

const sortRecipes = (strategy) => {
  return function (recipes) {
    const isValid = recipes.every(
      (recipe) =>
        recipe.title && recipe.cookTime != null && recipe.difficulty != null
    );
    if (!isValid) {
      console.error(
        "Некоторые рецепты не содержат необходимых данных для сортировки."
      );
      return recipes;
    }
    return strategy(recipes);
  };
};

export const sortRecipesByDifficulty = sortRecipes(sortByDifficulty);
export const sortRecipesByTime = sortRecipes(sortByTime);
export const sortRecipesByName = sortRecipes(sortByName);
export const sortRecipesById = sortRecipes((recipes) => {
  return recipes.toSorted((a, b) => a.id - b.id);
});
