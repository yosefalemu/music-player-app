import axios from "axios";



export const uploadAlbumImageAPI = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  return axios.post("/uploadalbumimage", formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    },
  });
};
