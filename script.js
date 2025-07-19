const changeTextBtn = document.getElementById('change-text-btn');
const introParagraph = document.getElementById('intro');

changeTextBtn.addEventListener('click', () => {
  if (introParagraph.textContent === 'Discover delicious recipes and tips.') {
    introParagraph.textContent = 'Explore new flavors and baking tricks every day!';
  } else {
    introParagraph.textContent = 'Discover delicious recipes and tips.';
  }
});

const toggleHighlightBtn = document.getElementById('toggle-highlight-btn');
const recipesSection = document.getElementById('recipes-section');

toggleHighlightBtn.addEventListener('click', () => {
  recipesSection.classList.toggle('highlight');
});

const addRemoveRecipeBtn = document.getElementById('add-remove-recipe-btn');
const recipeList = document.getElementById('recipe-list');

let added = false;

addRemoveRecipeBtn.addEventListener('click', () => {
  if (!added) {
    const newRecipe = document.createElement('li');
    newRecipe.textContent = 'Lemon Drizzle Cake';
    newRecipe.id = 'new-recipe';
    recipeList.appendChild(newRecipe);
    added = true;
    addRemoveRecipeBtn.textContent = 'Remove Recipe';
  } else {
    const recipeToRemove = document.getElementById('new-recipe');
    if (recipeToRemove) {
      recipeList.removeChild(recipeToRemove);
    }
    added = false;
    addRemoveRecipeBtn.textContent = 'Add/Remove Recipe';
  }
});
