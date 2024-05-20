import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useMutation } from "react-query";
import { queryClient } from "@/main";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { Product } from "@/entities/ProductCard/ProductTable";
import { PostShoppingCartQuantitydec } from "../api/PostShoppingCartQuantitydec";

interface ButtonDecrementFromCartProps {
  product: Product;
}

const ButtonDecrementFromCart: React.FC<ButtonDecrementFromCartProps> = ({
  product,
}) => {
  const UserGuid = useCachedGuid();
  const DecrementMutation = useMutation(
    (ProductId: number) => PostShoppingCartQuantitydec(ProductId, UserGuid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleDecrement = () => {
    DecrementMutation.mutate(product.id);
  };
  return (
    <IconButton aria-label="Increase quantity" onClick={handleDecrement}>
      <RemoveCircleIcon />
    </IconButton>
  );
};

export default ButtonDecrementFromCart;
