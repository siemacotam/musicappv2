import {
  createContext,
  useState,
  useMemo,
  useContext,
  useReducer,
  Reducer,
  Action,
} from "react";
import { Album, Language, languages, View, views } from "src/global";
import { initialAppContextValues } from "./AppContext.const";
import { AppContextProps, AppContextProviderProps } from "./AppContext.types";
import { listReducer } from "./Reducers/ListReducer";

export const AppContext = createContext<AppContextProps>(
  initialAppContextValues
);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [list, setList] =
    useReducer < React.ReducerWithoutAction<any>(listReducer, []);
  const [language, setLanguage] = useState<Language>("pl");
  const [view, setView] = useState<View>("grid");

  const value = useMemo(() => {
    const switchLanguageToPl = () => setLanguage(languages.pl);
    const switchLanguageToEn = () => setLanguage(languages.en);

    const switchViewToGrid = () => setView(views.grid);
    const switchViewToColumn = () => setView(views.column);

    return {
      list,
      language,
      view,
      switchLanguageToPl,
      switchLanguageToEn,
      switchViewToGrid,
      switchViewToColumn,
    };
  }, [list, language, view]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext<AppContextProps>(AppContext);

  return context;
};
