import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardContent, 
  Typography 
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProductCard (props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} variant="h5" component="h2">
          Title: {props.title}
        </Typography>
        {/* <Typography variant="5" component="h2" >
         Title is: {props.title} 
        </Typography> */}
        <Typography variant="h5" component="h3">
         Price: {props.price}
        </Typography>
        <Typography variant="body2" component="p">
        createdAt: {props.createdAt}
        </Typography>
      </CardContent>
    </Card>
  ) 
}