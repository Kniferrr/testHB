import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface PostShoppingCartChangequantityResponse {
  status: number;
}

export const PostShoppingCartChangequantity = async (
  ProductId: number,
  UserGuid: string,
  Value: number
) => {
  const response: AxiosResponse<PostShoppingCartChangequantityResponse> =
    await api.post("api/ShoppingCart/changequantity", {
      ProductId,
      UserGuid,
      Value,
    });
  return response;
};
