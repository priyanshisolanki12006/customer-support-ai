"use client";

import Sidebar from "@/components/Sidebar";

import {
  useEffect,
  useState
} from "react";

import {
  getHistory,
  clearHistory
} from "@/services/history";

export default function History() {

  const [history,
  setHistory] =
    useState<any[]>([]);

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory =
    async () => {

      try {

        const data =
          await getHistory();

        setHistory(
          data.reverse()
        );

      } catch (error) {

        console.log(
          error
        );

      }
    };

  const handleClear =
    async () => {

      const confirmDelete =
        window.confirm(
          "Clear all history?"
        );

      if (
        !confirmDelete
      )
        return;

      try {

        await clearHistory();

        setHistory([]);

      } catch (error) {

        console.log(
          error
        );
      }
    };

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div
        className="
        flex-1
        p-10
        bg-gray-100
        overflow-y-auto
        "
      >

        <div
          className="
          flex
          justify-between
          items-center
          mb-10
          "
        >

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            Chat History
          </h1>

          <button
            onClick={
              handleClear
            }
            className="
            bg-red-600
            text-white
            px-5
            py-3
            rounded-xl
            hover:bg-red-700
            "
          >
            Clear History
          </button>

        </div>

        {
          history.length ===
          0 ? (

            <div
              className="
              bg-white
              p-10
              rounded-2xl
              shadow
              text-center
              text-gray-500
              "
            >
              No chat history found.
            </div>

          ) : (

            <div
              className="
              space-y-6
              "
            >

              {
                history.map(
                  (
                    chat,
                    i
                  ) => (

                    <div
                      key={i}
                      className="
                      bg-white
                      p-6
                      rounded-2xl
                      shadow
                      "
                    >

                      <p
                        className="
                        text-blue-600
                        font-semibold
                        mb-3
                        "
                      >
                        User
                      </p>

                      <p
                        className="
                        whitespace-pre-line
                        "
                      >
                        {
                          chat.user_message
                        }
                      </p>

                      <p
                        className="
                        text-green-600
                        font-semibold
                        mt-6
                        mb-3
                        "
                      >
                        AI
                      </p>

                      <p
                        className="
                        whitespace-pre-line
                        "
                      >
                        {
                          chat.bot_response
                        }
                      </p>

                    </div>
                  )
                )
              }

            </div>

          )
        }

      </div>

    </div>
  );
}