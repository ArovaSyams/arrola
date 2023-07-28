import React from 'react'

const ReceiptCard = ({ name, description, uniqueId, cover }) => {
  return (
    <>
    <div className="col-lg-4 col-md-6">
      <div className="recent-recipe-item">
        <a href={`/receipt-detail/${uniqueId}`}>
          <img src={`/storage/${cover}`} alt="Images" />
        </a>
        <div className="content">
          <h3><a href={`/receipt-detail/${uniqueId}`}>{name}</a></h3>
          <p>{description}</p>
          <ul>
            <li>
              <img src="assets/images/recipe-img/recipe-user1.jpg" alt="Images" />
            </li>
            <li><a href="author.html">By Henrry</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ReceiptCard