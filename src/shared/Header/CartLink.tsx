import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartLinkProps {
  TotalProducts: number;
}

export const CartLink = ({ TotalProducts }: CartLinkProps) => {
  return (
    <>
      <IconButton aria-label="cart" color="inherit">
        <Badge badgeContent={TotalProducts} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
};
