import axios from "axios";

import { API_BASE_URL } from "./config";
import { getSessionId } from "./session";

const API = axios.create({
  baseURL: API_BASE_URL,
});

export const sendMessage = async (
  message: string
) => {

  const response = await API.post(
    "/chat",
    {
      session_id: getSessionId(),
      message,
    }
  );

  return response.data;
};
