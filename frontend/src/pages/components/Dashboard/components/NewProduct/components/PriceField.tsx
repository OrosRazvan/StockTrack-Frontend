import TextField from "@mui/material/TextField";

interface Props {
  value: number;
  onChange: (v: number) => void;
}

export default function PriceField({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      label="Preț (RON)"
      type="number"
      inputProps={{ min: 0, step: "0.01" }}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
