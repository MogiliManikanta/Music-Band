import Banner from './Components/Banner';
import Header from './Components/Header';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Team from './Components/Team';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Join from './Components/Join';
import Footer from './Components/Footer';




function App() {
  return (
    <div style={{ "overflow-x": "hidden"}}>


      <Router>

      <Header/>


      <Routes>
   
       <Route exact path='/' element={<Banner/>}  ></Route>
       <Route exact path='/about' element={<About/>}  ></Route>
       <Route exact path='/team' element={<Team/>}  ></Route>
       <Route exact path='/gallery' element={<Gallery />}  ></Route>
       <Route exact path='/join' element={<Join/>}  ></Route>
       <Route exact path='/contact' element={<Contact />}  ></Route>



      </Routes>

      <Footer/>
 


       </Router>

    </div>
  

  
  );
}

export default App;
