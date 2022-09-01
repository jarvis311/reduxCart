import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchData, sendData } from './store/cart-action';




let initialState = true;
function App() {
  const toggleButton = useSelector(state => state.ui.cardIsVisible)
  const cart = useSelector(stete => stete.cart)
  const dispatch = useDispatch()
  const notification =useSelector(state => state.ui.notification)
  
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  useEffect(() => {
    if(initialState){
      initialState = false
      return
    }
    
      dispatch(sendData(cart))
    
    
  }, [cart,dispatch])
  
  return (
    <>
    {
      notification && <Notification status={notification.state} title={notification.title} message={notification.message}/>
    }
    <Layout>
      {
        toggleButton && <Cart />
      }
      <Products />
    </Layout>
      </>
  );
}

export default App;
