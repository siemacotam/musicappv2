import { Album, Language, SortOption, View } from "src/global";
import { AppContextProps } from "src/App/AppContext/AppContext.types";

export enum ActionType {
  ADD,
  REMOVE,
  SET_STATE,
  ADD_BEST,
  REMOVE_BEST,
  CHANGE_VIEW,
  CHANGE_LANGUAGE,
  SORT,
}

export interface Sort {
  type: ActionType.SORT;
  payload: SortOption;
}

export interface SetState {
  type: ActionType.SET_STATE;
  payload: AppContextProps;
}

export interface AddToBest {
  type: ActionType.ADD_BEST;
  payload: number;
}

export interface RemoveFromBest {
  type: ActionType.REMOVE_BEST;
  payload: number;
}

export interface AddAlbum {
  type: ActionType.ADD;
  payload: Album;
}

export interface RemoveAlbum {
  type: ActionType.REMOVE;
  payload: number;
}

export interface ChangeLanguage {
  type: ActionType.CHANGE_LANGUAGE;
  payload: Language;
}

export interface ChangeView {
  type: ActionType.CHANGE_VIEW;
  payload: View;
}

export type Actions =
  | AddAlbum
  | RemoveAlbum
  | ChangeLanguage
  | ChangeView
  | AddToBest
  | RemoveFromBest
  | SetState
  | Sort;
