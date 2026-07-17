import axios from "axios";

const API =
  "http://127.0.0.1:8000";

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