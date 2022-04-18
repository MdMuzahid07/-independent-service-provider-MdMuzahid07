import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/home" element = {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/blogs" element = {<Blogs></Blogs>}></Route>
        <Route path = "/checkout" element = {<Checkout></Checkout>}></Route>
        <Route path = "/getintouch" element = {<GetInTouch></GetInTouch>}></Route>
        <Route path = "/login" element = {<Login></Login>}></Route>
        <Route path = "/signup" element = {<SignUp></SignUp>}></Route>
        <Route path = "/*" element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
