import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;
  const dispatch = useDispatch()
  const addCartItem = () => {
    dispatch(cartAction.addCart({
      id,
      title,
      price,
    }))
  }

  const removeCartItem = () => {
    dispatch(cartAction.removeCart(id))
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItem}>-</button>
          <button onClick={addCartItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
