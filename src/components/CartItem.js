import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/CartSlice' 

const CartItem = ({ id, img, title, price, amount }) => { // CartContainerで受け渡す際はスプレット構文だがこちらべは引数名を書く必要があり 28

  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
        <img src={img} alt='' />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>{price}円</h4>
            <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>削除</button>
        </div>
        <div>
            <button className='amount-btn' onClick={() => dispatch(increase(id))}>
                <PlusIcon />
            </button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn' onClick={() => {
                if(amount === 1) { // 1の場合はマイナスになるのでアイテムごと削除
                    dispatch(removeItem(id));
                    return;
                }
                dispatch(decrease(id));
            }}>
                <MinusIcon />
            </button>
        </div>
    </article>
  )
}

export default CartItem