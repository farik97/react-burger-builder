import React from 'react';
import classes from './BurgerControl.css';

const BurgerControl = (props) => (
    <div className={classes.BurgerControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.added} className={classes.More}>More</button>
        <button 
            onClick={props.removed}
            className={classes.Less}
            disabled={props.disabled}
            >Less</button>
    </div>
);

export default BurgerControl;