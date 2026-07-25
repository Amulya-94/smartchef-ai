import { useState } from "react";

function IngredientInput() {
  const [ingredients, setIngredients] = useState("");

  return (
    <div>
      <h2>Ingredients</h2>

      <textarea
        rows={8}
        placeholder={`Example:
Chicken
Rice
Egg
Tomato`}
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button>Generate Recipe</button>
    </div>
  );
}

export default IngredientInput;