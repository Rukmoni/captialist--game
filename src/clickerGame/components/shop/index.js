import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyShop } from '../../../reduxStore/actions/shops.action';
import CurrencyFormat from "react-currency-format";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function Shop(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shopKey=props.shopKey;
  const title=props.title;
  const initialCost=props.initialCost;
  const managerPrice=props.managerPrice;
  const owner=props.owner;

  const onBuyShop = () => {
      console.log("onBuy",shopKey)
    dispatch(buyShop(shopKey));
  }
  return (<div className={classes.root}>
       <Button
              variant="contained"
              size="medium"
              color="primary"
              disableElevation
              className={classes.buyButton}
              onClick={onBuyShop}
            >
              Buy<CurrencyFormat value={props.initialCost} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Button>
  </div>);
}
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  buyButton:{
      width:300,
      
  },
  paperOwner:{
      width:300,
      height:200
      
  },
  paperDisabled:{
    width:300,
    height:200
  }
}));
