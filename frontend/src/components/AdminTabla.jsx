import { AdminContext } from "../contexts/AdminContext";
import { ApiContext } from "../contexts/ApiContext";
import AdminTablaSor from "./AdminTablaSor";
import { useContext } from "react";

function AdminTabla({ szakdogaLista }) {
  const { szakdogaTorles } = useContext(ApiContext);
  const { kivalasztottModositas } = useContext(AdminContext);

  if (!szakdogaLista || szakdogaLista.length === 0) {
    return <p>Nincs elérhető adat.</p>;
  }

  return (
    <div>
      <h1>Szakdogák listája</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Szakdolgozat címe</th>
            <th>Készítők neve</th>
            <th>GitHub link</th>
            <th>Szakdolgozat Elérhetősége</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {szakdogaLista.map((szakdoga) => (
            <AdminTablaSor
              key={szakdoga.id}
              szakdoga={szakdoga}
              szakdogaTorles={szakdogaTorles}
              kivalasztottModositas={kivalasztottModositas}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTabla;
