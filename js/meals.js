// All my recipes live in one array.
// Every recipe is an object with the same keys, so the rest of the code
// can treat any recipe the same way.
//
// name, description, image, cuisine, difficulty -> strings
// rating, reviews, prepTime, cookTime, servings -> numbers (times in minutes)
// ingredients  -> array of strings
// instructions -> array of strings (in order)
// nutrition    -> object { calories, protein, carbs, fat, fiber, sodium }
// tip          -> string (the chef's tip)

var meals = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c987e47793-062e728ad4ccc343589c.png",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "400g spaghetti pasta",
      "150g pancetta, diced",
      "4 large eggs",
      "100g parmesan cheese, grated",
      "2 cloves garlic",
      "Black pepper and salt"
    ],
    instructions: [
      "Boil the spaghetti in salted water until al dente.",
      "Fry the pancetta with the garlic until crispy, then remove the garlic.",
      "Whisk the eggs with the parmesan and lots of black pepper.",
      "Drain the pasta, keep a cup of the water, and add the pasta to the pancetta pan off the heat.",
      "Pour in the egg mix and toss fast, adding pasta water until it turns creamy."
    ],
    nutrition: { calories: 520, protein: 28, carbs: 62, fat: 18, fiber: 3, sodium: 680 },
    tip: "Use room temperature eggs for a smoother sauce consistency"
  },
  {
    name: "Koshari",
    description: "Egypt's favourite street food: rice, lentils and pasta under spicy tomato sauce",
    image: "images/koshari.jpg",
    rating: 4.9,
    reviews: 512,
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Egyptian",
    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "2 cups short macaroni",
      "1 can chickpeas",
      "3 onions, thinly sliced",
      "2 cups tomato sauce",
      "Garlic and vinegar (dakka)"
    ],
    instructions: [
      "Fry the sliced onions until dark and crispy, keep the oil.",
      "Boil the lentils until almost soft, then add the rice and cook together.",
      "Boil the macaroni in salted water and drain.",
      "Cook the tomato sauce with garlic, cumin and a bit of vinegar.",
      "Layer rice and lentils, macaroni, chickpeas, sauce, then the crispy onions on top."
    ],
    nutrition: { calories: 610, protein: 22, carbs: 105, fat: 12, fiber: 14, sodium: 720 },
    tip: "Cook the rice in the onion oil to get that real street-cart flavour"
  },
  {
    name: "Molokhia with Chicken",
    description: "Silky green molokhia with a garlic and coriander tasha, served with roast chicken",
    image: "images/molokhia.jpg",
    rating: 4.7,
    reviews: 188,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Egyptian",
    ingredients: [
      "400g minced molokhia",
      "1 whole chicken",
      "6 cloves garlic",
      "1 tbsp ground coriander",
      "2 tbsp ghee",
      "2 cups white rice"
    ],
    instructions: [
      "Boil the chicken with onion, cardamom and bay leaves to make a broth.",
      "Bring 4 cups of broth to a boil and stir in the molokhia.",
      "Fry the garlic and coriander in ghee until golden.",
      "Pour the garlic mix into the molokhia and switch off the heat.",
      "Roast the chicken in the oven and serve everything with rice."
    ],
    nutrition: { calories: 580, protein: 42, carbs: 48, fat: 22, fiber: 6, sodium: 640 },
    tip: "Don't cover the pot after adding molokhia or it will sink and lose its colour"
  },
  {
    name: "Mahshi",
    description: "Zucchini and peppers stuffed with herby tomato rice, cooked slowly in stock",
    image: "images/mahshi.jpg",
    rating: 4.8,
    reviews: 301,
    prepTime: 40,
    cookTime: 50,
    servings: 5,
    difficulty: "Hard",
    cuisine: "Egyptian",
    ingredients: [
      "1 kg zucchini and peppers",
      "2 cups Egyptian rice",
      "2 cups tomato juice",
      "1 bunch each of dill, parsley and coriander",
      "1 onion, grated",
      "3 cups chicken stock"
    ],
    instructions: [
      "Core the zucchini and cut the tops off the peppers.",
      "Mix the rice with the herbs, onion, tomato juice, salt and pepper.",
      "Stuff the vegetables about three quarters full.",
      "Stack them in a pot and cover with stock.",
      "Cook on low heat for about 45 minutes until the rice is soft."
    ],
    nutrition: { calories: 430, protein: 10, carbs: 82, fat: 7, fiber: 8, sodium: 560 },
    tip: "Leave space in each one, the rice grows while it cooks"
  },
  {
    name: "Macarona Béchamel",
    description: "Baked penne layered with spiced minced beef and a thick béchamel top",
    image: "images/bechamel.jpg",
    rating: 4.9,
    reviews: 420,
    prepTime: 25,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    cuisine: "Egyptian",
    ingredients: [
      "500g penne",
      "500g minced beef",
      "1 onion",
      "100g butter",
      "100g flour",
      "1 litre milk",
      "1 egg"
    ],
    instructions: [
      "Boil the penne until half cooked and drain.",
      "Cook the minced beef with the onion, salt and pepper.",
      "Melt butter, add flour, then whisk in the milk until thick.",
      "Mix half the béchamel with the pasta, then layer pasta, meat, pasta.",
      "Pour the rest of the béchamel on top and bake at 200°C until golden."
    ],
    nutrition: { calories: 690, protein: 34, carbs: 70, fat: 30, fiber: 3, sodium: 610 },
    tip: "Add the egg to the béchamel you put on top so it sets and browns nicely"
  },
  {
    name: "Chicken Shawarma",
    description: "Spiced yogurt chicken wrapped with garlic sauce and pickles",
    image: "images/shawarma.jpg",
    rating: 4.6,
    reviews: 276,
    prepTime: 70,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Levantine",
    ingredients: [
      "800g chicken thighs",
      "1/2 cup yogurt",
      "2 tbsp shawarma spices",
      "1 lemon",
      "1/2 cup garlic sauce (toum)",
      "4 Syrian breads",
      "Pickles"
    ],
    instructions: [
      "Marinate the chicken in yogurt, lemon, garlic and spices for at least an hour.",
      "Cook it in a hot pan or oven until it gets some colour.",
      "Slice the chicken into thin strips.",
      "Spread garlic sauce on the bread, add chicken and pickles.",
      "Roll it tightly and toast it on the pan for a minute."
    ],
    nutrition: { calories: 540, protein: 40, carbs: 45, fat: 21, fiber: 3, sodium: 890 },
    tip: "Marinate overnight if you can, the chicken gets much softer"
  },
  {
    name: "Margherita Pizza",
    description: "Thin crust pizza with tomato, mozzarella and fresh basil",
    image: "images/pizza.jpg",
    rating: 4.7,
    reviews: 350,
    prepTime: 20,
    cookTime: 10,
    servings: 2,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "1 ball pizza dough",
      "1/2 cup tomato sauce",
      "200g mozzarella",
      "A few basil leaves",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Heat the oven as hot as it goes.",
      "Stretch the dough into a thin circle.",
      "Spread the sauce and tear the mozzarella on top.",
      "Bake for 8 to 10 minutes until the crust is golden.",
      "Add basil and a little olive oil before serving."
    ],
    nutrition: { calories: 480, protein: 20, carbs: 58, fat: 18, fiber: 3, sodium: 750 },
    tip: "Put the tray in the oven while it heats so the bottom gets crispy"
  },
  {
    name: "Classic Beef Burger",
    description: "Juicy smashed beef patty with cheddar, lettuce and burger sauce",
    image: "images/burger.jpg",
    rating: 4.5,
    reviews: 198,
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
      "600g minced beef",
      "4 burger buns",
      "4 cheddar slices",
      "Lettuce and tomato",
      "1 onion",
      "4 tbsp burger sauce"
    ],
    instructions: [
      "Split the beef into 4 balls and press them into patties.",
      "Season with salt and pepper right before cooking.",
      "Cook on a very hot pan for 3 minutes per side, add cheese at the end.",
      "Toast the buns.",
      "Build the burger: sauce, lettuce, patty, tomato, onion."
    ],
    nutrition: { calories: 650, protein: 36, carbs: 40, fat: 38, fiber: 2, sodium: 820 },
    tip: "Only flip the patty once so it keeps a nice crust"
  },
  {
    name: "Chicken Fajitas",
    description: "Sizzling spiced chicken and peppers wrapped in warm tortillas",
    image: "images/fajitas.jpg",
    rating: 4.6,
    reviews: 167,
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g chicken breast",
      "3 bell peppers",
      "1 onion",
      "2 tbsp fajita spices",
      "6 tortillas",
      "Sour cream to serve"
    ],
    instructions: [
      "Slice the chicken, peppers and onion into strips.",
      "Toss the chicken with the spices and a bit of oil.",
      "Cook the chicken on high heat, then add the vegetables.",
      "Warm the tortillas.",
      "Fill the tortillas and top with sour cream."
    ],
    nutrition: { calories: 470, protein: 38, carbs: 42, fat: 15, fiber: 5, sodium: 700 },
    tip: "Keep the heat high so the peppers char instead of steaming"
  },
  {
    name: "Chicken Alfredo",
    description: "Fettuccine in a rich parmesan cream sauce with pan fried chicken",
    image: "images/alfredo.jpg",
    rating: 4.7,
    reviews: 289,
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "350g fettuccine",
      "2 chicken breasts",
      "1 cup cooking cream",
      "1/2 cup parmesan",
      "3 cloves garlic",
      "2 tbsp butter"
    ],
    instructions: [
      "Boil the pasta in salted water.",
      "Season and pan fry the chicken, then slice it.",
      "Melt butter, fry the garlic, then add the cream.",
      "Stir in the parmesan until the sauce is smooth.",
      "Mix the pasta with the sauce and put the chicken on top."
    ],
    nutrition: { calories: 720, protein: 45, carbs: 66, fat: 30, fiber: 3, sodium: 650 },
    tip: "Take the pan off the heat before adding parmesan so it doesn't go grainy"
  }
];
