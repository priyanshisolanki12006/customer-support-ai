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
        p-3 rounded-lg my-2 max-w-2xl
        ${
          sender === "user"
            ? "bg-blue-500 text-white ml-auto"
            : "bg-gray-200 text-black"
        }
      `}
    >
      {text}
    </div>
  );
}