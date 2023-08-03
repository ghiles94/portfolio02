"use client";

import { useSelector, useDispatch } from "react-redux";
import { updateTemoignage } from "@/app/GlobalRedux/Features/temoignage/temoignageSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page({ params: { id } }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  let temoignage = useSelector((state) => state.temoignages.temoignages);

  temoignage = temoignage.find((temoignage) => temoignage.id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTemoignage({
        id: id,
        name: name ? name : temoignage.name,
        text: text ? text : temoignage.text,
      })
    );
    router.push("/temoignage");
  };

  return (
    <div className="temoignageEditPage">
      <div className="temoignageEditCont">
        <h1>edit {temoignage.name}</h1>
        <form className="temoignageEditForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={temoignage.name}
            className="temoignageEditInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={temoignage.text}
            className="temoignageEditInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="temoignageEditButton">edit</button>
        </form>
      </div>
    </div>
  );
}

export default page;
