import { useState } from "react";
import Basic_info from "./BasicInfo";
import AccountSetup from "./AcoountSetup";
import Preference from "./Preference";

function Steps() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <Basic_info
          nextStep={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <AccountSetup
          goBack={() => setStep(1)}
          nextStep={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <Preference
          goBack={() => setStep(2)}
        />
      )}
    </>
  );
}

export default Steps;
