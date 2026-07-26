import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/recipes",
});

export const generateRecipe = async (ingredients) => {
  const response = await API.post("/", {
    ingredients,
  });

  return response.data;
};

export default API;