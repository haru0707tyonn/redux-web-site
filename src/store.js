// npm install @reduxjs/toolkit　と　npm i react-redux　を行った

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({ // ストアを設定する 
    reducer: {
        cart: cartReducer, // featuresフォルダ内にあるファイル　これは公式がfeaturesにしているため
        modal: modalReducer, // 37
    },
});