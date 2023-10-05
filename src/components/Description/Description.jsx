import { useState } from "react";

export const Description = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  console.log(title);
  return (
    <input
      type="text"
      placeholder="Título da Nota"
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};

export default Description;
