import React from 'react'
import './NewCollection.css'
import newcollection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
    console.log(newcollection); // Log newcollection to check its structure and contents
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {newcollection.map((item, i) => {
                    return(

                    
                    <Item
                    key={i} id={item.id} name={item.name} image={item.image } new_price={item.new_price} old_price={item.old_price}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default NewCollection
