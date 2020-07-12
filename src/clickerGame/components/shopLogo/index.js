import React from "react";
import {useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyFormat from "react-currency-format";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Img from "../../assets";
import { red, green } from "@material-ui/core/colors";
import { manageOrder } from '../../../reduxStore/actions/game.action';


export default function ShopLogo({shopKey,img,initialCost}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onManageOrder = () => {
     
    dispatch(manageOrder(shopKey));
  }
  return (
    <ButtonBase
      focusRipple
      key={"image.title"}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      onClick={onManageOrder}
    >
        <img src={Img(img)} className={classes.imageSrc}/>
     
      <Paper variant="outlined" className={classes.buyInfoPaper} >
        <Typography
        
          className={classes.imageTitle}
        >
           <CurrencyFormat value={initialCost} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        
        </Typography>
      </Paper>
      
    </ButtonBase>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },

  buyInfoPaper: {
    position: "absolute",
    maxWidth: 80,
    minWidth:70,
    height: 25,
    borderRadius:30,
    top:70,
    zIndex: 1,
    backgroundColor: '#564D46',
   
  },
  imageTitle:{
    color:'#EFE5D9'

  },
  image: {
    position: "relative",
    width: 80,
    height: 80,
    
   
  },
  imageSrc: {
    position: "absolute",
    width: 75,
    height: 75,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    elevation: 3,
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
}));
