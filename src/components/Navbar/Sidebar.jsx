import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const isDrowerOpen = useSelector((state) => state.isDrawer?.value);

  const menuItems = [{ text: "Home", icon: <InboxIcon />, path: "/" }];

  return (
    <Drawer
      variant="persistent"
      open={isDrowerOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Link to="/" className="flex-1">
          <img
            className="mx-auto h-32 w-auto object-cover"
            src="/assets/logo.png"
            alt="LinkedIn"
          />
        </Link>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
