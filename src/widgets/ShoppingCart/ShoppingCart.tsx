import { Table, TableContainer, Paper } from "@mui/material";
import CardsShoppingCart from "../CardsShoppingCart/CardsShoppingCart";
import ShoppingCartHead from "@/entities/ShoppingCartHead/ShoppingCartHead";
import CartSummaryWidget from "../CartSummaryCartSummaryWidget/CartSummaryCartSummaryWidget";

function ShoppingCart() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <ShoppingCartHead />
          <CardsShoppingCart />
        </Table>
        <CartSummaryWidget />
      </TableContainer>
    </>
  );
}

export default ShoppingCart;
