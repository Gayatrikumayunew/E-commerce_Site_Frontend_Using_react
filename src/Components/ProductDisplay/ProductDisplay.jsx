import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/staricon.png'
import half_star from '../Assets/halfstar.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props;
    const {addtocart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="left">
                <div className="imglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="displayimg">
                    <img className="displayimg" src={product.image} alt="" />
                </div>
            </div>
            <div className='right'>
                <h1>
                    {product.name}
                </h1>
                <div className="rightstar">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={half_star} alt="" />
                    
                </div>
                <p>(122)</p>
                <div className="prices">
                    <div className="old">
                        ${product.old_price}
                    </div>
                    <div className="new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="desc">
                    hshdjkshdkjef Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo omnis illum voluptas quos nisi ad laborum perspiciatis numquam. Tenetur fuga nemo harum incidunt voluptates qui rem blanditiis, dolores alias earum.
                </div>
                <div className="rightsize">
                    <h1>
                        Select size
                    </h1>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button id='btn' onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
                <p className="catogory">
                    <span>Category: </span>Women, T-shirt, Crop-top
                </p>
                <p className="catogory">
                    <span>Tags: </span>Modern, Latest, Crop-top
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay
