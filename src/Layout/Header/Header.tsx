import { Typography, Toolbar, Stack, Button } from "@mui/material";
import { AppBar } from "./Header.styled";
import { HeaderProps } from "./Header.types";
import theme from "src/Theme/Theme";
import { useTranslation } from "src/hooks";
import { maxContentWidth } from "src/global";

export const Header = ({ open, handleDrawerOpen }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ bgcolor: theme.palette.grey[300] }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
          mx="auto"
          maxWidth={maxContentWidth}
        >
          <Button
            variant="outlined"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            {t.add}
          </Button>
          <Typography variant="h6" component="h1" color="black">
            Music App
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
