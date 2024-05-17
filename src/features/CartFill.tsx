import { queryClient } from "@/main";
import { PostAdminCreate } from "./api/PostAdminCreate";
import { useMutation } from "react-query";
import FillCartButton from "@/entities/CartFillButton";

function CartFill() {
  const mutation = useMutation(() => PostAdminCreate(), {
    onSuccess: () => {
      queryClient.invalidateQueries("GetShoppingCartBaskedsummary");
    },
  });

  const onPostAdminCreate = () => {
    mutation.mutate();
  };

  return (
    <>
      <FillCartButton handleClick={onPostAdminCreate} />
    </>
  );
}

export default CartFill;
