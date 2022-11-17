import { Stack, CssBaseline, Box } from "@mui/material";
import { useState } from "react";
import { maxContentWidth } from "src/global";
import { Header, LeftDrawer, Main } from "src/Layout";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
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
