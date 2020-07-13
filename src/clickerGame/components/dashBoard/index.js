import React from 'react';
import CurrencyFormat from "react-currency-format";
import { makeStyles } from "@material-ui/core/styles";
import {Paper,Typography} from "@material-ui/core";

const DashBoard=({totalCashAmount})=> {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}>
            <Typography className={classes.cashFormat}>
                Total Cash :
            <CurrencyFormat value={totalCashAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
        </Paper>
    )

}

export default DashBoard;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: 15,
      marginLeft: 80,
      width: 540,
      height: 50,
      padding: 10,
      backgroundColor: "#E8E0D6",
    },
    cashFormat:{
        fontSize:28,
        fontWeight:'bold',
        color:"#FF6600"
    }
}))