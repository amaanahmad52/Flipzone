
import './App.css';

import {BrowserRouter ,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import Webfont from "webfontloader"
import Header from './components/design/Header/Header';
import Footer from './components/design/Footer/Footer';
// import About from './components/About';
import Home from './components/Home/Home';
import LoadingBar from 'react-top-loading-bar'
import Products from './components/Product/Products';
import ParticularProduct from './components/Product/ParticularProduct';
import Search from './components/Product/Search';
import LoginSignUp from './components/user/LoginSignUp';
import Account from './components/user/Account';
function App() {
 useEffect(()=>{
  Webfont.load({
    google:{
      families:["Roboto","Poppins"]
    }
  })
 },[]);
  return (
    <>
    
  
   

    <BrowserRouter>
    <Header/>
    <LoadingBar
        color='#f11946'
        progress='100'
        
      />
      <Routes>
        <Route  exact path='/'  element={<Home/>}></Route>
        <Route  exact path='/product/:id'  element={<ParticularProduct/>}></Route>
        <Route  exact path='/products'  element={<Products/>}></Route>
        <Route  path='/products/:keyword'  element={<Products/>}></Route>
        <Route  exact path='/search'  element={<Search/>}></Route>
        <Route  exact path='/login'  element={<LoginSignUp/>}></Route>
        <Route  exact path='/account'  element={<Account/>}></Route>
       
      </Routes>

      <Footer/>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

