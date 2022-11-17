import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";

export const useAppState = () => {
  const { state } = useContext<AppContextState>(AppContext);

  return state;
};
