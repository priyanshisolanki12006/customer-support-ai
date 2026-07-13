import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div>

      <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">

        <a
          href="/login"
          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-700
          "
        >
          Login
        </a>

        <a
          href="/register"
          className="
          bg-green-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-green-700
          "
        >
          Register
        </a>

      </div>

      <ChatWindow />

    </div>
  );
}