import SidebarNavigation from './Components/SidebarNavigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ActivityFeed from './Components/ActivityFeed';
import TasksPriorities from './Components/TasksPriorities';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="bg-[#FAFAFA] overflow-auto">
          <SidebarNavigation />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/"  element={<Dashboard/>} />
            <Route path="/activity"  element={<ActivityFeed/>} />
            <Route path="/task-priorities"  element={<TasksPriorities/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;