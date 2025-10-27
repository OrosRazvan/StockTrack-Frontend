import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CategorySelect from "./components/CategorySelect";
import PriceField from "./components/PriceField";
import ProductNameField from "./components/ProductNameField";
import QuantityField from "./components/QuantityField";
import SubmitButton from "./components/SubmitButton";

export default function NewProductCard() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Electronice");
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const canSubmit = name.trim().length > 0 && qty >= 0 && price >= 0;
  const handleSubmit = () => {
    // integrare creare produs aici
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Stack spacing={3}>
          <SectionTitle title="Adaugă Produs Nou" />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProductNameField value={name} onChange={setName} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CategorySelect value={category} onChange={setCategory} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <QuantityField value={qty} onChange={setQty} />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <PriceField value={price} onChange={setPrice} />
            </Grid>
          </Grid>

          <SubmitButton onClick={handleSubmit} disabled={!canSubmit} />
        </Stack>
      </CardContent>
    </Card>
  );
}
