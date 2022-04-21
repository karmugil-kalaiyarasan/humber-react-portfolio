
import './App.css';
import Header from './components/Header';
import MyAbout from './components/MyAbout';
import MyContact from './components/MyContact';
import MyEducation from './components/MyEducation';
import MyHome from './components/MyHome';
import MyPortfolio from './components/MyPortfolio';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
<header>
<Header />
<Navbar />
</header>
<div id="menu" className="fas fa-bars"></div>
<MyHome />
<MyAbout />
<MyEducation />
<MyPortfolio />
<MyContact />
</>
  );
}

export default App;
