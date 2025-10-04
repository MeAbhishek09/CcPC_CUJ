import { storage } from "../appwrite";

const BUCKET_ID = process.env.REACT_APP_BUCKET_ID;

// Upload file
export const uploadFile = async (file) => {
  const response = await storage.createFile(BUCKET_ID, "unique()", file);
  return response.$id; // store this in user profile or projects
};

// Get file URL
export const getFileURL = async (fileId) => {
  return storage.getFilePreview(BUCKET_ID, fileId);
};
