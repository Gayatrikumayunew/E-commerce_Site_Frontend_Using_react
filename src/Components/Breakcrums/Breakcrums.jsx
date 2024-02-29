import React from 'react'
import './Breakcrums.css'
import arrow_icon from '../Assets/dropdown.png'


const Breakcrums = (props) => {
     const {product}=props;
  return (
    <div className='breadxrum'>
      HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.id} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breakcrums
