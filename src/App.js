
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<h1>Product list</h1>}/>
        <Route path='/add' element={<h1>Add list</h1>}/>
        <Route path='/update' element={<h1>update list</h1>}/>
        <Route path='/logout' element={<h1>logout list</h1>}/>
        <Route path='/profile' element={<h1>profile list</h1>}/>
        <Route path='/signup' element={<SignUp />}/>
      
      </Routes>
    
      </BrowserRouter>
      </div>
  );
}

export default App;
