import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

type Anchor = "left" | "right" | "top" | "bottom";

type DrawerProps = {
  onClose: () => void;
};

export default function TemporaryDrawer(props: DrawerProps) {
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      if (!open) {
        props.onClose();
        setState({ ...state, [anchor]: open });
      }
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Dashboard", icon: <HomeIcon /> },
          { text: "Schedule", icon: <CalendarMonthOutlinedIcon /> },
          { text: "Courses", icon: <ListAltOutlinedIcon /> },
          { text: "Gradebook", icon: <SchoolOutlinedIcon /> },
          { text: "Performance", icon: <TrendingUpOutlinedIcon /> },
          { text: "Announcement", icon: <CampaignOutlinedIcon /> },
        ].map((item) => (
          <ListItem
            key={item.text}
            sx={{
              color: "white",
              "& .MuiListItemIcon-root": {
                color: "white",
              },
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                "& .MuiListItemIcon-root": {
                  color: "black",
                },
                "& .MuiListItemText-root": {
                  color: "black",
                },
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = "left"; // Set the anchor to "left" directly

  return (
    <div>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        variant="persistent"
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
