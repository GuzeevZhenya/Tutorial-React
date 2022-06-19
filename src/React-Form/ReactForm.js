import React, { useState } from "react";
import { PersonalInfoForm } from "./Forms/PersonalInfoForm";
import { AdressForm } from "./Forms/AdressInfo";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Result } from "./Forms/Result";
export const ReactForm = () => {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();
  const nextStep = (name) => {
    navigate(`/${name}`);
  };
  console.log(formValues);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfoForm
              nextStep={nextStep}
              setFormValues={setFormValues}
            />
          }
        />
        <Route
          path="/adress"
          element={
            <AdressForm setFormValues={setFormValues} nextStep={nextStep} />
          }
        />
        <Route path="/result" element={<Result formValues={formValues} />} />
      </Routes>
    </div>
  );
};
