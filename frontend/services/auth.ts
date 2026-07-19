import axios from "axios";

import { API_BASE_URL } from "./config";

export const registerUser =
  async (
    name: string,
    email: string,
    password: string
  ) => {

    const res =
      await axios.post(
        `${API_BASE_URL}/auth/register`,
        {
          name,
          email,
          password
        }
      );

    return res.data;
};

export const loginUser =
  async (
    email: string,
    password: string
  ) => {

    const res =
      await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          email,
          password
        }
      );

    return res.data;
};
