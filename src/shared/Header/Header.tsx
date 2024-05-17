import { useQuery } from "react-query";
import { GetShoppingCartHeader } from "../api/GetShoppingCartHeader";
import SkeletonHeader from "./SkeletonHeader";
import { useLoadImage } from "../hooks/useLoadImage";
import { GetShoppingCartBaskedsummary } from "../api/GetShoppingCartBaskedsummary";

const Header = () => {
  const { data } = useQuery(
    "GetShoppingCartHeader",
    async () => {
      const response = await GetShoppingCartHeader();
      return response;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const Baskedsummary = useQuery(
    "GetShoppingCartBaskedsummary",
    async () => {
      const response = await GetShoppingCartBaskedsummary();
      return response;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const image = useLoadImage(data?.LogoImg);

  return (
    <SkeletonHeader
      logoImg={image?.src}
      userName={data?.UserName}
      TotalProducts={Baskedsummary.data?.TotalProducts || 0}
    />
  );
};

export default Header;
