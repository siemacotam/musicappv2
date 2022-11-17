import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { UserPanel } from "src/components";
import { DrawerHeader } from "../LeftDrawer/LefrDrawer.styled";
import { showContent } from "./Main.helpers";
import { StyledMain } from "./Main.styled";
import { MainProps } from "./Main.types";

export const Main = ({ open }: MainProps) => {
  const { state } = useContext<AppContextState>(AppContext);
  const { view, list } = state;

  return (
    <StyledMain open={open}>
      <DrawerHeader />
      <UserPanel />
      {showContent(view, list)}
    </StyledMain>
  );
};
