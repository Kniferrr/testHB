import FillCartButton from "@/entities/CartFillButton";
import { PostAdminCreate } from "./api/PostAdminCreate";

function CartFill() {
  return (
    <>
      <FillCartButton handleClick={PostAdminCreate} />
    </>
  );
}

export default CartFill;
