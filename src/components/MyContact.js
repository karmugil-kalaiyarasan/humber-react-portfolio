import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const MyContact = () => {

  const [data,setData] = useState({});
  
  useEffect(() => {
    const contactDataFunction = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/contacts`);
        // console.log(res);
        setData(res.data);
      } catch (err) {}
    };
    contactDataFunction();
  }, [setData])
  // console.log(data);

  return (
    <section className='myContact' id='myContact'>
     <h1 className="heading"><span>Contact</span> me</h1>
     <div className="row">
       <div className="content">
         <h3 className="title">Contact Info</h3>
         <div className="info">
          <h3><em className="fas fa-envelope"></em> {data.email}</h3>
          <h3><em className="fas fa-phone"></em> {data.phone}</h3>
          <h3><em className="fas fa-map-marker-alt"></em> {data.address}</h3>
         </div>
       </div>
       <form action="">
         <input type="text" placeholder="name" className="box" />
         <input type="email" placeholder="email" className="box" />
         <input type="text" placeholder="project" className="box" />
         <textarea
         name=""
         id=""
         cols=""
         rows=""
         className="box message"
         placeholder="message"
       ></textarea>
       <button type="submit" className="btn">
       send <em className="fas fa-paper-plane"></em>
     </button>
       </form>
     </div>
    </section>
  )
}

export default MyContact