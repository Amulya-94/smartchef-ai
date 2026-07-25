import { useState } from "react";

function IngredientInput() {
  const [ingredients, setIngredients] = useState("");

  const handleGenerate = () => {
    console.log(ingredients);
  };

  return (
    <section className="card">
      <h2>🥗 Ingredients</h2>

      <p className="section-description">
        Enter one ingredient per line to generate an AI-powered recipe.
      </p>

      <textarea
        className="textarea"
        rows={8}
        placeholder={`Example:
Chicken
Rice
Egg
Tomato
Onion`}
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button
        className="button"
        onClick={handleGenerate}
        disabled={!ingredients.trim()}
      >
        Generate Recipe
      </button>
    </section>
  );
}

export default IngredientInput;