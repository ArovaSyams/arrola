import Carousel from '@/Components/Carousel'
import Hero from '@/Components/Hero'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const ReceiptDetail = ({ receipt, tags, images, user, authUser }) => {

  const [receiptId, setReceiptId] = useState(receipt.unique_id);
  const [authUserId, setAuthUserId] = useState(authUser);
  
  useEffect(() => {
    const visited = () => {
      // e.preventDefault();
      const data = {
        receiptId: receiptId, 
        authUserId: authUserId
      }

      router.post('/visited', data);
    }
    
    // visited();
  }, []);
  


  return (
    <GuestLayout>
      <Head title="Detail Receipt" />
      <Hero title="Receipts" />

      <div class="recipe-details-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="recipe-details-content">
                <Carousel images={images} />
                <br/><br/>
                <ul class="tag-list">
                  <li class="active"><a href="author.html"> <i class='bx bx-user'></i>By {user.name} </a></li>
                  <li><i class='bx bx-calendar'></i>{new Date(receipt.created_at).toLocaleDateString()}</li>
                  <li><i class='bx bx-tag'></i> {receipt.category} </li>
                </ul>
                <h2>{receipt.name}</h2>
              
                <p>
                {receipt.description}
                </p>
                <ul class="recipe-tag-list">
                  <li><i class='bx bx-dish'></i>{receipt.ingredient_amount} ingredients </li>
                  <li><i class='bx bx-time-five'></i>{receipt.make_time} Minutes</li>
                  <li><i class='bx bxs-user-pin'></i> 8 People </li>
                  <li><i class='bx bx-show-alt'></i> 3,450 View </li>
                </ul>
                <h3>Ingredients</h3>
                <p>
                {receipt.ingredient}
                </p>
              
                <div class="recipe-details-share">
                  <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5">
                      <div class="article-tag">
                        <ul>
                          <li class="title">Tags :</li>
                          {tags.map((tag) => (
                            <li key={tag.id}><a href="" target="_blank">{tag.tag}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                      <div class="article-social-icon">
                        <ul class="social-icon">
                          <li class="title">Share :</li>
                          <li>
                            <Link href="" target="_blank">
                              <i class='bx bxl-facebook'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                            <i class='bx bxl-linkedin'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                              <i class='bx bxl-twitter'></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="" target="_blank">
                              <i class='bx bxl-instagram'></i>
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