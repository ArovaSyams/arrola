import React from 'react'
import ReceiptCards from './ReceiptCards'

const Receipts = ({ receipts, images }) => {
  return (
    <div className="recent-recipe-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span>Recent Recipe</span>
          <h2>Our Latest Recipe</h2>
        </div>
      </div>
        <ReceiptCards 
          receipts={receipts} 
          images={images}
        />
    </div>
  )
}

export default Receipts