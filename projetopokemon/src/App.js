
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Home from "./pag/home/index";


function App() {
  return (
    <div className='App'>
     
     
     <BrowserRouter>
          <Routes>
                <Route path='/Home' element={<Home/>} />
          </Routes>

     </BrowserRouter>

       

    </div>
  );
}

export default App;
