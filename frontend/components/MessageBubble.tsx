interface Props {
  sender: string;
  text: string;
}

export default function MessageBubble({
  sender,
  text,
}: Props) {
  return (
    <div
      className={`
      flex mb-4
      ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }
      `}
    >
      <div
        className={`
        px-5
        py-4
        rounded-2xl
        whitespace-pre-line
        leading-6
        shadow-md
        ${
          sender === "user"
            ? "bg-blue-500 text-white max-w-xl"
            : "bg-white text-black w-full max-w-3xl"
        }
        `}
      >
        {text}
      </div>
    </div>
  );
}