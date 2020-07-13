import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBusiness } from "../../../reduxStore/actions/game.action";

import CurrencyFormat from "react-currency-format";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { green } from "@material-ui/core/colors";
import ShopLogo from "../shopLogo";

import { Line } from "rc-progress";
import utils from '../../utlis';
import {ExpandButton, HireManagerButton} from "../actionButtons";

export default function Shop(props) {
  const shopsConfig = useSelector(
    (state) => state.businessGame.businessesConfig
  );
  const shopsList = useSelector((state) => state.businessGame.businesses);
  const [percent, setpercent] = useState(0);
  const [timer, settimer] = useState("00:00:00");
  const classes = useStyles();
  const dispatch = useDispatch();
  const shopKey = props.shopKey;

  const initialCost = props.initialCost;
  const managerPrice = props.managerPrice;
  const owner = props.owner;
  const ms = shopsList[shopKey]?.timer;
  const manager=shopsList[shopKey]?.manager;
  const initialTime = shopsConfig[shopKey].initialTime;
    const level=shopsList[shopKey]?.level;

  const onBuyShop = () => {
    dispatch(buyBusiness(shopKey));
  };

  const calcNextExpandCost = () => {
    const rateGrowth = shopsConfig[shopKey].coefficient;
    const costBase = shopsConfig[shopKey].initialCost;
    const businessLevel = shopsList[shopKey] && shopsList[shopKey].level ? shopsList[shopKey].level : 1;

    return utils.getNextExpandCost(costBase, businessLevel, rateGrowth);
  }
  const onExpandBusiness=()=>{

  } 
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
      let minutes = Math.floor((secNum - hours * 3600) / 60);
      let seconds = secNum - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      let timer = hours + ":" + minutes + ":" + seconds;
      settimer(timer);
    }
  }, [ms]);
  const buyShopButton = () => {
    return (
      <Button
        variant="contained"
        disableElevation
        className={classes.buyShopButton}
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
    );
  };

  return (
    <div className={classes.root}>
      {!owner && buyShopButton()}

      <Paper className={props.owner ? classes.paper : classes.paperOwner}>
        <div style={{ width: "100%", marginTop: "0px" }}>
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
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <ShopLogo
              shopKey={shopKey}
              img={props.img}
              initialCost={initialCost}
              level={level}
            />
          </div>
          <div style={{ float: "left", marginLeft: "80px", marginTop: "20px" }}>
            <div>{timer}</div>
            <div>
              <ExpandButton
              shopKey={shopKey}
              cost= {calcNextExpandCost()}
              />
            </div>
          </div>
          <div style={{ float: "right" }}>
          <HireManagerButton shopKey={shopKey} managerPrice={managerPrice}/>
           
          </div>
        </div>
      </Paper>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  buyShopButton: {
    width: 550,

    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  hireButton: {
    height: 90,
  },
  
  paper: {
    width: 550,
    height: 120,
    opacity: 0.7,
  },
  paperOwner: {
    width: 550,
    height: 120,
    opacity: 0.3,
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
