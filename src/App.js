import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const toggleButton = useSelector(state => state.ui.cardIsVisible)

  return (
    <Layout>
      {
        toggleButton && <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
