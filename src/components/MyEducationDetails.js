import React from 'react';
import "../App.css";

const MyEducationDetails = ({title,description,startdate,enddate}) => {
  return (
    <div className='box'>
     <em className="fas fa-graduation-cap"></em>
     <span>{startdate} - {enddate}</span>
     <h3>{title}</h3>
     <p>
{description}
   </p>
    </div>
  )
}

export default MyEducationDetails