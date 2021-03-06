import React, {Fragment, Component} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    //Could be functional conponent.
    componentDidUpdate(){
    };

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return(
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                </li>);
        });

        return(
            <Fragment>
                <h3>Your order</h3>
                <p>Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType="Danger" clicked={this.props.purchaiseCanceled}>CANCEL</Button>
                <Button buttonType="Success" clicked={this.props.curchieseContinued}>CONTINUE</Button>
            </Fragment>
        );
    };
};

export default OrderSummary;