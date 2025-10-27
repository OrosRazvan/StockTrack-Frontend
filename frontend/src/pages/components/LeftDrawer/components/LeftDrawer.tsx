import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";

// ICONS (mui-material-icons / @mui/icons-material)
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import ShowChartOutlined from "@mui/icons-material/ShowChartOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

type NavKey = "dashboard" | "produse" | "rapoarte" | "setari";

const NAV_ITEMS: Array<{
  key: NavKey;
  label: string;
  icon: React.ReactElement;
}> = [
  { key: "dashboard", label: "Dashboard", icon: <BarChartOutlined /> },
  { key: "produse", label: "Produse", icon: <Inventory2Outlined /> },
  { key: "rapoarte", label: "Rapoarte", icon: <ShowChartOutlined /> },
  { key: "setari", label: "Setări", icon: <SettingsOutlined /> },
];

const Brand = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      px: 2,
      py: 1.5,
    }}
  >
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: "primary.light",
        color: "primary.main",
        width: 28,
        height: 28,
        boxShadow: 0,
      }}
    >
      <Inventory2Outlined fontSize="small" />
    </Avatar>
    <Typography
      variant="h6"
      sx={{ fontWeight: 700, color: "primary.main", letterSpacing: 0.2 }}
    >
      StockTrack
    </Typography>
  </Box>
);

function DrawerContent({
  selectedKey,
  onSelect,
}: {
  selectedKey: NavKey;
  onSelect?: (k: NavKey) => void;
}) {
  return (
    <Box sx={{ minHeight: 1, display: "flex", flexDirection: "column" }}>
      {/* Compensează AppBar-ul */}
      <Toolbar />
      <Brand />
      <Divider sx={{ mx: 2, my: 1 }} />

      <List sx={{ px: 1.5 }}>
        {NAV_ITEMS.map((item) => {
          const selected = selectedKey === item.key;
          return (
            <ListItem key={item.key} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={selected}
                onClick={() => onSelect?.(item.key)}
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  "& .MuiListItemIcon-root": {
                    minWidth: 36,
                    color: selected ? "primary.main" : "text.secondary",
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: selected ? 600 : 500,
                  },
                  "&.Mui-selected": {
                    bgcolor: "primary.lighter", // folosește palette augmentată/tonal; dacă nu ai, vezi nota de mai jos
                    color: "primary.main",
                  },
                  "&.Mui-selected:hover": { bgcolor: "primary.lighter" },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* spațiu flexibil jos dacă vrei elemente suplimentare/footernav */}
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
}

export interface LeftDrawerProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onClose: () => void;
  onTransitionEnd?: () => void;
  windowRef?: () => Window;
  /** Controlează selecția curentă (de ex. din router) */
  selectedKey?: NavKey;
  /** Callback când utilizatorul selectează un item */
  onSelect?: (k: NavKey) => void;
}

export const LeftDrawer = ({
  drawerWidth,
  mobileOpen,
  onClose,
  onTransitionEnd,
  windowRef,
  selectedKey = "dashboard",
  onSelect,
}: LeftDrawerProps) => {
  const container =
    windowRef !== undefined ? () => windowRef().document.body : undefined;

  return (
    <Box>
      {/* Mobil: temporary */}
      <MuiDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        onTransitionEnd={onTransitionEnd}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: 0,
          },
        }}
        slotProps={{ root: { keepMounted: true } }}
      >
        <DrawerContent selectedKey={selectedKey} onSelect={onSelect} />
      </MuiDrawer>

      {/* Desktop: permanent */}
      <MuiDrawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: 0,
          },
        }}
      >
        <DrawerContent selectedKey={selectedKey} onSelect={onSelect} />
      </MuiDrawer>
    </Box>
  );
};
