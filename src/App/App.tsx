import { Stack, CssBaseline } from "@mui/material";
import { useState } from "react";
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
      <Main open={open} />
    </Stack>
  );
}

export default App;
