import { Client, Databases } from "appwrite";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export { client, databases };
