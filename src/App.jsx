import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import RecipeGrid from "./components/RecipeGrid";
import Footer from "./components/Footer";

export const CATEGORIES = ["Vegetarian", "Chicken", "Dessert", "Seafood"];

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    document.getElementById("recipes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
      <main className="flex-grow">
        <Hero />
        <RecipeGrid activeCategory={activeCategory} onCategorySelect={handleCategorySelect} />
      </main>
      <Footer onCategorySelect={handleCategorySelect} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;