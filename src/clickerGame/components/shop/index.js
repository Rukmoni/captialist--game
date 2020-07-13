import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBusiness } from "../../../reduxStore/actions/game.action";

import CurrencyFormat from "react-currency-format";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { green } from "@material-ui/core/colors";
import ShopLogo from "../shopLogo";
import { Line } from "rc-progress";

export default function Shop(props) {
  const shopsConfig = useSelector(
    (state) => state.businessGame.businessesConfig
  );
  const shopsList = useSelector((state) => state.businessGame.businesses);
  const [percent, setpercent] = useState(0);
  const [timer, settimer] = useState("00:00:00")
  const classes = useStyles();
  const dispatch = useDispatch();
  const shopKey = props.shopKey;
  const img = props.img;
  const title = props.title;
  const initialCost = props.initialCost;
  const managerPrice = props.managerPrice;
  const owner = props.owner;
  const ms = shopsList[shopKey]?.timer;
  const initialTime = shopsConfig[shopKey].initialTime;

  const onBuyShop = () => {
    dispatch(buyBusiness(shopKey));
  };
  useEffect(() => {
  

    if (ms <= 0 || !ms) {
      setpercent(0);
      settimer("00:00:00");
    } else {
      /** */
      const timeLeft = initialTime - ms;
      const percent = Math.round((timeLeft * 100) / initialTime);
      setpercent(percent);

      let secNum = ms / 1000;
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - (hours * 3600)) / 60);
    let seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    let timer=hours + ':' + minutes + ':' + seconds;
settimer(timer);

    }
  }, [ms]);
  
  return (
    <div className={classes.root}>
     
      {!props.owner && (
        <Button
          variant="contained"
          size="medium"
          color="primary"
          disableElevation
          className={classes.buyButton}
          onClick={onBuyShop}
        >
          Acquire This Shop{" "}
          <span>
            {" "}
            <CurrencyFormat
              value={initialCost}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" $"}
            />
          </span>
        </Button>
      )}
       <Paper className={classes.paper}>
      <div style={{width:'100%',marginTop:'0px'}}>
        {/*  ProgressLine */}
        <Line
          strokeWidth="3"
          trailWidth={3}
          strokeLinecap="square"
          trailColor="gray"
          strokeColor="yellowgreen"
          percent={percent}
        />

        
      </div>
      <div style={{width:"100%",margin:'10px'}}>
        <div style={{float:'left'}}>
      <ShopLogo shopKey={shopKey} img={props.img} initialCost={initialCost} />
      </div>
      <span>
      {timer}
      <div style={{marginTop:'30px'}}>
      <Button
          variant="contained"
         
          color="primary"
          disableElevation
          
          onClick={onBuyShop}
        >
          Buy
          </Button>
          <span> </span>
          <Button
          variant="contained"
         
          color="primary"
          disableElevation
          
          onClick={onBuyShop}
        >
          Hire Manager
          </Button>
          </div>
          </span>
      </div>
      </Paper>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin: 30,
    marginLeft:80,
    width:300
  },
  buyButton: {
    width: 300,

    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  paper: {
    width: 350,
    height: 160,
  },
  paperOwner: {
    width: 300,
    height: 200,
  },
  paperDisabled: {
    width: 300,
    height: 200,
  },
  image: {
    position: "relative",
    width: 100,
    height: 100,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  imageSrc: {
    position: "absolute",
    width: 100,
    height: 100,
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
