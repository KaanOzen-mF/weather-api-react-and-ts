// TemperatureContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TemperatureContextType {
  isCelsius: boolean;
  toggleTemperature: () => void;
}

const TemperatureContext = createContext<TemperatureContextType | undefined>(
  undefined
);

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (context === undefined) {
    throw new Error("useTemperature must be used within a TemperatureProvider");
  }
  return context;
};

interface TemperatureProviderProps {
  children: ReactNode;
}

export const TemperatureProvider: React.FC<TemperatureProviderProps> = ({
  children,
}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <TemperatureContext.Provider value={{ isCelsius, toggleTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};
