import express from "express";
import cors from "cors";
import "./config/groq.js";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SmartChef AI API is running 🚀",
  });
});

app.use("/api/recipes", recipeRoutes);

export default app;