import { Stack, CssBaseline, Box } from "@mui/material";
import { useState } from "react";
import { maxContentWidth } from "src/global";
import { Header, LeftDrawer, Main } from "src/Layout";
import theme from "src/Theme/Theme";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack minHeight="100vh" bgcolor={theme.palette.grey[400]}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <LeftDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box maxWidth={maxContentWidth} width="100%" mx="auto">
        <Main open={open} />
      </Box>
    </Stack>
  );
}

export default App;
