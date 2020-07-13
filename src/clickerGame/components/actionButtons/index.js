import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useSelector,useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Typography} from "@material-ui/core";
import {expandBusiness,hireManager} from '../../../reduxStore/actions/game.action';



export const ExpandButton=(props)=> {
    const dispatch = useDispatch();
    const totalCashAmount = useSelector((state) => state.businessGame.totalCashAmount);
    console.log("ExpanButton",props.cost)
    const classes = useStyles();

    const onExpandBusiness = () => () => {
        dispatch(expandBusiness(props.shopKey));
      }
    return (
        <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.expandButton}
                disabled={totalCashAmount<props.cost}
                onClick={onExpandBusiness()}
              >
               Buy <CurrencyFormat value={props.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </Button>
    )
}

export const HireManagerButton=({shopKey,managerPrice})=>{
  const totalCashAmount = useSelector((state) => state.businessGame.totalCashAmount);
  const dispatch=useDispatch();
  const classes = useStyles();
  const onHireManager = () => () => {
    dispatch(hireManager(shopKey));
  }
  return (
    <Button
    variant="contained"
    color="primary"
    disableElevation
    className={classes.hireButton} 
    disabled={totalCashAmount<managerPrice}
    onClick={onHireManager()}
  >
          <Typography>HireManager <br />
          <CurrencyFormat value={managerPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </Typography>
          </Button>
)

}
//export  ExpandButton;
const useStyles = makeStyles((theme) => ({

    expandButton: {
        width: 170,
      },
      hireButton: {
        width:150,
        height: 90,
      },
}))
