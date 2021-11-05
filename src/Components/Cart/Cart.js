import { useState } from 'react';
import {useSelector} from 'react-redux';

function Cart() {
    const [total, setTotal] = useState(0);
    const cartData = useSelector(state => state.productsData.cartData);
   const totalPrice = cartData.reduce((total,accumulator)=>{
        return parseFloat(accumulator.price) + parseFloat(total);
    },0)
    
    console.log(totalPrice);
    // setTotal(totalPrice);
    return (
        <div>
            {/* {cartData} */}
            {/* <h2>Cart Page</h2> */}
            <div className="products__total">
              <h2>Total Price :{totalPrice}</h2> 
            </div>
            <div className="container mt-3 border border-dark">
                {
                    cartData && cartData.length>0 ? (cartData.map((cart)=>(
                        <div className="row mt-3">
                         
                             <div className="col-md-4">
                                 <img className="img-fluid" height="250px" src={cart.image} alt={cart.title} />
                             </div>
                             <div className="col-md-8 ">
                                 <div className="mt-3 p-2">
                                     <div>
                                     <h2>Title :{cart.title}</h2>
                                     </div>
                                     
                                    <div>
                                    <p>{cart.category}</p>
                                    </div>

                                    <div>
                                        <p> <strong>Description</strong> {cart.description}</p>
                                    </div>
                                    <div className="cart__price">
                                        Price : {cart.price}
                                    </div>
                                     

                                 </div>
                             </div>
                             <div className="col-md-6"></div>
                         
                     </div>
                    ))):(
                        <div className="row">
                            <div className="container">
                                <h2>No Products Added...</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart
