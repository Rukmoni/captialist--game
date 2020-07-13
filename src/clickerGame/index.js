import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {Paper,Grid} from "@material-ui/core";
import DashBoard from './components/dashBoard';
import Shop from "./components/shop/index";


const Game = () => {
  const totalCashAmount = useSelector((state) => state.businessGame.totalCashAmount);
  const shopslist = useSelector((state) => state.businessGame.businesses);
  const shopsConfig = useSelector( (state) => state.businessGame.businessesConfig);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.gameOuterPaper}>
    
      <DashBoard totalCashAmount={totalCashAmount}/>
      
        <Paper className={classes.gameInnerPaper}>
          <Grid container spacing={3} direction="column">
            {Object.keys(shopsConfig).map((shopKey) => (
              <Grid item xs={6} sm={3}>
                <Shop
                  key={shopKey}
                  shopKey={shopKey}
                  title={shopsConfig[shopKey].title}
                  img={shopsConfig[shopKey].img}
                  initialCost={shopsConfig[shopKey].initialCost}
                  managerPrice={shopsConfig[shopKey].managerPrice}
                  owner={shopslist[shopKey]?.owner}
                  initialTime={shopsConfig[shopKey].initialTime}
                  totalCashAmount={totalCashAmount}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
};
export default Game;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 15,
    marginLeft: 80,
    width: 540,
    height: 70,
    padding: 10,
    backgroundColor: "#E8E0D6",
  },
  gameOuterPaper: {
    margin: 15,
    width: 700,
    height: 1000,
    padding: 10,
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#564D46",
  },
  gameInnerPaper: {
    margin: 80,
    marginTop: 10,
    width: 550,
    height: 900,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#72685F",
  },
}));
