import axios from "axios";

axios.defaults.baseURL = `${process.env.BASE_URL}api/v1`;

export const uploadMultipleMusicAPI = async (musicFiles) => {
  const formData = new FormData();
  for (const file of musicFiles) {
    formData.append("musicFiles", file);
  }

  return axios.post("/multiplemusicupload", formData, {
    headers: {
      "Content-Type": `multipart/form-data; `,
    },
  });
};
