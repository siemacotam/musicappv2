import { IconButton } from "@mui/material";
import { Drawer } from "@mui/material";
import { Divider } from "@mui/material";
import { drawerWidth } from "src/global";
import { LeftDrawerProps } from "./LeftDrawer.types";
import { DrawerHeader } from "./LefrDrawer.styled";
import CloseIcon from "@mui/icons-material/Close";
import { AddAlbum } from "src/components";

export const LeftDrawer = ({ open, handleDrawerClose }: LeftDrawerProps) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        <CloseIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <AddAlbum />
  </Drawer>
);
