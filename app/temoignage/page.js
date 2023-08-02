"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { deleteTemoignage } from "@/app/GlobalRedux/Features/temoignage/temoignageSlice";
import { useRouter } from "next/navigation";

function page() {
  const temoignages = useSelector((state) => state.temoignages.temoignages);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="temoignagePage">
      <div className="temoignageContainer">
        <h1 className="temoignageTitle">Temoignages</h1>
        <div className="temoignageAddButtonContainer">
          <button className="temoignageAddButton">
            <Link href="/temoignage/add" className="temoignageAddLink">
              add temoignage
            </Link>
          </button>
        </div>
        <div className="temoignagesContainer">
          {temoignages.map((temoignage) => (
            <div className="temoignage" key={temoignage.id}>
              <h3>{temoignage.name}</h3>
              <p>{temoignage.text}</p>
              <div className="temoignageButtons">
                <button
                  className="temoignageDeleteButton"
                  onClick={() => dispatch(deleteTemoignage(temoignage.id))}
                >
                  delete
                </button>
                <button
                  className="temoignagesEditButton"
                  onClick={() =>
                    router.push(`/temoignage/edit/${temoignage.id}`)
                  }
                >
                  edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
