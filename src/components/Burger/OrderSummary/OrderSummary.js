import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return(
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </li>);
        });
    return(
        <Fragment>
            <h3>Your order</h3>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaiseCanceled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.curchieseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

export default orderSummary;