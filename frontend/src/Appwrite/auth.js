import { account } from "./appwrite";

// Sign up user
export const signupUser = async (email, password, name) => {
  return await account.create("unique()", email, password, name);
};

// Login user
export const loginUser = async (email, password) => {
  return await account.createEmailSession(email, password);
};

// Logout user
export const logoutUser = async () => {
  return await account.deleteSession("current");
};

// Get current logged-in user
export const getCurrentUser = async () => {
  return await account.get();
};
