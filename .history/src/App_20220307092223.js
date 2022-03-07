import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import Business from './Components/Business/Business';
import ChoosePlan from './Components/ChoocePlan/ChoosePlan';
import Header from './Components/Header/Header';
import MoreService from './Components/MoreServise/MoreService';
import Services from './Components/Services/Services';
import WorkProcess from './Components/WorkProcess/WorkProcess';
import Feature from './Features/Feature';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <Services></Services>
     <AboutUs></AboutUs>
     <WorkProcess></WorkProcess>
     <Feature></Feature>
     <Business></Business>
     <ChoosePlan></ChoosePlan>
     <MoreService></MoreService>
    </div>
  );
}

export default App;
