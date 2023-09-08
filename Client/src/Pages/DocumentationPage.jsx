import React from 'react'
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Footer/Footer';
import MainDocsComponents from '../Components/Documentation/MainDocsComponents';

function DocumentationPage() {
  return (
    <div>
      <Navbar />
      <MainDocsComponents />
      <Footer />
    </div>
  )
}

export default DocumentationPage;