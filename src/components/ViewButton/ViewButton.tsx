import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { changeView } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { View } from "src/global";

interface ViewButtonProps {
  view: View;
}

export const ViewButton = ({ view }: ViewButtonProps): JSX.Element => {
  const { dispatch, state } = useContext<AppContextState>(AppContext);

  const activeView = state.view === view;

  const switchView = () => dispatch(changeView(view));

  return (
    <Button
      variant="outlined"
      onClick={switchView}
      disabled={activeView}
      sx={{ color: activeView ? "green" : "black" }}
    >
      {view}
    </Button>
  );
};
