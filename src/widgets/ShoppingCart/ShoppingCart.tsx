import { Table, TableContainer, Paper } from "@mui/material";
import CardsShoppingCart from "../CardsShoppingCart/CardsShoppingCart";
import ShoppingCartHead from "@/entities/ShoppingCartHead/ShoppingCartHead";
import CartSummaryWindget from "../CartSummaryWindget/CartSummaryWindget";

function ShoppingCart() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <ShoppingCartHead />
          <CardsShoppingCart />
        </Table>
        <CartSummaryWindget />
      </TableContainer>
    </>
  );
}

export default ShoppingCart;
