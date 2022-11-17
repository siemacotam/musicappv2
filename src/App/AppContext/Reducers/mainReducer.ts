import { AppContextProps } from "src/App/AppContext/AppContext.types";
import {
  sortAlbums,
  updateLocalStorage,
  updateStatus,
} from "./mainReducer.helpers";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  let updatedState;
  switch (action.type) {
    case ActionType.ADD:
      updatedState = { ...state, list: [action.payload, ...state.list] };
      updateLocalStorage(updatedState);
      return updatedState;
    case ActionType.SET_STATE:
      updatedState = action.payload;
      updateLocalStorage(updatedState);
      return updatedState;
    case ActionType.REMOVE:
      updatedState = {
        ...state,
        list: state.list.filter((album) => album.id !== action.payload),
      };
      updateLocalStorage(updatedState);
      return updatedState;
    case ActionType.CHANGE_LANGUAGE:
      updatedState = {
        ...state,
        language: action.payload,
      };
      updateLocalStorage(updatedState);
      return updatedState;
    case ActionType.CHANGE_VIEW:
      updatedState = {
        ...state,
        view: action.payload,
      };
      updateLocalStorage(updatedState);
      return updatedState;
    case ActionType.ADD_BEST:
      return updateStatus(state, action, true);
    case ActionType.REMOVE_BEST:
      return updateStatus(state, action, false);
    case ActionType.SORT:
      return sortAlbums(state, action.payload);
    default:
      return state;
  }
};
