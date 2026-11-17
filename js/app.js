// Grab the elements I need once
var recipeCard = document.getElementById("recipeCard");
var recipeImage = document.getElementById("recipeImage");
var imageFallback = document.getElementById("imageFallback");
var tryAnotherBtn = document.getElementById("tryAnotherBtn");
var tabs = document.querySelectorAll(".tab");
var panels = document.querySelectorAll(".tab-panel");

// Index of the recipe on the screen now (-1 = nothing yet)
var lastIndex = -1;

// Returns a random whole number from 0 up to (max - 1)
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Picks a random recipe, but never the same one twice in a row
function getRandomMeal() {
  var index = getRandomNumber(meals.length);

  while (meals.length > 1 && index === lastIndex) {
    index = getRandomNumber(meals.length);
  }

  lastIndex = index;
  return meals[index];
}

// Turns an array of strings into <li> items
function buildList(items) {
  var html = "";
  for (var i = 0; i < items.length; i++) {
    html += "<li>" + items[i] + "</li>";
  }
  return html;
}

// Builds the nutrition boxes from the nutrition object
function buildNutrition(nutrition) {
  var rows = [
    { label: "Calories", value: nutrition.calories + " kcal" },
    { label: "Protein", value: nutrition.protein + "g" },
    { label: "Carbohydrates", value: nutrition.carbs + "g" },
    { label: "Fat", value: nutrition.fat + "g" },
    { label: "Fiber", value: nutrition.fiber + "g" },
    { label: "Sodium", value: nutrition.sodium + "mg" }
  ];

  var html = "";
  for (var i = 0; i < rows.length; i++) {
    html +=
      "<div class='nutrition-item'>" +
      "<span class='label'>" + rows[i].label + "</span>" +
      "<span class='value'>" + rows[i].value + "</span>" +
      "</div>";
  }
  return html;
}

// Switches to one tab and hides the others
function openTab(tabName) {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    if (tabs[i].getAttribute("data-tab") === tabName) {
      tabs[i].classList.add("active");
    }
  }

  for (var j = 0; j < panels.length; j++) {
    panels[j].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
}

// Puts one recipe object on the page
function displayMeal(meal) {
  recipeImage.src = meal.image;
  recipeImage.alt = meal.name;
  document.getElementById("recipeRating").textContent = meal.rating;
  document.getElementById("recipeReviews").textContent = meal.reviews;
  document.getElementById("recipeName").textContent = meal.name;
  document.getElementById("recipeDescription").textContent = meal.description;
  document.getElementById("prepTime").textContent = meal.prepTime + " min";
  document.getElementById("cookTime").textContent = meal.cookTime + " min";
  document.getElementById("servings").textContent = meal.servings + " people";
  document.getElementById("difficulty").textContent = meal.difficulty;
  document.getElementById("cuisine").textContent = meal.cuisine;

  document.getElementById("ingredientsList").innerHTML = buildList(meal.ingredients);
  document.getElementById("instructionsList").innerHTML = buildList(meal.instructions);
  document.getElementById("nutritionGrid").innerHTML = buildNutrition(meal.nutrition);
  document.getElementById("chefTip").textContent = meal.tip;

  // Show the warning only for long recipes
  var totalTime = meal.prepTime + meal.cookTime;
  if (totalTime > 45) {
    document.getElementById("timeWarning").style.display = "block";
  } else {
    document.getElementById("timeWarning").style.display = "none";
  }

  // Colour the difficulty badge
  var badge = document.getElementById("difficulty");
  badge.className = "badge " + meal.difficulty.toLowerCase();

  // Every new recipe starts on the Ingredients tab
  openTab("ingredients");

  // Restart the fade-in animation
  recipeCard.classList.remove("show");
  void recipeCard.offsetWidth;
  recipeCard.classList.add("show");
}

// If a picture is missing, show the first letter of the recipe instead
recipeImage.onerror = function () {
  recipeImage.style.display = "none";
  imageFallback.textContent = recipeImage.alt.charAt(0);
  imageFallback.style.display = "flex";
};

recipeImage.onload = function () {
  recipeImage.style.display = "block";
  imageFallback.style.display = "none";
};

// Tab clicks
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    openTab(this.getAttribute("data-tab"));
  });
}

// Button click picks a new recipe
tryAnotherBtn.addEventListener("click", function () {
  displayMeal(getRandomMeal());
});

// Show a random recipe as soon as the page opens
displayMeal(getRandomMeal());
