import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface DeleteShoppingCartProductRequest {
  ProductId: number;
  UserGuid: string;
}

interface DeleteShoppingCartProductResponse {
  status: number;
}

export const DeleteShoppingCartProduct = async ({
  ProductId,
  UserGuid,
}: DeleteShoppingCartProductRequest): Promise<
  AxiosResponse<DeleteShoppingCartProductResponse>
> => {
  const response = await api.delete<DeleteShoppingCartProductResponse>(
    `api/ShoppingCart/product`,
    {
      data: {
        ProductId,
        UserGuid,
      },
    }
  );
  return response;
};
