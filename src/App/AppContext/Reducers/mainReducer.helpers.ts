import { Album, Language, View } from "src/global";
import {
  ActionType,
  AddAlbum,
  ChangeLanguage,
  ChangeView,
} from "./mainReducer.types";

export const addAlbum = (album: Album): AddAlbum => ({
  type: ActionType.ADD,
  payload: album,
});

export const changeLanguage = (language: Language): ChangeLanguage => ({
  type: ActionType.CHANGE_LANGUAGE,
  payload: language,
});

export const changeView = (view: View): ChangeView => ({
  type: ActionType.CHANGE_VIEW,
  payload: view,
});
