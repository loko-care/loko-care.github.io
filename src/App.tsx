import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ForBusinessPage from './components/ForBusinessPage';
import OurNetworkPage from './components/OurNetworkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/for-business" element={<ForBusinessPage />} />
        <Route path="/our-network" element={<OurNetworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
