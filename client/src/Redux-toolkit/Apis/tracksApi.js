import axios from "axios";



export const getAllTracksAPI = async () => axios.get("/track");
export const getSingleTrackAPI = async (id) => axios.get(`/track/${id}`);
export const createTrackAPI = async (track) => axios.post("/track", track);
export const updateTrackAPI = async ({ id, track }) =>
  axios.patch(`/track/${id}`, track);
export const deleteTrackAPI = async (id) => axios.delete(`/track/${id}`);
