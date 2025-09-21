import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getMembers } from "./membersController.js";

dotenv.config(); // Load .env

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/members", async (req, res) => {
  const members = await getMembers();
  res.json(members);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
