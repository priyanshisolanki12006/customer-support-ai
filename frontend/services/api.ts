import axios from "axios";

const API = axios.create({
  baseURL: "https://customersupportai-production-f8a4.up.railway.app",
});

export const sendMessage = async (
  message: string
) => {

  const response = await API.post(
    "/chat",
    {
      session_id: "1",
      message,
    }
  );

  return response.data;
};