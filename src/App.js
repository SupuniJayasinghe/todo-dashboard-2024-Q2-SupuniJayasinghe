import Sidebar_Navigation from './Components/Sidebar_Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Activity_Feed from './Components/Activity_Feed';

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
            <Route path="/activity"  element={<Activity_Feed/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;