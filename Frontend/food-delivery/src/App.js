import './App.css';
import Navbar from './Component/Navbar/Navbar';
import DisplayArea from './Component/ViewPage/Display/DisplayArea';
import Filtter from './Component/ViewPage/Filtter/Filtter';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import MapforCartlog from "./Component/ViewPage/MapforCartlog"
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Navbar/>
    <Filtter/>
      <DisplayArea/>
<Routes>

  <Route path="/"  elemen={<FirstPage/>}/>
  <Route path="/filters1" element={<MapforCartlog/>}/>
</Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
