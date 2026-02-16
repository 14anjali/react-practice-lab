import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function AccountSetup({ goBack, nextStep }) {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <>
      <h2>Account Setup</h2>

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData(prev => ({
            ...prev,
            password: e.target.value
          }))
        }
      />
<br />
      <select
        value={formData.role}
        onChange={(e) =>
          setFormData(prev => ({
            ...prev,
            role: e.target.value
          }))
        }
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <br /><br />

      <button type="button" onClick={goBack}>
        Previous
      </button>

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </>
  );
}

export default AccountSetup;
