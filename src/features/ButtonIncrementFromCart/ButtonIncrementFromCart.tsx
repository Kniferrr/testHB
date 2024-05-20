import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useMutation } from "react-query";
import { queryClient } from "@/main";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { Product } from "@/entities/ProductCard/ProductTable";
import { PostShoppingCartQuantityinc } from "../api/PostShoppingCartQuantityinc";

interface ButtonIncrementFromCartProps {
  product: Product;
}

const ButtonIncrementFromCart: React.FC<ButtonIncrementFromCartProps> = ({
  product,
}) => {
  const UserGuid = useCachedGuid();
  const IncrementMutation = useMutation(
    (ProductId: number) => PostShoppingCartQuantityinc(ProductId, UserGuid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleIncrement = () => {
    IncrementMutation.mutate(product.id);
  };
  return (
    <IconButton aria-label="Decrease quantity" onClick={handleIncrement}>
      <AddCircleIcon />
    </IconButton>
  );
};

export default ButtonIncrementFromCart;
