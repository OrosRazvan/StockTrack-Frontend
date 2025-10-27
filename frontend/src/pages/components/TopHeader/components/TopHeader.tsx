import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";

interface TopHeaderProps {
  drawerWidth: number;
  onMenuClick: () => void;
  userInitials?: string; // ex: "AD"
}

export const TopHeader = ({
  drawerWidth,
  onMenuClick,
  userInitials = "AD",
}: TopHeaderProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "background.paper",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {/* buton meniu (doar pe mobil) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* SEARCH */}
        <Box sx={{ flexGrow: 1, maxWidth: { xs: "100%", md: 420 } }}>
          <OutlinedInput
            fullWidth
            size="small"
            placeholder="Caută produse..."
            startAdornment={
              <InputAdornment position="start">
                <SearchRounded fontSize="small" />
              </InputAdornment>
            }
            sx={{
              borderRadius: 3,
              bgcolor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "action.active",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.light",
              },
              "&.Mui-focused": {
                boxShadow: (t) => `0 0 0 3px ${t.palette.primary.main}22`,
              },
            }}
          />
        </Box>

        {/* spacer */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />

        {/* AVATAR */}
        <Avatar
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            fontWeight: 700,
            width: 40,
            height: 40,
            boxShadow: (t) => `0 4px 12px ${t.palette.primary.main}40`,
          }}
        >
          {userInitials}
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};
