
import './App.css';
import BasicNavBar from './component/NavBar'
import AddProduct from './component/AddProduct';
import ShowProduct from './component/ShowProduct';
import UpdateProduct from './component/UpdateProduct';
import ProductDetail from './component/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <BasicNavBar/>
          
        <Routes>
          <Route exact path='/' element={<ShowProduct/>}/>
          <Route exact path='/addProduct' element={<AddProduct/>}/>  
          <Route exact path="/:id/" element={<ProductDetail/>} />
          <Route exact path="/:id/update/" element={<UpdateProduct/>} />
         
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
