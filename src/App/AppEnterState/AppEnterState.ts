import { useEffect, useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { setState } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { AppEnterStateProps } from "./AppEnterState.types";

export const AppEnterState = ({ children }: AppEnterStateProps) => {
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
