const { databases } = require("./appwriteClient");

// Replace with your database ID and collection ID
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID;

async function getMembers(req, res) {
  try {
    const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    // Filter based on type if you have it
    const users = result.documents.filter(doc => doc.type === "member");
    const alumni = result.documents.filter(doc => doc.type === "alumni");

    res.json({ users, alumni });
  } catch (err) {
    console.error("Error fetching members:", err.message);
    res.status(500).json({ error: "Failed to fetch members" });
  }
}

module.exports = { getMembers };
