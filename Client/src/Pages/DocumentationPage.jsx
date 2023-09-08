import React from 'react'
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Footer/Footer';
import HtmlDocs from '../Components/Documentation/htmlComponents/HtmlDocs';

function DocumentationPage() {
  return (
    <div>
      <Navbar />
      <HtmlDocs />
      <Footer />
    </div>
  )
}

export default DocumentationPage;