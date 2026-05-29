const images = [
  "https://res.cloudinary.com/dnkfg07ov/image/upload/v1779991723/Braised_Cajun_Chicken_with_Potatoes_lqnosd.jpg",
  "https://res.cloudinary.com/dnkfg07ov/image/upload/v1779991723/download_12_chomia.jpg",
  "https://res.cloudinary.com/dnkfg07ov/image/upload/v1779991920/Pimento_Garlic_Cornish_Hen_ivszzt.jpg",
];

const recipes = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1,
  img: images[i % images.length],
  Title: `Recipe ${i + 1}`,
  Description: `Delicious recipe ${i + 1}`,
  PrepTime: `${10 + (i % 5) * 5} mins`,
  Difficulty: ["Easy", "Medium", "Hard"][i % 3],
  Servings: `${2 + (i % 4)}`,
}));

export default recipes;
