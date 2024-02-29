import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const Cartitems = () => {
  const {calculateTotalAmount, all_product, cartitem, removecart} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="format main">
                <img src={e.image} alt="" className='carticonProicon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-quantity'>{cartitem[e.id]}</button>
                <p>${e.new_price * cartitem[e.id]}</p>
                <img className='cart-remove' src={remove_icon} onClick={() => { removecart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        } 
          return null; // or any other appropriate fallback
        
      })}
      <div className="down">
        <div className="total">
          <h1>
            Cart totals
          </h1>
          <div>
            <div className="totalitem">
              <p>SubTotal</p>
              <p>${calculateTotalAmount()}</p>
              {console.log(calculateTotalAmount())}
            </div>
            <hr />
            <div className="totalitem">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="totalitem">
              <h3>Total</h3>
              <h3>${calculateTotalAmount()}</h3>
            </div>
          </div>
          <button className='check'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartpromo">
          <p>If you have a promo code,Enter it here</p>
          <div className="promobox">
            <input type="text " placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
