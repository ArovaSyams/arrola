import React from 'react'

const Carousel = ({ images }) => {
  return (
    <div class="service-preview-slider owl-carousel owl-theme">
      {images.map((image) => (
      <div class="service-preview-item">
        <img src={`/storage/${image.image}`} alt="Blog Images"/>
      </div>
      ))}
      {/* <div class="service-preview-item">
        <img src="/assets/images/services/service-details-img1.jpg" alt="Blog Images" />
      </div>
      <div class="service-preview-item">
        <img src="/assets/images/services/service-details-img1.jpg" alt="Blog Images" />
      </div>
      <div class="service-preview-item">
        <img src="/assets/images/services/service-details-img1.jpg" alt="Blog Images" />
      </div> */}
    </div>
  )
}

export default Carousel