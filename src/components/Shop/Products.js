import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Product = [
    {id:1, title:'This is title1', description:'This is a description1', price:5},
    {id:2, title:'This is title2', description:'This is a description2', price:5},
    {id:3, title:'This is title3', description:'This is a description3', price:5},
    {id:4, title:'This is title4', description:'This is a description4', price:5},
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
