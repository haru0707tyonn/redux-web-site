import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期化
const initialState = {
    cartItems: cartItems, // 
    amount: 4, // 合計の数
    total: 0, // 合計金額
}

// スライスの作成
const cartSlice = createSlice({
    name: "cart", // useSelectorで指定する名前
    initialState, // 初期状態
    reducers: {
        clearCart: (state) => { // 29 アクションが生成される clearCartを呼べばディスパッチされる
            // state.cartItems = [];
            return { cartItems: [], amount: 0, total: 0 }; // 30 
        },
        removeItem: (state, action) => {
            // console.log(action); // actionはtypeとpayloadを含む
            const itemId = action.payload; // CartItem.jsのid
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId); // trueを残す　クリックしたのを削除するロジック
        },
        increase: (state, action) => { // 33 プラスのボタンを押すと商品が1追加されるロジック
          const cartItem = state.cartItems.find(
            (item) => item.id === action.payload
          );
          cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => { 
          const cartItem = state.cartItems.find(
            (item) => item.id === action.payload
          );
          cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => { // 35 app.jsで記述
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) =>{ // forEachで1つずつ取り出す
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;