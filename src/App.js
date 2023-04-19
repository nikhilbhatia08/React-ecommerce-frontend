
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';
import Sign from './componenets/Sign';
import Cart from './componenets/Cart';
import { createContext, useReducer } from 'react';

const initialState = {
  cartCount : 0,
  cart : [],
  CartTotal : 0,
  qtyCount : 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        cartCount : state.cartCount + 1,
        cart : [...state.cart, {title : action.title, link : action.link, price : action.price, description : action.description,qty : action.qty}],
        CartTotal : state.CartTotal + action.price,
        qtyCount : 1
      }
    case "ADD_TOT":
      const item = state.cart.find((pr)=>pr.title===action.title)
      if(item)
      return{
        cartCount : state.cartCount + 1,
        cart : state.cart.map((item)=>item.title===action.title?{...item,qty:action.qtyCount+1}:item),
        CartTotal : state.CartTotal + action.price,
        qtyCount : action.qtyCount + 1
      }  
    case "SUB_TOT":
      const item1 = state.cart.find((pr)=>pr.title===action.title)
      return{
        cartCount : state.cartCount - 1,
        cart : state.cart.map((item1)=>item1.title===action.title?{...item1,qty:action.qtyCount+1}:item1),
        CartTotal : state.CartTotal - action.price,
        qtyCount : action.qtyCount - 1
      }  
    default:
      return state;
  }
}

export const ContextOfCart = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <ContextOfCart.Provider value={{...state, dispatch}}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Signin' element={<Sign/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </ContextOfCart.Provider>
    </>
  );
}

export default App;

