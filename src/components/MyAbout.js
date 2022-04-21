import { useState, useEffect } from "react";
import "../App.css";
import MyAboutLanguage from './MyAboutLanguage';
import axios from "axios";

const MyAbout = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const skillsDataFunction = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/skills`);
        // console.log(res);
        setData(res.data);
      } catch (err) {}
    };
    skillsDataFunction();
  }, [setData])
  // console.log(data);


  return (
    <section className='myAbout' id='myAbout'>
    <h1 className="heading"><span>About</span> me</h1>
    <div className="row">
    <div className="info">
     <h3><span> Name : </span> Karmugil Kalaiyarasan Kavitha</h3>
     <h3><span> Age : </span> 25</h3>
     <h3>
     <span> Qualification : </span> Post-Graduation Certification(Web
     Developer)
   </h3>
   <h3><span> Post : </span> Full Stack Developer</h3>
   <h3>
   <span> Language : </span> {data.map((item)=>(<MyAboutLanguage title={item.title} key={item.id} />))}
 </h3>
 <a href="#"
 ><button className="btn">
   Download CV <em className="fas fa-download"></em></button></a>
    </div>
    <div className="counter">
    <div className="box">
    <span>2+</span>
    <h3>years of experience</h3>
  </div>
  <div className="box">
  <span>10+</span>
  <h3>Project completed</h3>
</div>
<div className="box">
<span>5+</span>
<h3>Awards</h3>
</div>
    </div>
    </div>
    </section>
  )
}

export default MyAbout