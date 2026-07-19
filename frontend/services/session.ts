const SESSION_KEY = "session_id";

// Every browser gets its own id so one visitor's chat history is not served
// to everyone else. This is a convenience, not a security boundary — the API
// still trusts whatever session_id it is given.
export const getSessionId = (): string => {

  if (typeof window === "undefined") {
    return "server";
  }

  let id = localStorage.getItem(
    SESSION_KEY
  );

  if (!id) {

    id = crypto.randomUUID();

    localStorage.setItem(
      SESSION_KEY,
      id
    );
  }

  return id;
};
