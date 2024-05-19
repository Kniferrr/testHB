import { useMutation } from "react-query";
import { queryClient } from "@/main";
import { Button } from "@mui/material";
import { DeleteShoppingCartProducts } from "../api/DeleteShoppingCartProducts";

const ButtonClearCart = () => {
  const DeleteShoppingCartProductsMutation = useMutation(
    () => DeleteShoppingCartProducts(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleClearCart = () => {
    DeleteShoppingCartProductsMutation.mutate();
  };
  return (
    <Button
      onClick={handleClearCart}
      variant="outlined"
      color="secondary"
      fullWidth
    >
      Очистить корзину
    </Button>
  );
};

export default ButtonClearCart;
