import axios from "axios";



export const uploadSingleMusicAPI = async (music) => {
  const formData = new FormData();
  formData.append("singletrack", music);

  return axios.post("/uploadsinglemusic", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
