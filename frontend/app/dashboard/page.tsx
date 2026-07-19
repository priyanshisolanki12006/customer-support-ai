"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import { getStats, type Stats } from "@/services/dashboard";

export default function Dashboard() {

  const [stats, setStats] =
    useState<Stats | null>(null);

  const [error, setError] =
    useState(false);

  useEffect(() => {

    getStats()
      .then(setStats)
      .catch(() => setError(true));

  }, []);

  const value = (
    n: number | undefined
  ) => {

    if (error) return "—";

    return n === undefined
      ? "…"
      : n.toLocaleString();
  };

  const cards = [
    {
      label: "Total Chats",
      value: value(stats?.total_chats)
    },
    {
      label: "Knowledge Docs",
      value: value(stats?.total_docs)
    },
    {
      label: "Registered Users",
      value: value(stats?.total_users)
    }
  ];

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {
          error && (
            <p className="text-red-600 mb-6">
              Could not reach the API. Is the backend running?
            </p>
          )
        }

        <div className="grid grid-cols-3 gap-6">

          {
            cards.map(
              (card) => (

                <div
                  key={card.label}
                  className="bg-white p-8 rounded-2xl shadow"
                >

                  <h2 className="text-xl font-bold">
                    {card.label}
                  </h2>

                  <p className="text-4xl mt-5">
                    {card.value}
                  </p>

                </div>
              )
            )
          }

        </div>

      </div>

    </div>
  );
}
