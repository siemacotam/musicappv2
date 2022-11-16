import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface ToolbarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface HeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}
