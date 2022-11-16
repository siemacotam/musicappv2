import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { changeLanguage } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { Language } from "src/global";

interface LanguageButtonProps {
  language: Language;
}

export const LanguageButton = ({ language }: LanguageButtonProps) => {
  const { dispatch, state } = useContext<AppContextState>(AppContext);

  const activeLanguage = state.language === language;

  const switchLanguage = () => dispatch(changeLanguage(language));

  return (
    <Button
      variant="outlined"
      onClick={switchLanguage}
      disabled={activeLanguage}
      sx={{ color: activeLanguage ? "green" : "black" }}
    >
      {language}
    </Button>
  );
};
