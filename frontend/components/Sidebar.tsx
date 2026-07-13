export default function Sidebar() {
  return (
    <div
      className="
      w-64
      bg-gray-900
      text-white
      p-6
      flex
      flex-col
      "
    >
      <h1 className="text-2xl font-bold mb-8">
        TechMart AI
      </h1>

      <div className="space-y-5">

        <div className="bg-gray-800 p-3 rounded-lg">
          🏠 Dashboard
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          🤖 AI Support
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          📚 Knowledge Base
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          💬 Chat History
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          👤 Authentication
        </div>

      </div>

      <div className="mt-auto pt-6 text-sm text-gray-400">
        TechMart Electronics
      </div>
    </div>
  );
}