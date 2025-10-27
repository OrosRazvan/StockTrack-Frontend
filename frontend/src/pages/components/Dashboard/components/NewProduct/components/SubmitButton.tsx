import Button from "@mui/material/Button";
import AddRounded from "@mui/icons-material/AddRounded";

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export default function SubmitButton({ onClick, disabled }: Props) {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<AddRounded />}
      onClick={onClick}
      disabled={disabled}
      sx={{ borderRadius: 2, px: 3 }}
    >
      Adaugă Produs
    </Button>
  );
}
