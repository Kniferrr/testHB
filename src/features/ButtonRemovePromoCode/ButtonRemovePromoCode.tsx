import { useMutation } from "react-query";
import { DeleteShoppingCartDiscount } from "../api/DeleteShoppingCartDiscount";
import { queryClient } from "@/main";
import { Button } from "@mui/material";

const ButtonRemovePromoCode = () => {
  const DeleteShoppingCartDiscountMutation = useMutation(
    () => DeleteShoppingCartDiscount(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleRemovePromoCode = () => {
    DeleteShoppingCartDiscountMutation.mutate();
  };

  return (
    <Button
      onClick={handleRemovePromoCode}
      variant="outlined"
      color="secondary"
      fullWidth
    >
      Очистить корзину
    </Button>
  );
};

export default ButtonRemovePromoCode;
