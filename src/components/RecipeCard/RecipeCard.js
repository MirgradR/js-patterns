function createCardWithRating(recipe) {
  return `
        <article class="main-content__super-delicious-item basic-card">
          <img src="${recipe.image}" alt="${recipe.title}" class="main-content__super-delicious-image" />
          <p class="main-content__super-delicious-rating">★★★★★</p>
          <h3 class="main-content__super-delicious-name">${recipe.title}</h3>
        </article>
      `;
}

function createDetailedCard(recipe) {
  return `
        <article class="main-content__super-delicious-item big-card">
          <img src="${recipe.image}" alt="${recipe.title}" class="main-content__super-delicious-image" />
          <div class="main-content__super-delicious-info">
            <h3 class="main-content__super-delicious-name">${recipe.title}</h3>
            <p class="main-content__super-delicious-rating">★★★★★</p>      
            <a href='#' class="main-content__super-delicious-read-more">Read more</p>    
          </div>
        </article>
      `;
}

function createBasicCard(recipe) {
  return `
          <article class="main-content__super-delicious-item basic-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="main-content__super-delicious-image" />
            <h3 class="main-content__super-delicious-name">${recipe.title}</h3>
          </article>
        `;
}

export function cardFactory(recipe, type) {
  switch (type) {
    case "detailed":
      return createDetailedCard(recipe);
    case "basic":
      return createBasicCard(recipe);
    case "with-rating":
      return createCardWithRating(recipe);
    default:
      return createBasicCard(recipe);
  }
}
