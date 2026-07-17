"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {

  const router = useRouter();

  const logout = () => {

    localStorage.removeItem(
      "user"
    );

    router.push(
      "/login"
    );
  };

  return (

    <div
      className="
      w-72
      bg-slate-950
      text-white
      flex
      flex-col
      p-6
      "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-10
        "
      >
        TechMart AI
      </h1>

      <div className="space-y-5">

        <Link
          href="/dashboard"
          className="
          block
          bg-slate-800
          p-5
          rounded-xl
          hover:bg-slate-700
          "
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/"
          className="
          block
          bg-slate-800
          p-5
          rounded-xl
          hover:bg-slate-700
          "
        >
          🤖 AI Support
        </Link>

        <Link
          href="/knowledge"
          className="
          block
          bg-slate-800
          p-5
          rounded-xl
          hover:bg-slate-700
          "
        >
          📚 Knowledge Base
        </Link>

        <Link
          href="/history"
          className="
          block
          bg-slate-800
          p-5
          rounded-xl
          hover:bg-slate-700
          "
        >
          💬 Chat History
        </Link>

        <Link
          href="/login"
          className="
          block
          bg-slate-800
          p-5
          rounded-xl
          hover:bg-slate-700
          "
        >
          👤 Authentication
        </Link>

      </div>

      <div className="mt-auto">

        <button
          onClick={logout}
          className="
          w-full
          bg-red-600
          hover:bg-red-700
          p-4
          rounded-xl
          mt-8
          "
        >
          Logout
        </button>

        <p
          className="
          text-gray-400
          text-sm
          mt-5
          text-center
          "
        >
          © 2026 TechMart
        </p>

      </div>

    </div>

  );
}