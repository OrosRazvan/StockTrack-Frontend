import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const OPTIONS = ["Electronice", "Îmbrăcăminte", "Accesorii", "Altele"];

export default function CategorySelect({ value, onChange }: Props) {
  return (
    <TextField
      select
      fullWidth
      label="Categorie"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {OPTIONS.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
}
