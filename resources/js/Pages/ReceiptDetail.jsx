import Carousel from '@/Components/Carousel'
import Hero from '@/Components/Hero'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const ReceiptDetail = ({ receipt, tags, images, user, authUser, visited, visitedData, isAuth }) => {
  

  const [receiptId, setReceiptId] = useState(receipt.unique_id);
  const [authUserId, setAuthUserId] = useState(isAuth && authUser);

  useEffect(() => {
    const visit = () => {
      // e.preventDefault();
      if (isAuth) {
        const data = {
          receiptId: receiptId, 
          authUserId: authUserId
        }
        
        if (!visited) {
          return router.post('/visited', data);
        }
      }

      return;
    }
    
    visit();
  }, []);
  
  return (
    <GuestLayout>
      <Head title="Detail Receipt" />
      <Hero title="Receipts" />

      <div className="recipe-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recipe-details-content">
                <Carousel images={images} />
                <br/><br/>
                <ul className="tag-list">
                  <li className="active"><a href="author.html"> <i className='bx bx-user'></i>By {user.first_name} {user.last_name} </a></li>
                  <li><i className='bx bx-calendar'></i>{new Date(receipt.created_at).toLocaleDateString()}</li>
                  <li><i className='bx bx-tag'></i> {receipt.category} </li>
                </ul>
                <h2>{receipt.name}</h2>
              
                <p>
                {receipt.description}
                </p>
                <ul className="recipe-tag-list">
                  <li><i className='bx bx-dish'></i>{receipt.ingredient_amount} ingredients </li>
                  <li><i className='bx bx-time-five'></i>{receipt.make_time}</li>
                  {/* <li><i className='bx bxs-user-pin'></i> 8 People </li> */}
                  <li><i className='bx bx-show-alt'></i> {visitedData} View </li>
                </ul>
                <h3>Ingredients</h3>
                <p>
                {receipt.ingredient}
                </p>
              
                <div className="recipe-details-share">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <div className="article-tag">
                        <ul>
                          <li className="title">Tags :</li>
                          {tags.map((tag) => (
                            <li key={tag.id}><a href="" target="_blank">{tag.tag}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div className="article-social-icon">
                        <ul className="social-icon">
                          <li className="title">Share :</li>
                          <li>
                            <Link href="" target="_blank">
                              <i className='bx bxl-facebook'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                            <i className='bx bxl-linkedin'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                              <i className='bx bxl-twitter'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                              <i className='bx bxl-instagram'></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>        
          </div>
        </div>
      </div>
    </GuestLayout>

  )
}

export default ReceiptDetail