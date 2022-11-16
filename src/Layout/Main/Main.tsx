import { LanguageButton, ViewButton } from "src/components";
import { languages, views } from "src/global";
import { Playlist } from "src/Pages";
import { DrawerHeader } from "../LeftDrawer/LefrDrawer.styled";
import { StyledMain } from "./Main.styled";
import { MainProps } from "./Main.types";

export const Main = ({ open }: MainProps) => {
  return (
    <StyledMain open={open}>
      <DrawerHeader />
      <Playlist />
      <ViewButton view={views.column} />
      <ViewButton view={views.grid} />
      <LanguageButton language={languages.EN} />
      <LanguageButton language={languages.PL} />
    </StyledMain>
  );
};
