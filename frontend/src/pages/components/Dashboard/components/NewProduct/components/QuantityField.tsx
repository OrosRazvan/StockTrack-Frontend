import TextField from "@mui/material/TextField";

interface Props {
  value: number;
  onChange: (v: number) => void;
}

export default function QuantityField({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      label="Cantitate"
      type="number"
      inputProps={{ min: 0 }}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
