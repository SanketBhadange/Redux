import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { STATUS,fetchProduct } from "../store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  
  //useSelector hook with destructuring
  const {data : products, status} = useSelector(state => state.product)
  const dispatcher = useDispatch();
  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response.data);
    //   } catch {
    //     console.log("Getting Error From Api");
    //   }
    // };

    // getProducts();

    dispatcher(fetchProduct())
  }, []);
     
  //Conditional rendering
      if (status === STATUS.LOADING) {
        return <h2>Loading</h2>
      }

    if (status === STATUS.ERROR) {
        return <h2>Something went wrong</h2>
    }
  const addToCart = (product) => {
    dispatcher(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card">
            <img src={product.image} alt="product" />
            <h6>{product.title}</h6>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
