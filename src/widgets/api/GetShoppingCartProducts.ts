import { api } from "@/app/Api";
import { AxiosResponse } from "axios";

type Product = {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Currency: string;
  Price: number;
  DiscountedPrice: number;
  Images: {
    FileName: string;
    FileExtension: string;
    Image: string;
  }[];
};

type GetShoppingCartResponse = Product[];

export const GetShoppingCartProducts = async () => {
  const response: AxiosResponse<GetShoppingCartResponse> = await api.get(
    "api/ShoppingCart/products"
  );
  return response.data;
};
