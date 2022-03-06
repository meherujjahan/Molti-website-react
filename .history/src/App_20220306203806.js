import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import WorkProcess from './Components/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <Services></Services>
     <AboutUs></AboutUs>
     <WorkProcess></WorkProcess>
    </div>
  );
}

export default App;
