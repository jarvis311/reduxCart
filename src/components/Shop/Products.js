import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Product = [
    {id:1, title:'This is item-1', description:'This is a description1', price:15},
    {id:2, title:'This is item-2', description:'This is a description2', price:50},
    {id:3, title:'This is item-3', description:'This is a description3', price:35},
    {id:4, title:'This is item-4', description:'This is a description4', price:5},
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          Product.map(product => (
            <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          ))
        }

      </ul>
    </section>
  );
};

export default Products;
