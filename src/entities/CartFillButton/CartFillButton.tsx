import { Button } from "@mui/material";

function FillCartButton({ handleClick }: { handleClick: () => void }) {
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        fill the shopping cart
      </Button>
    </>
  );
}

export default FillCartButton;
