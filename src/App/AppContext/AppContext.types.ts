import { Dispatch, SetStateAction } from "react";
import { Album, Language, View } from "src/global";

export interface AppContextProps {
  list: Album[];
  language: Language;
  switchLanguageToPl: () => void;
  switchLanguageToEn: () => void;
  view: View;
  switchViewToGrid: () => void;
  switchViewToColumn: () => void;
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
