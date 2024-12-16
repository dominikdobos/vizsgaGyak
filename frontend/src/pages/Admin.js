import { useContext } from "react";
import AdminTabla from "../components/AdminTabla";
import { ApiContext } from "../contexts/ApiContext";
import AdminUrlap from "../components/AdminUrlap";

function Admin() {
  const { szakdogaLista } = useContext(ApiContext);
  return (
    <div className="container">
      <AdminTabla szakdogaLista={szakdogaLista}></AdminTabla>
      <AdminUrlap />
    </div>
  );
}

export default Admin;
