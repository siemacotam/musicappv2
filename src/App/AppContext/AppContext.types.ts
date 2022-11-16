import { Album, Language, View } from "src/global";
import { Dispatch } from "react";
import { Actions } from "./Reducers/mainReducer.types";

export interface AppContextState {
  state: AppContextProps;
  dispatch: Dispatch<Actions>;
}

export interface AppContextProps {
  list: Album[];
  language: Language;
  view: View;
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
