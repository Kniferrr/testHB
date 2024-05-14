import { useEffect, useState } from "react";
import { GetShoppingCartHeaderResponse } from "../api/GetShoppingCartHeader";

export const useLoadImage = (
  data: GetShoppingCartHeaderResponse | undefined
) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (data) {
      const imageElement = new Image();
      imageElement.src = `data:image/jpeg;base64,${data?.LogoImg}`;

      imageElement.onload = () => {
        setImage(imageElement);
      };
    }
  }, [data]);

  return image;
};
