import { createContext, useContext, useState } from 'react';

const InquiryModalContext = createContext();

export function InquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const openInquiryModal = (prod) => {
    setProduct(prod);
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <InquiryModalContext.Provider value={{ isOpen, product, openInquiryModal, closeInquiryModal }}>
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error('useInquiryModal must be used within an InquiryModalProvider');
  }
  return context;
}
