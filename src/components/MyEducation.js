import { useState, useEffect } from "react";
import "../App.css";
import MyEducationDetails from './MyEducationDetails';
import axios from "axios";

const MyEducation = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const educationDataFunction = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/education`);
        // console.log(res);
        setData(res.data);
      } catch (err) {}
    };
    educationDataFunction();
  }, [setData])
  // console.log(data);


  return (
    <section className='myEducation' id='myEducation'>
     <h1 className="heading">my <span>education</span></h1>
     <div className="box-container">
     {data.map((item)=>(<MyEducationDetails title={item.title} description={item.description} startdate={item.startdate} enddate={item.enddate} key={item.key} />))}
     </div>
    </section>
  )
}

export default MyEducation