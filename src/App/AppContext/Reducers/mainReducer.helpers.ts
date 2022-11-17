import { Album, Language, SortOption, sortOptions, View } from "src/global";
import { AppContextProps } from "src/App/AppContext/AppContext.types";
import {
  Actions,
  ActionType,
  AddAlbum,
  AddToBest,
  ChangeLanguage,
  ChangeView,
  RemoveAlbum,
  RemoveFromBest,
  SetState,
  Sort,
} from "./mainReducer.types";

export const sortAlbumsList = (option: SortOption): Sort => ({
  type: ActionType.SORT,
  payload: option,
});

export const setState = (state: AppContextProps): SetState => ({
  type: ActionType.SET_STATE,
  payload: state,
});

export const addAlbum = (album: Album): AddAlbum => ({
  type: ActionType.ADD,
  payload: album,
});

export const removeAlbum = (id: number): RemoveAlbum => ({
  type: ActionType.REMOVE,
  payload: id,
});

export const changeLanguage = (language: Language): ChangeLanguage => ({
  type: ActionType.CHANGE_LANGUAGE,
  payload: language,
});

export const changeView = (view: View): ChangeView => ({
  type: ActionType.CHANGE_VIEW,
  payload: view,
});

export const addToBest = (id: number): AddToBest => ({
  type: ActionType.ADD_BEST,
  payload: id,
});

export const removeFromBest = (id: number): RemoveFromBest => ({
  type: ActionType.REMOVE_BEST,
  payload: id,
});

export const updateStatus = (
  state: AppContextProps,
  action: Actions,
  type: boolean
) => {
  const index = state.list.findIndex((el) => el.id === action.payload);
  const newElement = { ...state.list[index], isFav: type };
  const updatedList = [...state.list];
  updatedList.splice(index, 1, newElement);
  const updatedState = { ...state, list: updatedList };
  updateLocalStorage(updatedState);
  return updatedState;
};

export const updateLocalStorage = (state: AppContextProps) =>
  localStorage.setItem("musicapp", JSON.stringify(state));

export const sortAlbums = (state: AppContextProps, option: SortOption) => {
  const list = [...state.list];
  switch (option) {
    case sortOptions.idDown:
      list.sort((a, b) => b.id - a.id);
      return { ...state, list };
    case sortOptions.idUp:
      list.sort((a, b) => a.id - b.id);
      return { ...state, list };
    case sortOptions.az:
      list.sort((a, b) => a.title.localeCompare(b.title));
      return { ...state, list };
    case sortOptions.za:
      list.sort((a, b) => a.title.localeCompare(b.title)).reverse();
      return { ...state, list };
    case sortOptions.addedDown:
      list.sort((a, b) => b.added - a.added);
      return { ...state, list };
    case sortOptions.addedUp:
      list.sort((a, b) => a.added - b.added);
      return { ...state, list };
    default:
      return state;
  }
};
