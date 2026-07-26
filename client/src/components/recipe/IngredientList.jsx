function IngredientList({ ingredients }) {
  return (
    <div className="recipe-section">
      <h3>🥕 Ingredients</h3>

      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            ✅{" "}
            {typeof ingredient === "string"
              ? ingredient
              : `${ingredient.quantity} ${ingredient.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;