"use client";

import { useState } from "react";
import { loginUser } from "../../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {

  const router =
    useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {

      try {

        const res =
          await loginUser(
            email,
            password
          );

        alert(
          res.message
        );

        if (
          res.message ===
          "Login Successful"
        ) {

          localStorage.setItem(
            "user",
            email
          );

          router.push("/");
        }

      } catch {

        alert(
          "Login Failed"
        );

      }
    };

  return (

    <div
      className="
      h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      "
    >

      <div
        className="
        bg-white
        p-8
        rounded-xl
        shadow-lg
        w-96
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          mb-6
          text-center
          "
        >
          Login
        </h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
          "
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          mb-6
          rounded-lg
          "
        />

        <button
          onClick={handleLogin}
          className="
          w-full
          bg-blue-600
          text-white
          p-3
          rounded-lg
          "
        >
          Login
        </button>

        <p
          className="
          text-center
          mt-6
          text-gray-600
          "
        >
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="
          block
          text-center
          mt-3
          bg-green-600
          text-white
          p-3
          rounded-lg
          hover:bg-green-700
          "
        >
          Register
        </Link>

      </div>

    </div>
  );
}