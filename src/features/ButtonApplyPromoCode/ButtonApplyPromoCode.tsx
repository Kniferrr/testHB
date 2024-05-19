import { useMutation } from "react-query";
import { queryClient } from "@/main";
import { Button } from "@mui/material";
import { PostShoppingCartDiscount } from "../api/PostShoppingCartDiscount";
import useCachedGuid from "@/shared/hooks/useCachedGuid";

const ButtonApplyPromoCode = ({ promoCode }: { promoCode: string }) => {
  const UserGuid = useCachedGuid();

  const PostShoppingCartDiscountMutation = useMutation(
    (code: string) => PostShoppingCartDiscount(code, UserGuid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleApplyPromoCode = () => {
    PostShoppingCartDiscountMutation.mutate(promoCode);
  };
  return (
    <Button onClick={handleApplyPromoCode} variant="contained" color="primary">
      Применить
    </Button>
  );
};

export default ButtonApplyPromoCode;
