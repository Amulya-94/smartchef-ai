import { useState } from "react";

import Header from "./components/layout/Header";
import IngredientInput from "./components/input/IngredientInput";
import EmptyState from "./components/common/EmptyState";
import RecipeCard from "./components/recipe/RecipeCard";

function App() {
  const [recipe, setRecipe] = useState(null);

  return (
    <main className="app">
      <div className="container">
        <Header />

        <div className="content">
          <IngredientInput onRecipeGenerated={setRecipe} />

          {recipe ? (
            <RecipeCard recipe={recipe} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;