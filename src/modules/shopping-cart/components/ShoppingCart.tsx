import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { observer } from 'mobx-react';
import AddItemForm from './AddItemForm';
import ItemsList from "./ItemsList";
import Total from "./Total";
import store from '../../../store/basketStore';

const ShoppingCardWrapper = styled(Paper)(() => ({
  width: 600,
  margin: "auto",
  padding: 50,
  minHeight: 500
}));

const ShoppingCartHeader = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: 24
}));

const ShoppingCart = () => {

  return (
    <ShoppingCardWrapper>
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm/>
      {!!Object.keys(store.basket).length &&
        <>
          <ItemsList />
          <Total />
        </>        
      }
    </ShoppingCardWrapper>
  );
};

export default observer(ShoppingCart);
