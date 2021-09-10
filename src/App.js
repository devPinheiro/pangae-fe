import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  
  useQuery,
  gql,
} from '@apollo/client';
import Header from './components/header';
import Button from './components/button';
import CartModal from './components/cartModal';

function App() {

  const [cartItem, setCartItem] = useState([])
  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    console.log('====================================');
    console.log(cartItem);
    console.log('====================================');
    // if (cartItem.map((it) => it.id === item.id)) cartItem.push(item)
    if(cartItem.filter((it) => it.id === item.id).length > 0) {
      return;
    } else {
      cartItem.push(item)
    }
  }


  const fetchProducts = gql`
    query {
      products {
        image_url
        title
        id
        price(currency: USD)
      }
    }
  `;

  const { loading, error, data } = useQuery(fetchProducts);

  if (loading) return (
    <div>
      {' '}
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
  if (error) return <p>Error :(</p>;

  return (
    <div className='App'>
      <Header />

      <div className='product-tray'>
        <CartModal item={cartItem}/>
        
        {data.products.map(({ image_url, price, title, id }) => (
          <div key={id}>
            <img src={image_url} alt='' width='150px' height='150px' />
            <p>{title}</p>
            <p>$ {price}</p>
            <Button
              children='Add to Cart'
              click={() => addToCart({ image_url, price, title, id })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
