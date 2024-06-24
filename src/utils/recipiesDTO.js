const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для преобразования объектов рецептов, добавляя cookTime и difficulty
export const transformRecipes = (recipes) => {
  return recipes.map((recipe) => {
    return {
      ...recipe,
      cookTime: getRandomInt(10, 120), // Например, случайное время приготовления от 10 до 120 минут
      difficulty: getRandomInt(1, 5), // Например, случайная сложность от 1 до 5
    };
  });
};
