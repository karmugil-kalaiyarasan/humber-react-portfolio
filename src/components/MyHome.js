import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";


const MyHome = () => {

  const [data,setData] = useState({});

  useEffect(() => {
    const homeDataFunction = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/descriptions`);
        setData(res.data); //setting up the whole popular movie array
        // setMoviesList(popularMovies[0].shows); //setting up the movie array from the popular movie array
        // setData(res.data);
        // console.log(res);
      } catch (err) {}
    };
    homeDataFunction();
  }, [setData])
  // console.log(data);
  // console.log(description);

  
  return (
    <section className='myHome' id="myHome">
    <h3>{data.title}</h3>
    <h1>I'M <span>{data.name}</span></h1>
    <p>{data.description}
  </p>
  <a href="#myAbout"><button className="btn">about me <em className="fas fa-user"></em></button></a>
    </section>
  )
}

export default MyHome