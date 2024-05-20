import CartFillWindget from "@/widgets/CartFillWindget/CartFillWindget";
import { Box } from "@mui/material";

function Cart() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CartFillWindget />
      </Box>
    </>
  );
}

export default Cart;
