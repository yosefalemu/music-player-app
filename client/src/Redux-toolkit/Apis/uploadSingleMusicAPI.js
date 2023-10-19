import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const uploadSingleMusicAPI = async (music) => {
  const formData = new FormData();
  formData.append("singletrack", music);

  return axios.post("/uploadsinglemusic", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
