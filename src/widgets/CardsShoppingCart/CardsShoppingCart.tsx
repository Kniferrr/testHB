import ProductTable from "@/entities/ProductCard/ProductTable";
import { useQuery } from "react-query";
import { GetShoppingCartProducts } from "../api/GetShoppingCartProducts";

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
        />
      ))}
    </>
  );
}

export default CardsShoppingCart;
