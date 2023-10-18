import axios from "axios";

axios.defaults.baseURL = `${process.env.BASE_URL}api/v1`;

export const uploadAlbumImageAPI = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  return axios.post("/uploadalbumimage", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
