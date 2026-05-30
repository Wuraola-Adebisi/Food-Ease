import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import RecipeGrid from "./components/recipes/RecipeGrid";
import { scrollToRecipes } from "./utils/scroll";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
    scrollToRecipes();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />
      <main className="flex-grow">
        <Hero />
        <RecipeGrid
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
        />
      </main>
      <Footer onCategorySelect={handleCategorySelect} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
