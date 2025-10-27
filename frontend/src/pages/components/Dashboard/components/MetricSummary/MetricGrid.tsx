import BarChartRounded from "@mui/icons-material/BarChartRounded";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import LocalOfferRounded from "@mui/icons-material/LocalOfferRounded";
import StackedLineChartRounded from "@mui/icons-material/StackedLineChartRounded";
import MetricCard from "./MetricCard";
import Grid from "@mui/material/Grid";

export const MetricsGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <MetricCard
          title="Total Produse"
          value={0}
          icon={<Inventory2Rounded />}
          deltaText="+0% față de luna trecută"
          deltaColor="default"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <MetricCard
          title="Valoare Totală"
          value={"0 RON"}
          icon={<LocalOfferRounded />}
          deltaText="+12% față de luna trecută"
          deltaColor="success"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <MetricCard
          title="Stoc Total"
          value={0}
          icon={<BarChartRounded />}
          deltaText="-5% față de luna trecută"
          deltaColor="error"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <MetricCard
          title="Categorii"
          value={4}
          icon={<StackedLineChartRounded />}
          deltaText="+0% față de luna trecută"
          deltaColor="default"
        />
      </Grid>
    </Grid>
  );
};
