import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import { GetShoppingCartBaskedsummaryResponse } from "@/shared/api/GetShoppingCartBaskedsummary";
import ButtonRemovePromoCode from "@/features/ButtonRemovePromoCode/ButtonRemovePromoCode";
import ButtonClearCart from "@/features/ButtonClearCart/ButtonClearCart";
import ButtonApplyPromoCode from "@/features/ButtonApplyPromoCode/ButtonApplyPromoCode";
import TextFieldPromoCode from "@/features/TextFieldPromoCode/TextFieldPromoCode";

interface CartSummaryProps {
  baskedsummary: GetShoppingCartBaskedsummaryResponse;
}

const CartSummary: React.FC<CartSummaryProps> = ({ baskedsummary }) => {
  const [promoCode, setPromoCode] = useState<string>("");

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="h6">Количество товаров:</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">
              {baskedsummary.TotalProducts}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6">Скидка:</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">
              {baskedsummary.Discount} руб.
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6">Сумма к оплате:</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">{baskedsummary.Total} руб.</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <TextFieldPromoCode
              promoCode={promoCode}
              setPromoCode={setPromoCode}
            />
            <ButtonApplyPromoCode promoCode={promoCode} />
            <ButtonRemovePromoCode />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <Button variant="contained" color="primary" fullWidth>
              Оформить заказ
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <ButtonClearCart />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CartSummary;
