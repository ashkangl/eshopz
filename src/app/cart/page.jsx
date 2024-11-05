"use client"
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../components/redux/cartSlice';

const Page = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
          (accumulator, item) => accumulator + item.quantity * item.price,
          0
        );
      };
    
    const TotalPrice = getTotalPrice().toFixed(2);

    return(
        <div>
            {cart.map((item) => (
                <div>
                <div>{item.title}</div> 
                <button className='rounded shadow-lg bg-slate-100 px-3 py-1 hover:bg-slate-400 mr-1' onClick={() => dispatch(incrementQuantity(item.id))}>
              +
            </button>
            <button className='rounded shadow-lg bg-slate-100 px-3 py-1 hover:bg-slate-400 mr-1' onClick={() => dispatch(decrementQuantity(item.id))}>
              -
            </button>
            <button className='rounded shadow-lg bg-slate-100 px-3 py-1 hover:bg-slate-400' onClick={() => dispatch(removeFromCart(item.id))}>
              x
            </button>   
                </div>
            ))}
        </div>
    )
}

export default Page