import FakestoreApi from "../../_apis/FakestoreApi";
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import './Products.css'
import { setProductsData } from "../../redux/ProductActions/ProductActions";
import { useDispatch,useSelector } from "react-redux";

function Products() {
    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);

    const productsData =  useSelector((state)=>state.productsData.products);
    console.log(productsData);
    const getTheProductsFromServer = async()=>{
        const {data} = await  FakestoreApi.get('/products');
        dispatch(setProductsData(data));
        setProducts(data);
        
    }
    useEffect(() => {
        // console.log(fetchProducts());
        // dispatch(fetchProducts()); 
        getTheProductsFromServer();
        
        // setProductsData(products);
      }, []);
    return (
        <div>
             <div>
      <div className="container py-5">
        <div className="row">
          {productsData &&  productsData?.map((product) => (
           
            <div className="col-md-3">
              <Link to={`/product/${product.id}`}>
                <div className="card card__section my-2 text-dark"  key={product.id}>
                  
                    <img
                    height={250}
                      src={product.image}
                      className="card-img-top img-fluid image-section p-2"
                      alt=""
                    />
                 
                  <div className="card-body">
                    <h5 className="card-title title__section">{product.title}</h5>
                    
                    
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}

export default Products
