import CartSummary from "@/entities/CartSummary/CartSummary";
import { GetShoppingCartBaskedsummary } from "@/shared/api/GetShoppingCartBaskedsummary";
import { useQuery } from "react-query";

const CartSummaryWidget = () => {
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

  if (Baskedsummary.isLoading || !Baskedsummary.data) {
    return <div>Loading</div>;
  }
  return <CartSummary baskedsummary={Baskedsummary.data} />;
};

export default CartSummaryWidget;
