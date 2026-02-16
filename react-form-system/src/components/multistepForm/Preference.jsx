import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Preference({ goBack }) {
  const { formData, setFormData } = useContext(FormContext);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData(prev => ({
        ...prev,
        preferences: [...prev.preferences, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        preferences: prev.preferences.filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    alert("Form Submitted! Check console.");
  };

  return (
    <>
      <h2>Preferences</h2>

      <label>
        <input
          type="checkbox"
          value="coding"
          checked={formData.preferences.includes("coding")}
          onChange={handleCheckbox}
        />
        Coding
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="music"
          checked={formData.preferences.includes("music")}
          onChange={handleCheckbox}
        />
        Music
      </label>

      <br /><br />

      <button type="button" onClick={goBack}>
        Previous
      </button>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Preference;
