import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface DeleteShoppingCartProductsResponse {
  status: number;
}

export const DeleteShoppingCartProducts = async (): Promise<
  AxiosResponse<DeleteShoppingCartProductsResponse>
> => {
  const response = await api.delete<DeleteShoppingCartProductsResponse>(
    `api/ShoppingCart/products`
  );
  return response;
};
