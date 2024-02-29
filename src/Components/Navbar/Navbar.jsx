import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
    const [menu, setmenu] = useState("shop")
const {gettotalcartitem}=useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} height="77px" alt="" />
                <p>SHOPMOSE</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {
                    setmenu("shop")
                }}><Link  style={{textDecoration:'none'}}to='/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={() => {
                    setmenu("men")
                }}><Link  style={{textDecoration:'none'}} to='/men'>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
                <li onClick={() => {
                    setmenu("women")
                }}><Link  style={{textDecoration:'none'}} to='/women'>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
                <li onClick={() => {
                    setmenu("kids")
                }}><Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
             <Link to='/login'> <button>Login</button></Link>  
              <Link to='/cart'> <img src={cart} height="77px" alt="" /></Link> 
                <div className='nav-cart-count'>
                    {gettotalcartitem()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
