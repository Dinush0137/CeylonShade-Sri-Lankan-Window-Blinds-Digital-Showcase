import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Catalogue from './pages/Catalogue';
import CustomSizing from './pages/CustomSizing';
import InquiryModal from './components/InquiryModal/InquiryModal';
import { InquiryModalProvider, useInquiryModal } from './context/InquiryModalContext';

function AppRoutes() {
  const { isOpen, product, closeInquiryModal } = useInquiryModal();

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/custom-sizing" element={<CustomSizing />} />
      </Routes>
      <InquiryModal isOpen={isOpen} product={product} onClose={closeInquiryModal} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <InquiryModalProvider>
        <AppRoutes />
      </InquiryModalProvider>
    </Router>
  );
}
