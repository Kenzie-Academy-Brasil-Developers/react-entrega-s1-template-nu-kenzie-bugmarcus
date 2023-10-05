import { useState } from "react";

export const Description = () => {
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log({ description });

    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default Description;
