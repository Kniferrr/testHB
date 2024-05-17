import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

export interface GetShoppingCartBaskedsummaryResponse {
  TotalProducts: number;
  Discount: number;
  Total: number;
}

export const GetShoppingCartBaskedsummary = async () => {
  const response: AxiosResponse<GetShoppingCartBaskedsummaryResponse> =
    await api.get("api/ShoppingCart/baskedsummary");
  return response.data;
};
