import { IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "./Header.styled";
import { HeaderProps } from "./Header.types";

export const Header = ({ open, handleDrawerOpen }: HeaderProps) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
