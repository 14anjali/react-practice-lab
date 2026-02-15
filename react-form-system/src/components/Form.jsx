import { useState } from "react";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  
  const validate = (data) => {
    let newError = {};

    const name = data.name.trim();
    const email = data.email.trim();
    const password = data.password.trim();

    if (!name) {
      newError.name = "name is required";
    }
    if (!email) {
      newError.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Invalid email format";
    }
    if (!password) {
      newError.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newError.password =  "Password must be 8+ characters with uppercase, lowercase and number";
    }
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = validate(formData);
    setError(newError);
    if (Object.keys(newError).length === 0) {
      alert(`details are submitted`);
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setError({});
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
