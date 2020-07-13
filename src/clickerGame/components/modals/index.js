import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Modal } from "@material-ui/core";


const Modals = () => {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default Modals;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 150,
    marginLeft: 300,
    width: 700,
    height: 400,
    padding: 10,
    backgroundColor: "#E8E0D6",
  },
  cashFormat: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6600",
  },
}));
