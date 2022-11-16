import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";

export const Playlist = () => {
  const { state } = useContext<AppContextState>(AppContext);

  console.log(state);
  return <Grid container>siema</Grid>;
};
