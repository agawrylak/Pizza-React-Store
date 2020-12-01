import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialogPaper: {
    minHeight: "10vh",
    minWidth: "20vh",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
});

const getRandomDeliveryTime = () => {
  return Math.floor(Math.random() * 90) + 45;
};
const OrderDialog = (props) => {
  const classes = useStyles();
  const [deliveryTime, setDeliveryTime] = useState(90);

  useEffect(() => {
    setDeliveryTime(getRandomDeliveryTime());
  }, []);

  return (
    <div>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        onClose={props.onClose}
        open={props.open}
      >
        Twoje zamówienie zostało przyjęte!
        <br />
        Oczekiwany czas: {deliveryTime} minut.
      </Dialog>
    </div>
  );
};

export default OrderDialog;
