import axios from "axios";

import { API_BASE_URL } from "./config";
import { getSessionId } from "./session";

export const getHistory =
  async () => {

    const res =
      await axios.get(
        `${API_BASE_URL}/history`,
        {
          params: {
            session_id: getSessionId()
          }
        }
      );

    return res.data;
};

export const clearHistory =
  async () => {

    const res =
      await axios.delete(
        `${API_BASE_URL}/history`,
        {
          params: {
            session_id: getSessionId()
          }
        }
      );

    return res.data;
};
