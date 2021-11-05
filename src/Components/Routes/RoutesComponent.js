import { Route,Routes } from "react-router"
import Cart from "../Cart/Cart"
import Product from "../Products/Product"
import Products from "../Products/Products"

function RoutesComponent() {
    return (
        <Routes>
           <Route  path="/" element={<Products/>}/>
           <Route  path="/products" element={<Products/>}/>
           <Route path="/product/:id" element={<Product/>}/>
           <Route path="/cart" element={<Cart/>}/>
               
               
        </Routes>
    )
}

export default RoutesComponent
