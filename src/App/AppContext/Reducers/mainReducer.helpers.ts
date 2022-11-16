import { Album } from "src/global";
import { ActionType, AddAlbum } from "./mainReducer.types";

export const addAlbum = (album: Album): AddAlbum => ({
  type: ActionType.ADD,
  payload: album,
});
