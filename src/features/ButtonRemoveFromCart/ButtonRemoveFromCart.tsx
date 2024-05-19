import { IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useMutation } from "react-query";
import { queryClient } from "@/main";
import { DeleteShoppingCartProduct } from "../api/DeleteShoppingCartProduct";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { Product } from "@/entities/ProductCard/ProductTable";

interface ButtonRemoveFromCartProps {
  product: Product;
}

const ButtonRemoveFromCart: React.FC<ButtonRemoveFromCartProps> = ({
  product,
}) => {
  const UserGuid = useCachedGuid();
  const DeleteShoppingCartProductMutation = useMutation(
    (ProductId: number) => DeleteShoppingCartProduct({ ProductId, UserGuid }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleRemoveFromCart = () => {
    DeleteShoppingCartProductMutation.mutate(product.id);
  };
  return (
    <IconButton aria-label="Remove from cart" onClick={handleRemoveFromCart}>
      <RemoveShoppingCartIcon />
    </IconButton>
  );
};

export default ButtonRemoveFromCart;
