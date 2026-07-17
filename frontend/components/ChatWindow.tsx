"use client";

import {
  useState,
  useEffect,
  useRef
} from "react";

import MessageBubble from "./MessageBubble";
import { sendMessage } from "../services/api";
import { getHistory } from "../services/history";
import Sidebar from "./Sidebar";

export default function ChatWindow() {

  const [message, setMessage] =
    useState("");

  const [messages,
  setMessages] =
    useState<any[]>([
      {
        sender: "bot",
        text:
          "Hello 👋 Welcome to TechMart AI Support. How may I help you today?"
      }
    ]);

  const [loading,
  setLoading] =
    useState(false);

  const bottomRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {

    loadHistory();

  }, []);

  useEffect(() => {

    bottomRef.current
      ?.scrollIntoView({
        behavior: "smooth"
      });

  }, [messages]);

  const loadHistory =
    async () => {

      try {

        const chats =
          await getHistory();

        const formatted =
          chats.flatMap(
            (chat: any) => [

              {
                sender: "user",
                text:
                  chat.user_message
              },

              {
                sender: "bot",
                text:
                  chat.bot_response
              }

            ]
          );

        setMessages([
          {
            sender: "bot",
            text:
              "Hello 👋 Welcome to TechMart AI Support. How may I help you today?"
          },

          ...formatted
        ]);

      } catch (error) {

        console.log(
          "History Error",
          error
        );

      }
    };

  const handleSend =
    async () => {

      if (
        !message.trim()
      )
        return;

      const current =
        message;

      setMessages(
        (prev) => [

          ...prev,

          {
            sender: "user",
            text: current
          }

        ]
      );

      setMessage("");

      setLoading(true);

      try {

        const response =
          await sendMessage(
            current
          );

        setMessages(
          (prev) => [

            ...prev,

            {
              sender: "bot",
              text:
                response.response
            }

          ]
        );

      } catch (error) {

        setMessages(
          (prev) => [

            ...prev,

            {
              sender: "bot",
              text:
                "Server Error"
            }

          ]
        );

        console.log(
          error
        );
      }

      setLoading(false);
    };

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div
        className="
        flex-1
        flex
        flex-col
        bg-gray-100
        "
      >

        <div
          className="
          bg-blue-600
          text-white
          p-5
          text-2xl
          font-bold
          "
        >
          🤖 TechMart AI Customer Support
        </div>

        <div
          className="
          flex-1
          overflow-y-auto
          flex
          justify-center
          "
        >

          <div
            className="
            w-full
            max-w-6xl
            p-4
            "
          >

            {
              messages.map(
                (
                  m,
                  i
                ) => (

                  <MessageBubble
                    key={i}
                    sender={
                      m.sender
                    }
                    text={
                      m.text
                    }
                  />

                )
              )
            }

            {
              loading && (

                <p className="text-gray-500">

                  AI is typing...

                </p>

              )
            }

            <div
              ref={bottomRef}
            />

          </div>

        </div>

        <div
          className="
          bg-white
          border-t
          flex
          justify-center
          p-4
          "
        >

          <div
            className="
            w-full
            max-w-6xl
            flex
            gap-3
            "
          >

            <input
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              placeholder="Ask your question..."
              className="
              flex-1
              border
              rounded-lg
              p-3
              "
            />

            <button
              onClick={
                handleSend
              }
              className="
              bg-blue-600
              text-white
              px-6
              rounded-lg
              hover:bg-blue-700
              "
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}