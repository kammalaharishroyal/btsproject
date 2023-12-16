import './App.css';
import '../src/memechalangecomponents/styles/meme.css'
 import Contact from './projects/Bts/components/Contact';
 import About from './projects/Bts/components/About';
 import Explore from './projects/Bts/components/Explore' ;
 import Login from './projects/Bts/components/Login';
 import Layout from './projects/Bts/components/Layout';
 import Dashboard from './projects/Bts/components/Dashboard';
 import Reviews from './projects/Bts/components/Reviews';
 import Income from './projects/Bts/components/Income';
 import Home from './Diceroll/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Account from './projects/Bts/components/Account';
import Orders from './projects/Bts/components/Orders';
import BusData from './projects/Bts/components/BusData';
import CustomerRegister from './projects/Bts/components/CustomerRegister';
import BtsLayout from './projects/Bts/components/BtsLayout';
import BusesLayout from './projects/Bts/components/BusesLayout';
import BusesDetail from './projects/Bts/components/BusesDetail';
function App() {
 
  return (
    <BrowserRouter>
    

      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path="bts" element={<BtsLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="buses" element={<BusesLayout/>}/>
        <Route path="buses/:busid" element={<BusesDetail/>}/>
       
       
        </Route>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<CustomerRegister/>}/>
        
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/bus" element={<Explore/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/bus/:busid" element={<BusData/>}/>
        </Route>
        <Route path="/account" element={<Account/>}/>
   
      {/* <div className="App1">
      
      </div> */}
      </Routes>
      </BrowserRouter>

  
  );
}

export default App;
