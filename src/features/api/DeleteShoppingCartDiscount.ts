import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

interface DeleteShoppingCartDiscountResponse {
  status: number;
}

export const DeleteShoppingCartDiscount = async () => {
  const response: AxiosResponse<DeleteShoppingCartDiscountResponse> =
    await api.delete("api/ShoppingCart/discount");
  return response;
};
