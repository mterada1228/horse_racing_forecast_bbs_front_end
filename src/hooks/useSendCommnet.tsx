import { useState } from "react";

const useSendComment = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const send = () => {
    console.log(`{ name: ${name}, description: ${description} }`);
  };

  return {
    setName,
    setDescription,
    send,
  };
};

export default useSendComment;
