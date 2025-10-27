import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h5" fontWeight={800}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}
