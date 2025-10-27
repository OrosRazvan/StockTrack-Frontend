import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import DashboardContent from "./components/Dashboard/components/Dashboard";
import { LeftDrawer } from "./components/LeftDrawer/components/LeftDrawer";
import { TopHeader } from "./components/TopHeader/components/TopHeader";

const drawerWidth = 240;

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => setIsClosing(false);

  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen((s) => !s);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopHeader drawerWidth={drawerWidth} onMenuClick={handleDrawerToggle} />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <LeftDrawer
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
        />
      </Box>

      <DashboardContent drawerWidth={drawerWidth} />
    </Box>
  );
}
