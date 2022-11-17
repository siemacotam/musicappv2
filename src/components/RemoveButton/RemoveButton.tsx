import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip, IconButton } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { removeAlbum } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { useTranslation } from "src/hooks/useTranslation";

export interface RemoveButtonProps {
  id: number;
}

export const RemoveButton = ({ id }: RemoveButtonProps): JSX.Element => {
  const { dispatch } = useContext<AppContextState>(AppContext);
  const { t } = useTranslation();

  const handleRemoveAlbum = () => {
    dispatch(removeAlbum(id));
  };

  return (
    <Tooltip title={t.remove}>
      <IconButton onClick={handleRemoveAlbum}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
