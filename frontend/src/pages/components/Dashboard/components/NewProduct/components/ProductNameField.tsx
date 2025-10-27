import TextField from "@mui/material/TextField";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function ProductNameField({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      label="Nume Produs"
      placeholder="Ex: Laptop Dell XPS"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
