import { useContext } from "react";
import AdminTabla from "../components/AdminTabla";
import { ApiContext } from "../contexts/ApiContext";
import AdminUrlap from "../components/AdminUrlap";
import { AdminContext } from "../contexts/AdminContext";
import AdminModosit from "../components/AdminModosit";

function Admin() {
  const { szakdogaLista } = useContext(ApiContext);
  const { modosit } = useContext(AdminContext);
  return (
    <div className="container">
      <AdminTabla szakdogaLista={szakdogaLista}></AdminTabla>
      {modosit && <AdminModosit />}
      <AdminUrlap />
    </div>
  );
}

export default Admin;
