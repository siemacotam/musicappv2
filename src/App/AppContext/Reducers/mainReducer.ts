import { AppContextProps } from "../AppContext.types";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  switch (action.type) {
    case ActionType.ADD:
      return { ...state, list: [action.payload, ...state.list] };
    case ActionType.REMOVE:
      return {
        ...state,
        list: state.list.filter((album) => album.id !== action.payload.id),
      };
    default:
      return state;
  }
};
