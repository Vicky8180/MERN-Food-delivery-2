import './App.css';
import Navbar from './Component/Navbar/Navbar';
import DisplayArea from './Component/ViewPage/Display/DisplayArea';
import Filtter from './Component/ViewPage/Filtter/Filtter';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import MapforCartlog from "./Component/ViewPage/MapforCartlog"
import Order from './Component/ViewPage/Order/Order';
import Cart from './Component/ViewPage/Cart/Cart';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Navbar/>
    {/* <Filtter/>
      <DisplayArea/> */}
<Routes>

  <Route path="/"  element={<FirstPage/>}/>
  <Route path="/filters1" element={<MapforCartlog/>}/>
  <Route path="/order" element={<Order/>}/>
  <Route path="/cart" element={<Cart/>}/>


</Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
