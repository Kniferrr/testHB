import CartSummary from "@/entities/CartSummary/CartSummary";
import { GetShoppingCartBaskedsummary } from "@/shared/api/GetShoppingCartBaskedsummary";
import { useMutation, useQuery } from "react-query";
import { DeleteShoppingCartProducts } from "../api/DeleteShoppingCartProducts";
import { queryClient } from "@/main";
import { PostShoppingCartDiscount } from "../api/PostShoppingCartDiscount";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { DeleteShoppingCartDiscount } from "../api/DeleteShoppingCartDiscount";

const CartSummaryWindget = () => {
  const Baskedsummary = useQuery(
    "GetShoppingCartBaskedsummary",
    async () => {
      const response = await GetShoppingCartBaskedsummary();
      return response;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const UserGuid = useCachedGuid();

  const DeleteShoppingCartProductsMutation = useMutation(
    () => DeleteShoppingCartProducts(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const PostShoppingCartDiscountMutation = useMutation(
    (code: string) => PostShoppingCartDiscount(code, UserGuid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const DeleteShoppingCartDiscountMutation = useMutation(
    () => DeleteShoppingCartDiscount(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const handleApplyPromoCode = (code: string) => {
    PostShoppingCartDiscountMutation.mutate(code);
  };

  const handleRemovePromoCode = () => {
    DeleteShoppingCartDiscountMutation.mutate();
  };

  const handleClearCart = () => {
    DeleteShoppingCartProductsMutation.mutate();
  };

  if (Baskedsummary.isLoading || !Baskedsummary.data) {
    return <div>Loading</div>;
  }
  return (
    <CartSummary
      baskedsummary={Baskedsummary.data}
      handleApplyPromoCode={handleApplyPromoCode}
      handleRemovePromoCode={handleRemovePromoCode}
      handleClearCart={handleClearCart}
    />
  );
};

export default CartSummaryWindget;
