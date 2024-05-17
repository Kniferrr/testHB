import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface PostShoppingCartDiscountResponse {
  status: number;
}

export const PostShoppingCartDiscount = async (
  DiscountName: string,
  UsedGuid: string
) => {
  const response: AxiosResponse<PostShoppingCartDiscountResponse> =
    await api.post("api/ShoppingCart/discount", {
      DiscountName,
      UsedGuid,
    });
  return response;
};
