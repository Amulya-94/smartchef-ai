import axios from "axios";

const API = axios.create({
  baseURL: "https://smartchef-ai-z2ra.onrender.com/api/recipes",
});

export const generateRecipe = async (ingredients) => {
  const response = await API.post("/", {
    ingredients,
  });

  return response.data;
};

export default API;