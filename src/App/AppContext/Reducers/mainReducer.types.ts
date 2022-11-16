import { Album } from "src/global";

export enum ActionType {
  ADD,
  REMOVE,
}

export interface AddAlbum {
  type: ActionType.ADD;
  payload: Album;
}

export interface RemoveAlbum {
  type: ActionType.REMOVE;
  payload: { id: string };
}

export type Actions = AddAlbum | RemoveAlbum;
