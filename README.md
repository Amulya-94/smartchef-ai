# SmartChef AI

An AI-powered recipe generation web application that transforms a list of available ingredients into a structured, interactive recipe. Built with **React**, **Node.js**, **Express**, and the **Groq Llama 3.3 70B Versatile** language model, SmartChef AI focuses on converting unpredictable AI responses into a reliable and user-friendly experience.

---

## Overview

SmartChef AI helps users make the most of the ingredients they already have by generating personalized recipes using a Large Language Model (LLM). Instead of displaying raw AI-generated text, the application parses structured JSON and renders it as interactive React components.

This project was developed as part of a **Frontend Internship Assignment**, with an emphasis on structured AI output, robust error handling, and interactive user experience.

---

## Features

- AI-powered recipe generation
- Free-form ingredient input
- Structured JSON parsing and validation
- Ingredient quantities and serving information
- Step-by-step interactive cooking checklist
- Cooking progress tracker
- Ingredient substitution suggestions
- Loading, error, and empty states
- Retry mechanism for failed requests
- Protection against stale API responses
- Responsive design for desktop and mobile devices

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Hot Toast
- CSS3

### Backend
- Node.js
- Express.js

### AI Integration
- Groq API
- Llama 3.3 70B Versatile

---

## Project Structure

```text
smartchef-ai/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── screenshots/
│
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Amulya-94/smartchef-ai.git
cd smartchef-ai
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` directory.

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

---

## Running the Application

### Start the Backend

```bash
cd server
npm run dev
```

### Start the Frontend

```bash
cd client
npm run dev
```

Open the application in your browser:

```
http://localhost:5173
```

---

## AI Integration

SmartChef AI uses the **Groq API** with the **Llama 3.3 70B Versatile** language model to generate structured recipe data.

The AI generates:

- Recipe title
- Recipe description
- Preparation time
- Cooking time
- Serving size
- Ingredient quantities
- Step-by-step cooking instructions
- Ingredient substitution suggestions

The backend validates and parses the AI-generated JSON before sending it to the frontend, ensuring reliable rendering even when the model returns malformed or unexpected responses.

---

## Error Handling & Reliability

The application is designed to handle unreliable AI responses gracefully.

Implemented safeguards include:

- Validation of AI-generated JSON
- Detection of malformed or invalid responses
- Handling of empty responses
- Network and API error handling
- Retry functionality
- Loading indicators
- User-friendly error messages
- Protection against stale API responses to prevent outdated results from replacing newer ones

---

## Example

### Input

```text
Chicken
Rice
Onion
Tomato
Garlic
```

### Output

The generated recipe includes:

- Recipe title
- Description
- Preparation time
- Cooking time
- Serving size
- Ingredient quantities
- Step-by-step cooking instructions
- Ingredient substitution suggestions

---

## Screenshots

### Home Page

![Home](screenshots/home.png)

### Generated Recipe

![Generated Recipe](screenshots/recipe.png)

### Progress Tracker

![Progress Tracker](screenshots/progress.png)

---

## AI Development Assistance

AI-assisted development tools were used to:

- Brainstorm the application architecture
- Refine prompts for structured JSON generation
- Debug React and Express implementation issues
- Improve error handling strategies
- Review and refine project documentation

All implementation, integration, testing, debugging, and final development decisions were completed and verified manually.

---

## Known Limitations

- Requires an active internet connection.
- Recipe quality depends on the AI model's responses.
- Generates one recipe per request.
- Nutritional information is not currently provided.
- AI responses may occasionally suggest common pantry ingredients when appropriate.

---

## Future Enhancements

- Nutritional information
- Recipe image generation
- Save favourite recipes
- Shopping list generation
- Cuisine-based filtering
- Dietary preference support
- Recipe history
- Dark mode

---

## Time Spent

Approximate development time: **8 hours**

| Task | Time |
|------|------:|
| Project setup | 45 minutes |
| Frontend development | 2.5 hours |
| Backend & AI integration | 2 hours |
| Error handling & validation | 1 hour |
| UI improvements | 45 minutes |
| Testing | 30 minutes |
| Documentation | 30 minutes |

---

## License

This project was developed for educational purposes as part of a Frontend Internship Assignment.

---

## Author

**Amulya Jonnalagadda**

B.Tech – Computer Science and Engineering

SRM University-AP