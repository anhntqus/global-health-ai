import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIApplications from './pages/AIApplications.jsx';
import Assistant from './pages/Assistant.jsx';
import DataHub from './pages/DataHub.jsx';
import EthicsSecurity from './pages/EthicsSecurity.jsx';
import FoodHealth from './pages/FoodHealth.jsx';
import Interdependence from './pages/Interdependence.jsx';
import References from './pages/References.jsx';
import FutureTrends from './pages/FutureTrends.jsx';

function App() {
  return (
    <Router basename="/global-health-ai">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-hub" element={<DataHub />} />
        <Route path="/ai-applications" element={<AIApplications />} />
        <Route path="/interdependence" element={<Interdependence />} />
        <Route path="/ethics-security" element={<EthicsSecurity />} />
        <Route path="/food-health" element={<FoodHealth />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/future-trends" element={<FutureTrends />} />
        <Route path="/references" element={<References />} />

      </Routes>

    </Router>
  );
}
export default App;
