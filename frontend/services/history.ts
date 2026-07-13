import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const getHistory = async () => {
  const response = await API.get(
    "/history/1"
  );

  return response.data;
};