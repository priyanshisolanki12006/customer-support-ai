"use client";

import Sidebar from "@/components/Sidebar";

export default function Knowledge() {

  // Mirrors the PDFs in knowledge_base/ that are indexed for retrieval.
  const docs = [

    "Company Information.pdf",

    "FAQ.pdf",

    "Installation Guide.pdf",

    "Pricing.pdf",

    "Products.pdf",

    "Refund Policy.pdf",

    "Shipping Policy.pdf",

    "User Manual.pdf",

    "Warranty.pdf"

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