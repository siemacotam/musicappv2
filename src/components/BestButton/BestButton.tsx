import StarIcon from "@mui/icons-material/Star";
import { Tooltip, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useTranslation } from "src/hooks/useTranslation";
import { useContext } from "react";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { AppContext } from "src/App/AppContext/AppContext";
import {
  addToBest,
  removeFromBest,
} from "src/App/AppContext/Reducers/mainReducer.helpers";

interface BestButtonProps {
  isFav: boolean;
  id: number;
}

export const BestButton = ({ isFav, id }: BestButtonProps): JSX.Element => {
  const { dispatch } = useContext<AppContextState>(AppContext);
  const { t } = useTranslation();

  const tooltipLabel = isFav ? t.removeBest : t.addBest;

  const handleFavButton = () => {
    isFav ? dispatch(removeFromBest(id)) : dispatch(addToBest(id));
  };

  return (
    <Tooltip title={tooltipLabel}>
      <IconButton onClick={handleFavButton}>
        {isFav ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};
