import ReactMarkdown from "react-markdown";

interface Props {
  sender: string;
  text: string;
}

export default function MessageBubble({
  sender,
  text,
}: Props) {

  const isUser = sender === "user";

  return (
    <div
      className={`
      flex mb-4
      ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
        px-5
        py-4
        rounded-2xl
        break-words
        leading-6
        shadow-md
        ${
          isUser
            ? "bg-blue-500 text-white max-w-xl whitespace-pre-line"
            : "bg-white text-black w-full max-w-3xl"
        }
        `}
      >
        {
          isUser
            ? text
            : (
              // The model replies in light markdown; render it rather than
              // showing raw ** and - characters to the customer.
              <div
                className="
                space-y-3
                [&_ul]:list-disc
                [&_ul]:pl-5
                [&_ul]:space-y-1
                [&_ol]:list-decimal
                [&_ol]:pl-5
                [&_ol]:space-y-1
                [&_strong]:font-semibold
                [&_a]:text-blue-600
                [&_a]:underline
                "
              >
                <ReactMarkdown>
                  {text}
                </ReactMarkdown>
              </div>
            )
        }
      </div>
    </div>
  );
}
