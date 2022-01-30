import { createContext } from "react";

interface defaultValueInterface {
  user: String;
  permissions: String;
  isLogged: boolean;
  jwt?: String;
}

const defaultValue: defaultValueInterface = {
  user: "",
  isLogged: false,
  permissions: "",
};

export const UserContext = createContext(defaultValue);
