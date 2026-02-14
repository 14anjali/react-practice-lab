import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!formData.name.trim()) {
      newError.name = "name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required";
    }
    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert(`details are submitted`);
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (error[name]) {
      setError((prevError) => {
        const updateErrors = { ...prevError };
        delete updateErrors[name];
        return updateErrors;
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        Email:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        Password:{" "}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
