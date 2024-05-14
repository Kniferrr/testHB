import { useQuery } from "react-query";
import { GetShoppingCartHeader } from "../api/GetShoppingCartHeader";
import SkeletonHeader from "./SkeletonHeader";
import { useLoadImage } from "../hooks/useLoadImage";

const Header = () => {
  const { data } = useQuery("GetShoppingCartHeader", async () => {
    const response = await GetShoppingCartHeader();
    return response;
  });

  const image = useLoadImage(data);

  return <SkeletonHeader logoImg={image?.src} userName={data?.UserName} />;
};

export default Header;
