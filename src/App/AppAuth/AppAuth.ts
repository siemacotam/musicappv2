import { useEffect, useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { addAlbum } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { AppAuthProps } from "./AppAuth.types";

export const AppAuth = ({ children }: AppAuthProps) => {
  const { dispatch } = useContext<AppContextState>(AppContext);

  useEffect(() => {
    const albumsList = localStorage.getItem("musiclist");
    if (!albumsList) {
      dispatch(
        addAlbum({
          id: "",
          artist: "",
          title: "",
          isFav: true,
        })
      );
    }
  }, []);

  return children;
};
