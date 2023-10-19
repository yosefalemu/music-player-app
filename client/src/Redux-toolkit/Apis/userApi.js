import axios from "axios";

axios.defaults.baseURL = `${process.env.BASE_URL}api/v1`;
console.log(`${process.env.BASE_URL}api/v1`);
export const createUserAPI = async (user) => axios.post("/user/register", user);

export const loginUserAPI = async (userInfo) =>
  axios.post("/user/login", userInfo);
export const verifyEmailAPI = async (params) =>
  axios.patch(`/user/${params.id}/verifyemail/${params.token}`);
export const getAllOtherUsersAPI = async (currentUserId) =>
  axios.post("/user", currentUserId);
