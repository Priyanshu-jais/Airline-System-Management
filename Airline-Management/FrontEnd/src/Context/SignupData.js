
import React, { createContext, useContext, useState } from "react";

const signupDataId = createContext();

export const SignupDataIdProvider = ({ children }) => {
    const [formData, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "",
      });
  return (
    <signupDataId.Provider value={{ formData, setFormdata }}>
      {children}
    </signupDataId.Provider>
  );
};

export const SignupDataID = () => {
  const context = useContext(signupDataId);
  if (!context) {
   
    throw new Error("SignupDataID must be used within a SignupDataIdProvider");
  }
  return context;
};

