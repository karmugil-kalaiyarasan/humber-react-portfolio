import { useState, useEffect } from "react";
import "../App.css";
import MyPortfolioDetails from './MyPortfolioDetails';
import axios from "axios";

const MyPortfolio = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const projectsDataFunction = async () => {
      try {
        const res = await axios.get(`https://humber-react-portfolio-backend.herokuapp.com/projects`);
        // console.log(res);
        setData(res.data);
      } catch (err) {}
    };
    projectsDataFunction();
  }, [setData])
  // console.log(data);


  return (
    <section className='myPortfolio' id='myPortfolio'>
     <h1 className="heading">my <span>Portfolio</span></h1>
     <div className="box-container">
     {data.map((item)=>(<MyPortfolioDetails url={item.url} image={item.image} key={item.id} />))}
     </div>
    </section>
  )
}

export default MyPortfolio