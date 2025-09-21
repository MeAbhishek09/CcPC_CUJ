const { Client, Databases } = require("node-appwrite");

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // From .env
  .setProject(process.env.APPWRITE_PROJECT_ID) // From .env
  .setKey(process.env.APPWRITE_API_KEY);       // From .env

const databases = new Databases(client);

module.exports = { client, databases };
