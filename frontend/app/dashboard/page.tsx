import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold">
              Total Chats
            </h2>

            <p className="text-4xl mt-5">
              25
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold">
              Knowledge Docs
            </h2>

            <p className="text-4xl mt-5">
              6
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold">
              Active Users
            </h2>

            <p className="text-4xl mt-5">
              1
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}