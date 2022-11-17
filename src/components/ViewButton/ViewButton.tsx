import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { changeView } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { View, views } from "src/global";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableRowsIcon from "@mui/icons-material/TableRows";

interface ViewButtonProps {
  view: View;
}

const label = (view: View) => {
  switch (view) {
    case views.column:
      return <TableRowsIcon />;
    case views.grid:
      return <GridOnIcon />;
    default:
      return null;
  }
};

export const ViewButton = ({ view }: ViewButtonProps): JSX.Element => {
  const { dispatch, state } = useContext<AppContextState>(AppContext);

  const activeView = state.view === view;

  const switchView = () => dispatch(changeView(view));
  const getLabel = () => label(view);

  return (
    <Button
      variant={activeView ? "contained" : "outlined"}
      onClick={switchView}
      disabled={activeView}
    >
      {getLabel()}
    </Button>
  );
};
