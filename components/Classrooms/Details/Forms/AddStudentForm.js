import { useState } from "react";

export const AddStudentForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Add Student</h1>
      <input
        type="text"
        name="username"
        value={values?.username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="firstname"
        name="firstname"
        value={values?.firstname}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="lastname"
        name="lastname"
        value={values?.lastname}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <button className="form-button" type="submit">
        Add Student to Classroom
      </button>
    </form>
  );
};
