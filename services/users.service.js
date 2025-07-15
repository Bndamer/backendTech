import { getUserByEmail, createUser } from "../models/users.model.js";

export { findUserByEmail,registerUser}

 const findUserByEmail = async (email) => {
  return await getUserByEmail(email);
};

const registerUser = async (userData) => {
  return await createUser(userData);
};