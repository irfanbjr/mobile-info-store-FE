
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivteComponent';
import Login from './component/Login';
import Addproduct from './component/AddProduct';
import Productlist from './component/Productlist';
import UpdateProduct from './component/UpdateProduct';
import ImageUpload from './component/ImageUpload';
import Profile from './component/Profile';

function App() {
  const auth = localStorage.getItem('user');
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <ImageUpload />
      <Footer />
      <Routes>
        <Route element={<PrivateComponent/>}>

        <Route path='/' element={<Productlist />}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct />}/>
        <Route path='/logout' element={<h1>logout list</h1>}/>
        {<Route path='/profile' element={<Profile Email={JSON.parse(auth).email} Name={JSON.parse(auth).name}/>}/>}
       
        </Route>
       
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
      
      </Routes>
    
      </BrowserRouter>
      </div>
  );
}

export default App;
