import axios from "axios";

const API =
  "https://customersupportai-production-f8a4.up.railway.app";

export const getHistory =
  async () => {

    const res =
      await axios.get(
        `${API}/history`
      );

    return res.data;
};

export const clearHistory =
  async () => {

    const res =
      await axios.delete(
        `${API}/history`
      );

    return res.data;
};