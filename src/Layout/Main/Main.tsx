import { Card, CardContent, Stack, Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "src/App/AppContext/AppContext";
import { AppContextState } from "src/App/AppContext/AppContext.types";
import { EmptyStateComponent, UserPanel } from "src/components";
import { DrawerHeader } from "../LeftDrawer/LefrDrawer.styled";
import { showContent } from "./Main.helpers";
import { StyledMain } from "./Main.styled";
import { MainProps } from "./Main.types";

export const Main = ({ open }: MainProps): JSX.Element => {
  const { state } = useContext<AppContextState>(AppContext);
  const { view, list } = state;

  const content = showContent(view, list);

  return (
    <StyledMain open={open}>
      <DrawerHeader />
      <Stack rowGap={2}>
        <UserPanel />
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              {state.list.length > 0 ? content : <EmptyStateComponent />}
            </CardContent>
          </Card>
        </Grid>
      </Stack>
    </StyledMain>
  );
};
