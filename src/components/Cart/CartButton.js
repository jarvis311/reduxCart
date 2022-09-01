import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { uiAction } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggelHandler = () => {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick = {toggelHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
