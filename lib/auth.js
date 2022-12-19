import axios from "axios";
import { firebaseConfig } from "./firebase-config";

const apiKey = firebaseConfig.apiKey;

export async function register(data) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    data
  );

  return response.data;
}

export async function login(data) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    data
  );

  return response.data;
}

export async function getUserData(data) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    { idToken: data }
  );

  return response.data;
}

export async function postData(data) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
    data
  );

  return response.data;
}
