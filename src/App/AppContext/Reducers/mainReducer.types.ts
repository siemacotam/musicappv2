import { Album, Language, View } from "src/global";

export enum ActionType {
  ADD,
  REMOVE,
  SET_LIST,
  ADD_FAV,
  REMOVE_FAV,
  CHANGE_VIEW,
  CHANGE_LANGUAGE,
  SORT_ID,
  SORT_DATE,
  SORT_NAME,
}

export interface AddAlbum {
  type: ActionType.ADD;
  payload: Album;
}

export interface RemoveAlbum {
  type: ActionType.REMOVE;
  payload: { id: string };
}

export interface ChangeLanguage {
  type: ActionType.CHANGE_LANGUAGE;
  payload: Language;
}

export interface ChangeView {
  type: ActionType.CHANGE_VIEW;
  payload: View;
}

export type Actions = AddAlbum | RemoveAlbum | ChangeLanguage | ChangeView;
