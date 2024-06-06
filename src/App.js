import Sidebar_Navigation from './Components/Sidebar_Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_Navigation from './Components/Header_Navigation';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="bg-[#FAFAFA] overflow-auto">
          <Sidebar_Navigation />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/"  element={<Dashboard/>} />
            <Route path="/nav"  element={<Header_Navigation/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;