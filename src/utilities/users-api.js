import sendRequest from "./send-request";
const BASE_URL = "/api/users";

// /api/users/
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

// /api/users/login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
