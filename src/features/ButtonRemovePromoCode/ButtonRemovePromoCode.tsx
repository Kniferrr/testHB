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
    <Button onClick={handleRemovePromoCode} variant="contained" color="primary">
      Удалить
    </Button>
  );
};

export default ButtonRemovePromoCode;
