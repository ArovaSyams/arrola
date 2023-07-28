import React from 'react'

const Hero = ({ title }) => {
  return (
    <div className="inner-banner inner-bg7">
      <div className="container">
        <div className="inner-title text-center">
          <h3>{title}</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero