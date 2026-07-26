import { useState, useRef } from "react";
import { generateRecipe } from "../../services/api";
import Loader from "../common/Loader";
import toast from "react-hot-toast";

function IngredientInput({ onRecipeGenerated }) {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Prevent stale responses
  const requestIdRef = useRef(0);

  const handleGenerate = async () => {
    // Generate a unique request ID
    const currentRequestId = ++requestIdRef.current;

    try {
      setLoading(true);
      setError("");

      // Convert textarea into an array of ingredients
      const ingredientList = ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      const data = await generateRecipe(ingredientList);

      // Ignore stale responses
      if (currentRequestId !== requestIdRef.current) {
        return;
      }

      onRecipeGenerated(data.recipe);

      toast.success("Recipe generated successfully!");
    } catch (error) {
      // Ignore stale errors
      if (currentRequestId !== requestIdRef.current) {
        return;
      }

      console.error(error);

      if (error.response?.status === 429) {
        setError("AI service is busy. Please try again in a few moments.");
      } else {
        setError(
          error.response?.data?.message ||
            "Failed to generate recipe. Please try again."
        );
      }

      toast.error("Failed to generate recipe.");
    } finally {
      // Only stop loading for the latest request
      if (currentRequestId === requestIdRef.current) {
        setLoading(false);
      }
    }
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

      {error && (
        <div className="error-box">
          <p>{error}</p>

          <button
            className="retry-button"
            onClick={handleGenerate}
          >
            Try Again
          </button>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <button
          className="button"
          onClick={handleGenerate}
          disabled={!ingredients.trim() || loading}
        >
          Generate Recipe
        </button>
      )}
    </section>
  );
}

export default IngredientInput;