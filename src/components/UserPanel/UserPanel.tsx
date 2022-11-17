import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import {
  Typography,
  Stack,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { sortAlbumsList } from "src/App/AppContext/Reducers/mainReducer.helpers";
import { languages, SortOption, sortOptions, views } from "src/global";
import { useTranslation } from "src/hooks/useTranslation";
import { LanguageButton } from "../LanguageButton";
import { ViewButton } from "../ViewButton";

export const UserPanel = () => {
  const [sortBy, setSortBy] = useState<SortOption>(sortOptions.idDown);
  const { dispatch } = useContext<AppContextState>(AppContext);
  const { t } = useTranslation();

  const sortOptionsElements = [
    { label: t.az, code: sortOptions.az },
    { label: t.za, code: sortOptions.za },
    { label: t.idUp, code: sortOptions.idUp },
    { label: t.idDown, code: sortOptions.idDown },
    { label: t.addedUp, code: sortOptions.addedUp },
    { label: t.addedDown, code: sortOptions.addedDown },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(sortAlbumsList(event.target.value));
    setSortBy(event.target.value);
  };

  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardContent>
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                <Typography>{t.sortBy}</Typography>
                <FormControl sx={{ width: "250px" }}>
                  <InputLabel>Sortuj wg</InputLabel>
                  <Select
                    value={sortBy}
                    label="Sortuj wg"
                    onChange={handleChange}
                  >
                    {sortOptionsElements.map(({ label, code }) => (
                      <MenuItem key={code} value={code}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} container spacing={1}>
              <Grid item xs={6} textAlign="center">
                <Card variant="outlined" sx={{ p: 1 }}>
                  <Typography mb={2}>{t.view}</Typography>
                  <Stack direction="row" justifyContent="space-evenly">
                    <ViewButton view={views.column} />
                    <ViewButton view={views.grid} />
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={6} textAlign="center">
                <Card variant="outlined" sx={{ p: 1 }}>
                  <Typography mb={2}>{t.language}</Typography>
                  <Stack direction="row" justifyContent="space-evenly">
                    <LanguageButton language={languages.EN} />
                    <LanguageButton language={languages.PL} />
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
