import React, { useState } from "react";
import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useLoadImage } from "@/shared/hooks/useLoadImage";
import ButtonRemoveFromCart from "@/features/ButtonRemoveFromCart/ButtonRemoveFromCart";
import QuantityProductField from "@/features/QuantityProductField/QuantityProductField";
import ButtonIncrementFromCart from "@/features/ButtonIncrementFromCart/ButtonIncrementFromCart";
import ButtonDecrementFromCart from "@/features/ButtonDecrementFromCart/ButtonDecrementFromCart";

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

const ProductTableComponent: React.FC<ProductCardProps> = ({ product }) => {
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
            product={product}
          />
        </TableCell>
        <TableCell>
          <ButtonIncrementFromCart product={product} />
          <ButtonDecrementFromCart product={product} />
          <ButtonRemoveFromCart product={product} />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

const areEqual = (prevProps: ProductCardProps, nextProps: ProductCardProps) => {
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.name === nextProps.product.name &&
    prevProps.product.price === nextProps.product.price &&
    prevProps.product.image === nextProps.product.image &&
    prevProps.product.quantity === nextProps.product.quantity
  );
};

const ProductTable = React.memo(ProductTableComponent, areEqual);

export default ProductTable;
