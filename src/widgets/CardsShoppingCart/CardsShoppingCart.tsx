import ProductTable from "@/entities/ProductCard/ProductTable";
import { useMutation, useQuery } from "react-query";
import { GetShoppingCartProducts } from "../api/GetShoppingCartProducts";
import { DeleteShoppingCartProduct } from "../api/DeleteShoppingCartProduct";
import useCachedGuid from "@/shared/hooks/useCachedGuid";
import { queryClient } from "@/main";
import { PostShoppingCartChangequantity } from "../api/PostShoppingCartChangequantity";

function CardsShoppingCart() {
  const { data, isLoading } = useQuery(
    "CardsShoppingCart",
    async () => {
      const response = await GetShoppingCartProducts();
      return response;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

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

  const QuantityChangeMutation = useMutation(
    ({ ProductId, count }: { ProductId: number; count: number }) =>
      PostShoppingCartChangequantity(ProductId, UserGuid, count),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("CardsShoppingCart");
        queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
      },
    }
  );

  const onRemoveFromCartItem = (ProductId: number) => {
    DeleteShoppingCartProductMutation.mutate(ProductId);
  };

  const handleQuantityChange = (ProductId: number, count: number) => {
    QuantityChangeMutation.mutate({ ProductId, count });
  };

  if (isLoading || !data) {
    return (
      <ProductTable
        product={{
          id: 0,
          name: "Loading",
          price: 0,
          image: "",
          quantity: 1,
        }}
        onRemoveFromCart={() => console.log("onRemoveFromCart")}
        handleQuantityChange={() => console.log()}
      />
    );
  }

  return (
    <>
      {data.map((item) => (
        <ProductTable
          key={item.Id}
          product={{
            id: item.Id,
            name: item.Name,
            price: item.Price,
            image: item.Images[0].Image,
            quantity: item.Quantity,
          }}
          onRemoveFromCart={onRemoveFromCartItem}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </>
  );
}

export default CardsShoppingCart;
