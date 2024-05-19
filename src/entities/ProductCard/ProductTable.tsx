import React, { useState } from "react";
import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useLoadImage } from "@/shared/hooks/useLoadImage";
import ButtonRemoveFromCart from "@/features/ButtonRemoveFromCart/ButtonRemoveFromCart";
import QuantityProductField from "@/features/QuantityProductField/QuantityProductField";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductTable: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const image = useLoadImage(product.image);

  return (
    <TableBody>
      <TableRow key={product.id}>
        <TableCell>
          <img src={image?.src} alt={product.name} height="100" />
        </TableCell>
        <TableCell>
          <Typography variant="h6">{product.name}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1">{product.price} руб.</Typography>
        </TableCell>
        <TableCell>
          <QuantityProductField
            quantity={quantity}
            setQuantity={setQuantity}
            ProductId={product.id}
          />
        </TableCell>
        <TableCell>
          <ButtonRemoveFromCart product={product} />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ProductTable;
