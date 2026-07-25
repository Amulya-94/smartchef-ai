import ai from "../config/gemini.js";
import recipePrompt from "../prompts/recipePrompt.js";

export const generateRecipeFromAI = async (ingredients) => {
  try {
    const prompt = recipePrompt(ingredients);

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    console.log("RAW RESPONSE:");
    console.log(response);

    const text = response.text;

    console.log("TEXT:");
    console.log(text);

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (err) {
    console.error("SERVICE ERROR:");
    console.error(err);
    throw err;
  }
};