import AdminTablaSor from "./AdminTablaSor";

function AdminTabla({ szakdogaLista }) {
  if (!szakdogaLista || szakdogaLista.length === 0) {
    return <p>Nincs elérhető adat.</p>;
  }
  return (
    <>
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
            <AdminTablaSor key={szakdoga.id} szakdoga={szakdoga} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminTabla;
