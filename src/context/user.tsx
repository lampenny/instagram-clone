import { createContext } from "react";

interface ContextState {
  // set the type of state you want to handle with context
  user: string | null;
}

const UserContext = createContext({} as ContextState);

export default UserContext;
