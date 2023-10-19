import axios from "axios";

axios.defaults.baseURL = `${process.env.BASE_URL}api/v1`;

export const uploadSingleMusicAPI = async (music) => {
  const formData = new FormData();
  formData.append("singletrack", music);

  return axios.post("/uploadsinglemusic", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
