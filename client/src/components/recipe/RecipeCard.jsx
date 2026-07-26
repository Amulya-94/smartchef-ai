import { useState, useRef } from "react";
import IngredientList from "./IngredientList";
import StepChecklist from "./StepChecklist";
import ProgressBar from "./ProgressBar";

function RecipeCard({ recipe }) {
  const [completedSteps, setCompletedSteps] = useState(0);
  return (
    <section className="card recipe-card">
      <h2 className="recipe-title">🍲 {recipe.title}</h2>

      <p className="recipe-description">
        {recipe.description}
      </p>

      <div className="recipe-meta">
        <div className="meta-item">
          <span>🍽</span>
          <p>{recipe.servings} Servings</p>
        </div>

        <div className="meta-item">
          <span>⏱</span>
          <p>{recipe.prepTime}</p>
        </div>

        <div className="meta-item">
          <span>🔥</span>
          <p>{recipe.cookTime}</p>
        </div>
      </div>
<ProgressBar
  completed={completedSteps}
  total={recipe?.steps?.length || 0}
/>
      <IngredientList ingredients={recipe.ingredients} />

     <StepChecklist
     key={recipe.title}
  steps={recipe?.steps || []}
  onProgressChange={setCompletedSteps}
/>
    </section>
  );
}

export default RecipeCard;