import { languages, views } from "src/global";
import { AppContextProps } from "./AppContext.types";

export const initialAppContextValues: AppContextProps = {
  list: [],
  language: languages.pl,
  view: views.grid,
};
