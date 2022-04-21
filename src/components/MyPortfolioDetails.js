import React from 'react';
import "../App.css";

const MyPortfolioDetails = ({url,image}) => {
  return (
    <div className='box'>
     <a href={url} target="_blank"><img src={image} alt=""/></a>
    </div>
  )
}

export default MyPortfolioDetails