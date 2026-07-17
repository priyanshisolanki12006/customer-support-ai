"use client";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "../../services/auth";
import { useRouter } from "next/navigation";

export default function Register() {

  const router =
    useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async () => {

      try {

        const res =
          await registerUser(
            name,
            email,
            password
          );

        alert(
          res.message
        );

        if (
          res.message ===
          "Registered successfully"
        ) {

          router.push(
            "/login"
          );
        }

      } catch {

        alert(
          "Registration Failed"
        );

      }
    };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
          className="w-full border p-3 mb-4 rounded-lg"
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
          className="w-full border p-3 mb-6 rounded-lg"
        />

        <button
  onClick={
    handleRegister
  }
  className="
    w-full
    bg-blue-600
    text-white
    p-3
    rounded-lg
  "
>
  Register
</button>

<p
  className="
  text-center
  mt-6
  text-gray-600
  "
>
  Already have an account?
</p>

<Link
  href="/login"
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
  Login
</Link>

</div>

</div>
  );
}