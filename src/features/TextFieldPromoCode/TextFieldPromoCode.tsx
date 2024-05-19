import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface TextFieldPromoCodeProps {
  promoCode: string;
  setPromoCode: (promoCode: string) => void;
}

const TextFieldPromoCode: React.FC<TextFieldPromoCodeProps> = ({
  promoCode,
  setPromoCode,
}) => {
  const onChangePromoCode = (e: ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };
  return (
    <TextField
      label="Промокод"
      variant="outlined"
      size="small"
      fullWidth
      value={promoCode}
      onChange={onChangePromoCode}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default TextFieldPromoCode;
