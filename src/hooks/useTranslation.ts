import { languages } from "src/global";
import { useAppState } from "./useAppState";
import { en, pl } from "src/App/Translations";

export const useTranslation = () => {
  const state = useAppState();

  const translation = () => {
    switch (state.language) {
      case languages.EN:
        return en;
      case languages.PL:
        return pl;
      default:
        return pl;
    }
  };

  const t = translation();

  return { t };
};
