import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ForBusinessPage from './components/ForBusinessPage';
import OurNetworkPage from './components/OurNetworkPage';
import OurWorkPage from './components/OurWorkPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/for-business" element={<ForBusinessPage />} />
        <Route path="/our-network" element={<OurNetworkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
