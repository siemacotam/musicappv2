import { AppContextProps } from "./AppContext.types";

export const initialAppContextValues: AppContextProps = {
  list: [],
  language: "pl",
  switchLanguageToPl: () => {},
  switchLanguageToEn: () => {},
  view: "grid",
  switchViewToGrid: () => {},
  switchViewToColumn: () => {},
};
