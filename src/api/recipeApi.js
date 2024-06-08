const apiKey = "29ccc96cf81445b891e3d812b9865159";
const baseUrl = "https://api.spoonacular.com/recipes";

async function fetchRecipes(query) {
  const url = `${baseUrl}/complexSearch?apiKey=${apiKey}&query=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function fetchRecipeById(id) {
  const url = `${baseUrl}/${id}/information?apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function fetchRandomRecipe() {
  const url = `${baseUrl}/random?apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

export { fetchRecipes, fetchRecipeById, fetchRandomRecipe };
