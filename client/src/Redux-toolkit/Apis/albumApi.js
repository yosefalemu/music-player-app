import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const getAllAlbumsAPI = async () => axios.get("/album");
export const getSingleAlbum = async (id) => axios.get(`/album/${id}`);
export const createAlbumAPI = async (album) => axios.post("/album", album);
export const editAlbumAPI = async ({ id, newAlbum }) =>
  axios.patch(`/album/${id}`, newAlbum);
export const deleteAlbumAPI = async (id) => axios.delete(`/album/${id}`);
