import { Album } from "src/global";

export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export type Action = {
  type: ActionType;
  album: Album;
};

// interface ListReducerProps {
//   state:
// }

// const listReducer = ()
