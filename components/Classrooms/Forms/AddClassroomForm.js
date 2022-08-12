import { useState } from "react";

export const AddClassroomForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Create Classroom</h1>
      <input
        type="text"
        name="name"
        value={value}
        onChange={handleChange}
        placeholder="Classroom Name"
      />
      <button className="form-button" type="submit">
        Create Classroom
      </button>
    </form>
  );
};
