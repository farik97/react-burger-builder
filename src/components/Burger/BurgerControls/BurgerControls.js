import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Hash Brown', type: 'hashBrown'},
    {label: 'Turkey', type: 'turkey'}
];

const BurgerControls = (props) => (
    <div className={classes.BurgerControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> USD</p>
        {controls.map( ctrl => (
            <BurgerControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=> props.ingredientAdded(ctrl.type)}
                removed={()=> props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button
            disabled={!props.purchasable} 
            className={classes.OrderButton}
            onClick={props.purchasing}>
                <strong>Order Now!</strong></button>
    </div>
);

export default BurgerControls;