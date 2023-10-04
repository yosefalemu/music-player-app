import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const registerUserAPI = async (user) => {
  await axios.post(`/auth/register`, user);
};

export async function loginUserAPI(user) {
  try {
    const response = await axios.post(`/auth/login`, user);
    return { response: response.data };
  } catch (error) {
    return { error: error };
  }
}
