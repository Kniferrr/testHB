import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartLink = () => {
  return (
    <>
      <IconButton aria-label="cart" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
};
