import axios from "axios";


export const uploadImageAPI = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  return axios.post("/upload", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
