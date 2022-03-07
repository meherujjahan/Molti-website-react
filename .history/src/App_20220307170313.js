import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import Business from './Components/Business/Business';
import ChoosePlan from './Components/ChoocePlan/ChoosePlan';
import Client from './Components/Clients/Client';
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
     <Client></Client>
    <Blog></Blog>
    </div>
  );
}

export default App;
