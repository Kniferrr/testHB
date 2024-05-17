import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

export interface GetShoppingCartHeaderResponse {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
}

export const GetShoppingCartHeader = async () => {
  const response: AxiosResponse<GetShoppingCartHeaderResponse> = await api.get(
    "api/ShoppingCart/header"
  );
  localStorage.setItem("UsedGuid", response.data.UsedGuid);
  return response.data;
};
