import { databases } from "./appwrite";

const DB_ID = process.env.REACT_APP_DB_ID;
const USERS_COLLECTION_ID = process.env.REACT_APP_USERS_COLLECTION_ID;
const PROJECT_COLLECTION_ID = process.env.REACT_APP_PROJECT_COLLECTION_ID;

// Fetch all users
export const getUsers = async () => {
  const response = await databases.listDocuments(DB_ID, USERS_COLLECTION_ID);
  return response.documents;
};

// Fetch single user profile
export const getUserProfile = async (userId) => {
  const response = await databases.getDocument(DB_ID, USERS_COLLECTION_ID, userId);
  return response;
};

// Fetch user projects
export const getUserProjects = async (userId) => {
  const response = await databases.listDocuments(DB_ID, PROJECT_COLLECTION_ID, [
    // filter projects by userId
    {
      attribute: "userId",
      operator: "=",
      value: userId,
    },
  ]);
  return response.documents;
};
