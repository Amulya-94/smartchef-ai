import ai from "../config/groq.js";
import recipePrompt from "../prompts/recipePrompt.js";

export const generateRecipeFromAI = async (ingredients) => {
  try {
    const prompt = recipePrompt(ingredients);

    const response = await ai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: {
        type: "json_object",
      },
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;

    if (!content || !content.trim()) {
      throw new Error("The AI returned an empty response.");
    }

    const cleanContent = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
let recipe;

try {
  recipe = JSON.parse(cleanContent);
} catch {
  throw new Error("The AI returned malformed JSON.");
}

if (
  !recipe ||
  typeof recipe.title !== "string" ||
  !Array.isArray(recipe.ingredients) ||
  !Array.isArray(recipe.steps)
) {
  throw new Error("The AI returned an invalid recipe format.");
}

console.log("========== AI Recipe ==========");
console.log(JSON.stringify(recipe, null, 2));
console.log("===============================");

return recipe;
  } catch (err) {
    console.error("❌ AI ERROR:");
    console.error(err);

    if (err.response) {
      console.error(err.response.data);
    }

    throw err;
  }
};