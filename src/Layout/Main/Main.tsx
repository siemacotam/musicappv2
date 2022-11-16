import { Playlist } from "src/Pages";
import { DrawerHeader } from "../LeftDrawer/LefrDrawer.styled";
import { StyledMain } from "./Main.styled";
import { MainProps } from "./Main.types";

export const Main = ({ open }: MainProps) => {
  return (
    <StyledMain open={open}>
      <DrawerHeader />
      <Playlist />
    </StyledMain>
  );
};
