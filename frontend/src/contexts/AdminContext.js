import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

export const AdminContext = createContext("");

export const AdminProvider = ({ children }) => {
  const [adat, setAdat] = useState({
    szakdoga_nev: "",
    tagokneve: "",
    githublink: "",
    oldallink: "",
  });
  const { postAdat } = useContext(ApiContext);

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
    <AdminContext.Provider value={{ adat, handleChange, handleSubmit }}>
      {children}
    </AdminContext.Provider>
  );
};
