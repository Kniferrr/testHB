import React, { useState } from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useLoadImage } from "@/shared/hooks/useLoadImage";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onRemoveFromCart: (ProductId: number) => void;
  handleQuantityChange: (ProductId: number, count: number) => void;
}

const ProductTable: React.FC<ProductCardProps> = ({
  product,
  onRemoveFromCart,
  handleQuantityChange,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleRemoveFromCart = () => {
    onRemoveFromCart(product.id);
  };

  const onHandleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const count = Number(event.target.value);
    setQuantity(count);
    handleQuantityChange(product.id, count);
  };

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
          <TextField
            type="number"
            value={quantity}
            onChange={onHandleQuantityChange}
            InputProps={{ inputProps: { min: 1, step: 1 } }}
            InputLabelProps={{ shrink: true }}
            label="Количество"
            variant="outlined"
            size="small"
            fullWidth
          />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="Remove from cart"
            onClick={handleRemoveFromCart}
          >
            <RemoveShoppingCartIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ProductTable;
