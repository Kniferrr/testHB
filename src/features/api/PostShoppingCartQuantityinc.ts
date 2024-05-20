import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface PostShoppingCartQuantityincResponse {
  status: number;
}

export const PostShoppingCartQuantityinc = async (
  ProductId: number,
  UserGuid: string
) => {
  const response: AxiosResponse<PostShoppingCartQuantityincResponse> =
    await api.post("api/ShoppingCart/quantityinc", {
      ProductId,
      UserGuid,
    });
  return response;
};
