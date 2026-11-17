# What's For Dinner

Assignment 8. A small app that picks a random recipe from my favourite meals, so I don't have to decide every time someone asks what's for dinner.

## How to run

Open `index.html` in the browser. A random recipe shows when the page opens, and **Try Another Recipe** picks a new one.

## How it works

- `js/meals.js` holds an array called `meals`. Each recipe is an object with the same keys: `name`, `description`, `image`, `rating`, `reviews`, `prepTime`, `cookTime`, `servings`, `difficulty`, `cuisine`, `ingredients` (array), `instructions` (array), `nutrition` (object) and `tip`.
- `js/app.js` uses `Math.floor(Math.random() * meals.length)` to get a random index, then fills the card with that recipe.
- The same recipe won't come up twice in a row.
- The "Extended Preparation Time" warning only shows when prep time + cook time is more than 45 minutes.
- The Ingredients / Instructions / Nutrition / Chef's Tips tabs switch with a click.
- If a recipe's picture is missing from `images/`, the card shows the first letter of the recipe instead.

## Images

Put the pictures in the `images/` folder using the names in `meals.js` (for example `images/koshari.jpg`).
