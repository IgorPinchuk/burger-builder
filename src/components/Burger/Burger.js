import React from 'react';

import Ingredient from './Ingredient/Ingredient';
import classes from './Burger.module.css';

const burger = (props) => {

    let taransformedIngrediends = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <Ingredient key={ingredientKey + index} type={ingredientKey} clicked={() => props.ingredientRemoved(ingredientKey)}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(taransformedIngrediends.length === 0){
        taransformedIngrediends = <p>Please Add ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {taransformedIngrediends}
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger;