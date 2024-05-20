import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface PostShoppingCartQuantitydecResponse {
  status: number;
}

export const PostShoppingCartQuantitydec = async (
  ProductId: number,
  UserGuid: string
) => {
  const response: AxiosResponse<PostShoppingCartQuantitydecResponse> =
    await api.post("api/ShoppingCart/quantitydec", {
      ProductId,
      UserGuid,
    });
  return response;
};
