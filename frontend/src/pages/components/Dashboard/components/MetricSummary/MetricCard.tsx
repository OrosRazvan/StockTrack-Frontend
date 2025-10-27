import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactElement;
  deltaText?: string;
  deltaColor?: "success" | "error" | "default";
}

export default function MetricCard({
  title,
  value,
  icon,
  deltaText,
  deltaColor = "default",
}: MetricCardProps) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="subtitle1" color="text.secondary">
            {title}
          </Typography>
          {icon && (
            <Avatar
              variant="rounded"
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.lighter",
                color: "primary.main",
              }}
            >
              <Box sx={{ "& svg": { fontSize: 22 } }}>{icon}</Box>
            </Avatar>
          )}
        </Stack>

        <Typography variant="h4" fontWeight={800} sx={{ mt: 1.5 }}>
          {value}
        </Typography>

        {deltaText && (
          <Chip
            label={deltaText}
            color={deltaColor}
            size="small"
            sx={{
              mt: 1.5,
              borderRadius: 1.5,
              // succes/error vin cu bg implicit; pentru "default" facem o nuanță light
              ...(deltaColor === "default" && {
                bgcolor: "success.lighter",
                color: "success.main",
              }),
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
