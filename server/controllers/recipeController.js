export const generateRecipe = async (req, res) => {
  try {
    console.log("📥 Request Body:", req.body);

    const { ingredients } = req.body;

    res.status(200).json({
      success: true,
      message: "Recipe endpoint is working!",
      data: {
        ingredients,
      },
    });
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};