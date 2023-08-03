"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addTemoignage } from "@/app/GlobalRedux/Features/temoignage/temoignageSlice";
///
function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !text) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    dispatch(
      addTemoignage({
        name,
        email,
        text,
      })
    );

    setName("");
    setEmail("");
    setText("");

    router.push("/temoignage");
  };

  return (
    <div className="addTemoignages">
      <div className="addTemoignagesContainer">
        <h1>Temoignages</h1>
        <form className="addTemoignagesForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="error">{error}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {error && <p className="error">{error}</p>}

          <button type="submit" className="addTemoignagesButton">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
