import React from 'react';
import classes from '../../../scss/ui/Card.module.scss';


function Card(props) {
  return <div className={classes.card}>{props.children}</div>; 
}
export default Card;