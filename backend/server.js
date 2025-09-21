require("dotenv").config(); // Load .env first

const express = require("express");
const cors = require("cors"); // 👈 install with npm i cors
const { getMembers } = require("./membersController");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for your frontend
app.use(cors({ origin: "http://localhost:5173" })); 

// Test route
app.get("/", (req, res) => {
  res.send("Backend running with Appwrite!");
});

// Use membersController for fetching members
app.get("/api/members", getMembers); // 👈 note the /api prefix

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
