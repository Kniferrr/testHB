import { useMutation } from "react-query";
import { queryClient } from "@/main";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { PostShoppingCartChangequantity } from "../api/PostShoppingCartChangequantity";
import { TextField } from "@mui/material";
import { ChangeEvent, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import { Product } from "@/entities/ProductCard/ProductTable";

interface QuantityProductFieldProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  product: Product;
}

const QuantityProductField: React.FC<QuantityProductFieldProps> = ({
  quantity,
  setQuantity,
  product,
}) => {
  const UserGuid = useCachedGuid();
  const QuantityChangeMutation = useMutation(
    (count: number) =>
      PostShoppingCartChangequantity(product.id, UserGuid, count),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity, setQuantity]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceQuantityChangeMutation = useCallback(
    debounce((count: number) => {
      QuantityChangeMutation.mutate(count);
    }, 1000),
    []
  );

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const NewQuantity = parseInt(e.target.value);
    setQuantity(NewQuantity);
    debounceQuantityChangeMutation(NewQuantity);
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
