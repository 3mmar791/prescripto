import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const ApppContextProvder = ({ children }) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ApppContextProvder;
