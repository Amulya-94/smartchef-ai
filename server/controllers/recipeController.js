import { generateRecipeFromAI } from "../services/recipeService.js";

export const generateRecipe = async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Ingredients are required.",
      });
    }

    const recipe = await generateRecipeFromAI(ingredients);

    return res.status(200).json({
      success: true,
      recipe,
    });

  } catch (error) {
    console.error("Gemini Error:", error);
    console.error("Error Message:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to generate recipe.",
    });
  }
};