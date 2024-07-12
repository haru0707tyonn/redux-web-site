import { useSelector, useDispatch } from 'react-redux'; // store stateの状態にアクセスできる
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispath = useDispatch();
  const { cartItems } = useSelector((state) => state.cart); // 35
  const { isOpen } = useSelector((state) => state.modal); // 38
  useEffect(() => {
    dispath(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
