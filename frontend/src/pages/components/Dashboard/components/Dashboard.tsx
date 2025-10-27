import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { MetricsGrid } from "./MetricSummary/MetricGrid";
import NewProductCard from "./NewProduct/NewProductCard";
import SectionTitle from "./SectionTitle/SectionTitle";

interface DashboardProps {
  drawerWidth: number;
}

export default function Dashboard({ drawerWidth }: DashboardProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3 },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        bgcolor: "background.default",
      }}
    >
      <Toolbar />

      <Stack spacing={3}>
        <SectionTitle
          title="Dashboard"
          subtitle="Bine ai venit înapoi! Iată un rezumat al inventarului tău."
        />

        <MetricsGrid />

        <Grid container>
          <Grid size={12}>
            <NewProductCard />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
