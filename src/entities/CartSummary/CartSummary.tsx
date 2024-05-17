import React, { ChangeEvent, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { GetShoppingCartBaskedsummaryResponse } from "@/shared/api/GetShoppingCartBaskedsummary";

interface CartSummaryProps {
  baskedsummary: GetShoppingCartBaskedsummaryResponse;
  handleApplyPromoCode: (code: string) => void;
  handleRemovePromoCode: (code: string) => void;
  handleClearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  baskedsummary,
  handleApplyPromoCode,
  handleRemovePromoCode,
  handleClearCart,
}) => {
  const [promoCode, setPromoCode] = useState<string>("");

  const onApplyPromoCode = () => {
    handleApplyPromoCode(promoCode);
  };

  const onRemovePromoCode = () => {
    handleRemovePromoCode(promoCode);
  };

  const onClearCart = () => {
    handleClearCart();
  };

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
            <TextField
              label="Промокод"
              variant="outlined"
              size="small"
              fullWidth
              value={promoCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPromoCode(e.target.value)
              }
              InputLabelProps={{ shrink: true }}
            />
            <Button
              onClick={onApplyPromoCode}
              variant="contained"
              color="primary"
            >
              Применить
            </Button>
            <Button
              onClick={onRemovePromoCode}
              variant="outlined"
              color="secondary"
            >
              Удалить
            </Button>
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
            <Button
              onClick={onClearCart}
              variant="outlined"
              color="secondary"
              fullWidth
            >
              Очистить корзину
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CartSummary;
