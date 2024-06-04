import React from 'react'
import WishlistCardItem from './WishlistCardItem'
import "./Styles/wishlistcontainer.css"
const WishlistContainer = () => {
  return (
    <>
        <div className="wishlist-container">
            <h2>My Wishlists</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            ADD TO CART
                        </th>
                        <th>
                            STOCK STATUS
                        </th>
                        <th>
                            UNIT PRICE
                        </th>
                        <th>
                           PRICE
                        </th>
                        <th>
                            IMAGES
                        </th>
                        <th>
                            REMOVE
                        </th>
                    </tr>
                </thead>
                <tbody>
            <WishlistCardItem stock={0}/>
            <WishlistCardItem stock={5}/>
                </tbody>
            </table>
        </div>
    
    </>
  )
}

export default WishlistContainer
