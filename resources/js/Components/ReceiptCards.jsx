import React from 'react'
import ReceiptCard from './ReceiptCard'

const ReceiptCards = ({ receipts, images, user }) => {
  // console.log(images);
  return (
    <div className="container">
      <div className="row pt-45 justify-content-center">

        {receipts.map((receipt) => (
          <>
          {user.map((usr) => (
            <>
            {receipt.user_id === usr.id && (
              <ReceiptCard
                name={receipt.name}
                description={receipt.description.substring(0, 200)}
                uniqueId={receipt.unique_id}
                cover={receipt.cover}
                user={usr}
              />
            )}
            </>
          ))}
          </>
        ))}
      {/* {receipts.map((receipt) => (
        // <div key={receipt.id}>
          {/* {images.map((image) => ( */}
            {/* <> */}
            {/* {receipt.unique_id === image.receipt_id && ( */}
              {/* <ReceiptCard
                name={receipt.name}
                description={receipt.description}
                uniqueId={receipt.unique_id} */}
                {/* // image={image.image} */}
              {/* /> */}
             {/* )} */}
            
            {/* </> */}
           {/* ))} */}
        {/* // </div> */}
        
      </div>
    </div>
  )
}

export default ReceiptCards