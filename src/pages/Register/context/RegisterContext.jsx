import React, { createContext, useState } from "react";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [activeStep, setActiveIndex] = useState(0);

  return (
    <RegisterContext.Provider
      value={{
        isLoading,
        setLoading,
        activeStep,
        setActiveIndex,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
