import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyBusiness } from '../../../reduxStore/actions/game.action';

import CurrencyFormat from "react-currency-format";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { green } from "@material-ui/core/colors";
import ShopLogo from "../shopLogo";

export default function Shop(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shopKey=props.shopKey;
  const img=props.img;
  const title=props.title;
  const initialCost=props.initialCost;
  const managerPrice=props.managerPrice;
  const owner=props.owner;

  const onBuyShop = () => {
     
    dispatch(buyBusiness(shopKey));
  }
  return (<div className={classes.root}>
     {!props.owner &&
       <Button
              variant="contained"
              size="medium"
              color="primary"
              disableElevation
              className={classes.buyButton}
              onClick={onBuyShop}
            >
              Acquire This Shop <span> <CurrencyFormat value={initialCost} displayType={'text'} thousandSeparator={true} prefix={' $'} /></span>
          </Button>
}
          <div>
         <ShopLogo
         shopKey={shopKey}
         img={props.img}
         initialCost={initialCost}
          />
          </div>
          
  </div>);
}
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin:20
  },
  buyButton:{
      width:300,
      
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
      
  },
  paperOwner:{
      width:300,
      height:200
      
  },
  paperDisabled:{
    width:300,
    height:200
  },
  image: {
    position: 'relative',
    width:100,
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  imageSrc: {
    position: 'absolute',
    width:100,
    height:100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    elevation:3
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  
}));
