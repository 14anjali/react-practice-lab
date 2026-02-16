import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function BasicInfo({ nextStep }) {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <>
     Name: <input
        type="text"
        value={formData.name}
        placeholder="name"
        onChange={(e) =>
          setFormData(prev => ({
            ...prev,
            name: e.target.value
          }))
        }
      />

      <br />

      Email: <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData(prev => ({
            ...prev,
            email: e.target.value
          }))
        }
      />

      <br />

      <button
        type="button"
        onClick={() =>
          setFormData(prev => ({
            ...prev,
            name: "",
            email: ""
          }))
        }
      >
        Reset
      </button>

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </>
  );
}

export default BasicInfo;
