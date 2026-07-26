import { generateRecipeFromAI } from "../services/recipeService.js";

export const generateRecipe = async (req, res) => {
  const { ingredients } = req.body;

  try {
    const recipe = await generateRecipeFromAI(ingredients);

    return res.json({
      success: true,
      recipe,
    });

  } catch (error) {
    console.error(error);

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        message: "AI service limit reached. Please try again later."
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to generate recipe."
    });
  }
};