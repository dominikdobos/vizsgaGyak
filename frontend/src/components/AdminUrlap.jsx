import { useContext } from "react";
import AdminInput from "./AdminInput";
import { AdminContext } from "../contexts/AdminContext";

function AdminUrlap() {
  const { adat, handleChange, handleSubmit } = useContext(AdminContext);

  return (
    <div className="mt-5">
      <h1>Szakdoga felvétel</h1>
      <form onSubmit={handleSubmit}>
        <AdminInput
          szdCim="Szakdolgozat címe"
          id="szakdoga_nev"
          type="text"
          placeholder="Cím helye"
          value={adat.szakdoga_nev}
          onChange={handleChange}
        />
        <AdminInput
          szdCim="Készítők neve"
          id="tagokneve"
          type="text"
          placeholder="Tagok helye"
          value={adat.tagokneve}
          onChange={handleChange}
        />
        <AdminInput
          szdCim="Az oldal elérhetősége"
          id="oldallink"
          type="text"
          placeholder="Webcím helye"
          value={adat.oldallink}
          onChange={handleChange}
        />
        <AdminInput
          szdCim="GitHub elérhetőség"
          id="githublink"
          type="text"
          placeholder="GitHub cím helye"
          value={adat.githublink}
          onChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">
          Felvesz
        </button>
      </form>
    </div>
  );
}

export default AdminUrlap;
