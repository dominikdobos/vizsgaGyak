function AdminTablaSor({ szakdoga }) {
  return (
    <tr>
      <td>{szakdoga.szakdoga_nev}</td>
      <td>{szakdoga.tagokneve}</td>
      <td>{szakdoga.githublink}</td>
      <td>{szakdoga.oldallink}</td>
      <td>🖋️</td>
      <td>❌</td>
    </tr>
  );
}

export default AdminTablaSor;
