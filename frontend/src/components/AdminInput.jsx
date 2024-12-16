function AdminInput({ szdCim, id, type, placeholder, value, onChange }) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{szdCim}</span>
      <input
        id={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AdminInput;
