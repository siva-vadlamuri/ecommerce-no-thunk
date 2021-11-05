import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { addToCart } from "../../redux/ProductActions/ProductActions";
import FakestoreApi from "../../_apis/FakestoreApi";
import {useDispatch} from 'react-redux';
function Product() {
  const [product, setProduct] = useState({});
  const [addData,setAddData] = useState('Add to Cart');
  const { id } = useParams();
  const dispatch = useDispatch();

  const getSingleProduct = async () => {
    const { data } = await FakestoreApi.get(`products/${id}`);
    setProduct(data);
  };

//   Add to cart Functionality 
const handleClick = (product)=>{
    console.log(product);
    dispatch(addToCart(product));
    setAddData('Added')
}

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="container">
      <div className="row  border border-primary mt-2">
        <div className="col-lg-6 p-5 mt-3">
          <div>
            <img
              className="img-fluid p-5"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <div className="col-lg-6  border-start border-primary">
          <div className="product__title mt-2">
            <h3 className="p-2">{product.title}</h3>
            <div className="product__price">
              <span className="bg-info text-light p-1">
                Price : $ {product.price}
              </span>
              <div className="product__category mt-3">
                <div className="bg-secondary  text-white p-2">
                  Category : {product.category}
                </div>
              </div>
              <div className="product__description mt-3">
                <p className="p-2">{product.description}</p>
              </div>
              <div className="product__addtocart mt-3">
                <button className="btn btn-info px-3 py-2" onClick={()=>{handleClick(product)}}>{addData}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
