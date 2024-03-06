import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  square: {
    border: "1px solid",
    height: "100px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  },
}));

const Square = (props) => {
  const classes = useStyles();

  return (
    <ButtonBase
      onClick={props.onClick}
      className={classes.square}
      component="div"
    >
      <Typography variant="h5" component="h5">
        {props.value}
      </Typography>
    </ButtonBase>
  );
};

export default Square;
