"use client";

import Sidebar from "@/components/Sidebar";

export default function Knowledge() {

  const docs = [

    "Company Information.pdf",

    "Refund Policy.pdf",

    "Warranty Policy.pdf",

    "Shipping Policy.pdf",

    "Subscription Plans.pdf",

    "Product Catalog.pdf"

  ];

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div
        className="
        flex-1
        p-10
        bg-gray-100
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-10
          "
        >
          Knowledge Base
        </h1>

        <div
          className="
          grid
          grid-cols-2
          gap-6
          "
        >

          {
            docs.map(
              (
                doc,
                i
              ) => (

                <div
                  key={i}
                  className="
                  bg-white
                  p-8
                  rounded-2xl
                  shadow
                  hover:shadow-xl
                  transition
                  "
                >

                  <h2
                    className="
                    text-xl
                    font-semibold
                    "
                  >
                    📄 {doc}
                  </h2>

                </div>
              )
            )
          }

        </div>

      </div>

    </div>
  );
}