import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './DashBoard/DashBoard';
import { SubGroup } from './component/SubGroup';



function App() {
  return (
    <div class="wrapper">
      <Routes>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/subgroup' element={<SubGroup />} />
          
      </Routes>
      

      
    </div>
  );
}

export default App;
