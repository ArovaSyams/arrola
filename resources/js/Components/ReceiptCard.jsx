import React from 'react'

const ReceiptCard = ({ name, description, uniqueId, cover, user }) => {
  return (
    <>
    <div className="col-lg-4 col-md-6">
      <div className="recent-recipe-item">
        <a href={`/receipt/${name.split(' ').join('-')}`}>
          <div style={{ height: 300 }}>
            <img src={`/storage/${cover}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}   alt="Images" />
          </div>
        </a>
        <div className="content">
          <h3><a href={`/receipt/${name.split(' ').join('-')}`}>{name}</a></h3>
          <p>{description}</p>
          <ul>
            <li>
              <div style={{ width: 50, height: 50 }}>
              <img src={`/storage/${user.image}`} style={{ objectFit:'cover',width: '100%', height: '100%', borderRadius: 100 }} alt="Images"   />
              </div>
            </li>
            <li><a href="author.html">{user.first_name} {user.last_name}</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ReceiptCard