import { useEffect, useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { setState } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { AppAuthProps } from "./AppAuth.types";

export const AppAuth = ({ children }: AppAuthProps) => {
  const { dispatch } = useContext<AppContextState>(AppContext);

  useEffect(() => {
    const localState = localStorage.getItem("musicapp");
    if (localState) {
      dispatch(setState(JSON.parse(localState)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
