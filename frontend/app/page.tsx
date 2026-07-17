"use client";

import ChatWindow from "../components/ChatWindow";
import { useEffect, useState } from "react";

export default function Home() {

  const [loggedIn,
  setLoggedIn] =
    useState(false);

  useEffect(() => {

    const user =
      localStorage.getItem(
        "user"
      );

    if (user) {

      setLoggedIn(
        true
      );

    }

  }, []);

  return (

    <div>

      {!loggedIn ? (

        <div
          className="
          h-screen
          flex
          flex-col
          items-center
          justify-center
          bg-gray-100
          "
        >

          <h1
            className="
            text-5xl
            font-bold
            mb-12
            "
          >
            TechMart AI
          </h1>

          <div className="flex gap-5">

            <a
              href="/login"
              className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              "
            >
              Login
            </a>

            <a
              href="/register"
              className="
              bg-green-600
              text-white
              px-8
              py-4
              rounded-xl
              "
            >
              Register
            </a>

          </div>

        </div>

      ) : (

        <ChatWindow />

      )}

    </div>

  );
}