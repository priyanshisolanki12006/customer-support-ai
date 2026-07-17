import axios from "axios";

const API =
  "http://127.0.0.1:8000";

export const registerUser =
  async (
    name: string,
    email: string,
    password: string
  ) => {

    const res =
      await axios.post(
        `${API}/auth/register`,
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
        `${API}/auth/login`,
        {
          email,
          password
        }
      );

    return res.data;
};