import React from 'react'
import { useSelector } from 'react-redux';
import { CartIcon } from '../HeroIcons'; 

const Navbar = () => {

const { amount } = useSelector((store) => store.cart); // cartはCartSliceで設定した名前　分割代入でstore.cart.amountを{ amount }にすることでstore.cartでよくなる
    // console.log(amount);

  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux Shopping</h3>
            <div className='nav-container'>
                <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar