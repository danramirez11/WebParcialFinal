import React, { useContext, useState } from "react";
import "./form.css";

import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";
import FormPoemContext from "../../contexts/formContext";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const [step, setStep] = useState(1);
  const poemContext = useContext(FormPoemContext)
  const navigate = useNavigate();

  const handleStep1Next = () => {
    setStep(2);
  };

  const handleStep2Next = () => {
    setStep(3);
  };

  const handleStep3Finish = () => {
    navigate('/dashboard');
  };

  return (
    <>
      {step === 1 && <PoemStepOne onNext={handleStep1Next} />}
      {step === 2 && (
        <PoemStepTwo onNext={handleStep2Next} onBack={() => setStep(1)} />
      )}
      {step === 3 && (
        <PoemStepThree onFinish={handleStep3Finish} onBack={() => setStep(2)} />
      )}
    </>
  );
};

export default Form;
