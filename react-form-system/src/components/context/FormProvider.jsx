import { useState } from "react";
import { FormContext } from "./FormContext";

function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    preferences: []
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
