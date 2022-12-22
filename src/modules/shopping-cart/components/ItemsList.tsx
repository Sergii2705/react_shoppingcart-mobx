import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PRODUCTS_MAP } from "../modules/index";
import { observer } from 'mobx-react';
import store from '../../../store/basketStore';

const ItemsListWrapper = styled(Box)(() => ({
  paddingTop: 20
}));

const ItemsList: React.FC = () => {
  return (
    <ItemsListWrapper>
      {Object.entries(store.basket).map(([productId, quantity]) => {
        const product = PRODUCTS_MAP[productId];
        const price = product?.price || 0;

        return (
          <Grid container key={productId}>
            <Grid item xs={12}>
              <Typography>{product?.label}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${quantity} x $${price} = $${
                quantity * price
              }`}</Typography>
            </Grid>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                onClick={() => store.increaseItem(productId)}
              >+</Button>
              <Button
                onClick={() => store.decreaseItem(productId)}
              >-</Button>
              <Button
                onClick={() => store.deleteItem(productId)}
              >x</Button>
            </ButtonGroup>
          </Grid>
        );
      })}
    </ItemsListWrapper>
  );
};

export default observer(ItemsList);
