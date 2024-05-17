import { TableCell, TableHead, TableRow } from "@mui/material";
function ShoppingCartHead() {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Изображение</TableCell>
          <TableCell>Название</TableCell>
          <TableCell>Цена</TableCell>
          <TableCell>Количество</TableCell>
          <TableCell>Действия</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
}

export default ShoppingCartHead;
