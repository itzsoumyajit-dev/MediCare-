import React, { createContext, useContext, useState } from 'react';

export const CITIES = [
  'Bangalore',
  'Delhi',
  'Mumbai',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad'
];

const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity, cities: CITIES }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    return {
      selectedCity: 'Bangalore',
      setSelectedCity: () => {},
      cities: CITIES
    };
  }
  return context;
};

