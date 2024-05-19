import { useMutation } from "react-query";
import { queryClient } from "@/main";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { PostShoppingCartChangequantity } from "../api/PostShoppingCartChangequantity";
import { TextField } from "@mui/material";

interface QuantityProductFieldProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  ProductId: number;
}

const QuantityProductField: React.FC<QuantityProductFieldProps> = ({
  quantity,
  setQuantity,
  ProductId,
}) => {
  const UserGuid = useCachedGuid();
  const QuantityChangeMutation = useMutation(
    ({ ProductId, quantity }: { ProductId: number; quantity: number }) =>
      PostShoppingCartChangequantity(ProductId, UserGuid, quantity),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleQuantityChange = () => {
    setQuantity(quantity);
    QuantityChangeMutation.mutate({ ProductId, quantity });
  };
  return (
    <TextField
      type="number"
      value={quantity}
      onChange={handleQuantityChange}
      InputProps={{ inputProps: { min: 1, step: 1 } }}
      InputLabelProps={{ shrink: true }}
      label="Количество"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

export default QuantityProductField;
