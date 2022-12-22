import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { observer } from 'mobx-react';
import store from '../../../store/basketStore';

const TotalWrapper = styled(Box)(() => ({
  paddingTop: 40
}));

const Total:React.FC = () => {
  return (
    <TotalWrapper>
      <Grid container>
        <Grid item xs={6}>
          <Typography>{`Total: $${store.total}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button 
            variant="outlined"
            onClick={() => store.clearAll()}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </TotalWrapper>
  );
};

export default observer(Total);