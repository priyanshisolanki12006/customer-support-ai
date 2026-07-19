import axios from "axios";

import { API_BASE_URL } from "./config";

export type Stats = {
  total_chats: number;
  total_users: number;
  total_docs: number;
};

export const getStats =
  async (): Promise<Stats> => {

    const res =
      await axios.get(
        `${API_BASE_URL}/dashboard/stats`
      );

    return res.data;
};
