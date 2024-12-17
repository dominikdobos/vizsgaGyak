function AdminTablaSor({ szakdoga, szakdogaTorles, kivalasztottModositas }) {
  return (
    <tr>
      <td>{szakdoga.szakdoga_nev}</td>
      <td>{szakdoga.tagokneve}</td>
      <td>{szakdoga.githublink}</td>
      <td>{szakdoga.oldallink}</td>
      <td
        onClick={() => kivalasztottModositas(szakdoga.id)}
        style={{ cursor: "pointer" }}
      >
        🖋️
      </td>
      <td
        onClick={() => szakdogaTorles(szakdoga.id)}
        style={{ cursor: "pointer" }}
      >
        ❌
      </td>
    </tr>
  );
}

export default AdminTablaSor;
