import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import cartItems from '../cartItems';
import CartItem from './CartItem';
import { openModal } from '../features/modal/ModalSlice';

const CartContainer = () => {

    const dispatch = useDispatch(); // 30
    const { amount, cartItems, total } = useSelector((state) => state.cart); // 分割代入の場合カンマ区切りでほかのデータにアクセスできるためおすすめ

    if(amount < 1) { 
        return (
            <section className='cart'>
                <header>
                    <h2>買い物かご</h2>
                    <h4 className='empty-cart'>何も入ってません・・・😿</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} /> // スプレッド構文でプロップスをすべて展開している 普段はtitle={item.title}
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        合計 <span>{total}円</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全削除</button>
            </footer>
        </section>
    )
};

export default CartContainer