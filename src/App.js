import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Routes from './Components/Routes/RoutesComponent';
import { Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import RoutesComponent from './Components/Routes/RoutesComponent';

function App() {
  return (
    <div>
      <Header/>
      <RoutesComponent/>
      {/* <Routes>
           <Route  path="/product">
               <Products/>
               </Route> 
        </Routes> */}
     
    </div>
  );
}

export default App;
