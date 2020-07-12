import React from "react";
import {useSelector,useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shop from './components/shop/index';

const Game=()=> {

  const totalCashAmount = useSelector((state) => state.businessGame.totalCashAmount);
  const showIdleDialog = useSelector((state) => state.businessGame.showIdleDialog);
  const idleTime = useSelector((state) => state.businessGame.idleTime);
  const idleRevenue = useSelector((state) => state.businessGame.idleRevenue);
  const shopslist = useSelector((state) => state.businessGame.ShopsList);
  const shopsConfig = useSelector((state) => state.businessGame.shopsConfig); 
 

  const dispatch = useDispatch();
  const classes = useStyles();
  const getGrid=()=>{
      return(
        <Grid container item xs={6} spacing={1}>
        <Grid container item xs={12} spacing={1}>
        <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Paper className={classes.paper}>item</Paper>
        </Grid>
      </Grid>
      )
  }

 
  return(
    <div className={classes.root}>
        
        <Grid container spacing={1}>
       
       {Object.keys(shopsConfig).map((shopKey)=>
        <Grid container item xs={12} spacing={1}>
        <Shop
         key={shopKey}
         shopKey={shopKey}
         title={shopsConfig[shopKey].title}
         initialCost={shopsConfig[shopKey].initialCost}
         managerPrice={shopsConfig[shopKey].managerPrice}
         owner={shopslist[shopKey]?.owner}
        />
        </Grid>)}

     
     </Grid>
     
    </div>

  );
    
}
export default Game;
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        margin:15,
        width:400,
        height:200,
      padding: 10,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));