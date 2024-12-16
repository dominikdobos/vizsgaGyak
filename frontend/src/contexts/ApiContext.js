import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [szakdogaLista, setSzakdogaLista] = useState([]);

  const getAdat = async (vegpont, callbackfv) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log(response.data);
      callbackfv(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok küldésekor.");
    } finally {
    }
  };

  const updateAdat = async (vegpont) => {
    try {
      const response = await myAxios.put(vegpont);
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok frissítésekor.");
    } finally {
    }
  };

  const deleteAdat = async (vegpont) => {
    // saját axios példányt használjuk
    try {
      const response = await myAxios.delete(vegpont);
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok küldésekor.");
    } finally {
    }
  };

  //   function torles(id) {
  //     setTermekLista(termekLista.filter((listaTargy) => id !== listaTargy.id));
  //     deleteAdat(`/products/${id}`);
  //   }

  useEffect(() => {
    getAdat("/szakdogak", setSzakdogaLista);
  }, []);

  return (
    <ApiContext.Provider value={{ postAdat, szakdogaLista, updateAdat }}>
      {children}
    </ApiContext.Provider>
  );
};
