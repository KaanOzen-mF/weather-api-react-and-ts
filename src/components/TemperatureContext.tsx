// TemperatureContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context data for temperature settings
interface TemperatureContextType {
  isCelsius: boolean; // Indicates if the temperature is in Celsius
  toggleTemperature: () => void; // Function to toggle between Celsius and Fahrenheit
}

// Create a context for temperature settings
const TemperatureContext = createContext<TemperatureContextType | undefined>(
  undefined
);

// Custom hook to use the temperature context
export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  // Throw an error if the hook is used outside of a TemperatureProvider
  if (context === undefined) {
    throw new Error("useTemperature must be used within a TemperatureProvider");
  }
  return context; // Return the context data
};

// Props for the TemperatureProvider component
interface TemperatureProviderProps {
  children: ReactNode; // The child components that will have access to the context
}

// Provider component to wrap around components that need access to temperature settings
export const TemperatureProvider: React.FC<TemperatureProviderProps> = ({
  children,
}) => {
  const [isCelsius, setIsCelsius] = useState(true); // State to store temperature unit, default is Celsius

  // Function to toggle the temperature unit
  const toggleTemperature = () => {
    setIsCelsius(!isCelsius); // Toggle the state
  };

  // Provide the context value to children components
  return (
    <TemperatureContext.Provider value={{ isCelsius, toggleTemperature }}>
      {children} {/* Render child components */}
    </TemperatureContext.Provider>
  );
};
