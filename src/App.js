
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.png'
import women_banner from './Components/Assets/women_banner.png'
import kid from './Components/Assets/kid_banner.png'



function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid} category="kids"/>}/>
       <Route path="/product" element={<Product/>}>
      <Route Route path=':productId' element={<Product/>}/>

      </Route>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
