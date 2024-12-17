import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

export const AdminContext = createContext("");

export const AdminProvider = ({ children }) => {
  const { postAdat, updateAdat } = useContext(ApiContext);
  const [adat, setAdat] = useState({
    szakdoga_nev: "",
    tagokneve: "",
    githublink: "",
    oldallink: "",
  });
  const [modosit, setModosit] = useState(false);
  const [modositId, setModositId] = useState();

  function kivalasztottModositas(id) {
    setModosit(() => true);
    setModositId(() => id);
  }

  function handleModosit(e) {
    e.preventDefault();
    console.log(adat);
    updateAdat(`/szakdogak/${modositId}`, adat);
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setAdat((prevAdat) => ({
      ...prevAdat,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(adat);
    postAdat("/szakdogak", adat);
  }

  return (
    <AdminContext.Provider
      value={{
        adat,
        handleChange,
        handleSubmit,
        handleModosit,
        modosit,
        kivalasztottModositas,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
