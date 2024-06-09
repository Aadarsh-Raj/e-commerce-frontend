import React from 'react'
import CartStockBtn from './CartStockBtn'
import "./Styles/wishlistcarditem.css"
const WishlistCardItem = (props) => {
  return (
    <>
    
   <tr>
    <td>
       <CartStockBtn stock={props.stock}/>
    </td>
    <td style={props.stock == 0 ? {color:"darkred"}:{color:"lightgreen"}}>
        {
            props.stock !== 0 ? "In Stock" : "Out of stock"
        }
    </td>
    <td>
        $165
    </td>
    <td>
        Arya
    </td>
    <td>
        <img src="" alt="" />
    </td>
    <td>
    <button class="delete-button">Del</button>
    </td>
   </tr>
    </>
  )
}

export default WishlistCardItem
