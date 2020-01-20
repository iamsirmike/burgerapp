import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import './Burger.css';

const Burger = props => {
	const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
		return [...Array(props.ingredients[igKey])].map((_, i) => {
			return <BurgerIngredient key={igKey + i} type={igKey} />;
		});
	});
	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{/* <BurgerIngredient type="cheese" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="salad" /> */}
            {transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
