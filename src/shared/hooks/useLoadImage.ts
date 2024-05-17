import { useEffect, useState } from "react";

export const useLoadImage = (img: string | undefined) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (img) {
      const imageElement = new Image();
      imageElement.src = `data:image/jpeg;base64,${img}`;

      imageElement.onload = () => {
        setImage(imageElement);
      };
    }
  }, [img]);

  return image;
};
