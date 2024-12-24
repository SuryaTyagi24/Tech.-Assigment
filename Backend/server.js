import express from "express";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

// Dummy JSON data
const candidates = [
  {
    id: 1,
    name: "John Doe",
    skills: ["JavaScript", "React", "Node.js"],
    experience: "5 years"
  },
  {
    id: 2,
    name: "Jane Smith",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: "4 years"
  },
  {
    id: 3,
    name: "Mike Johnson",
    skills: ["Java", "Spring Boot", "MySQL"],
    experience: "6 years"
  },
  {
    id: 4,
    name: "Sarah Williams",
    skills: ["Angular", "TypeScript", "MongoDB"],
    experience: "3 years"
  }
];

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Candidates API!");
});

app.get("/candidates", (req, res) => {
  res.json(candidates);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
