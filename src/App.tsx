import { useState } from 'react';
import { CVTemplate } from './components/CVTemplate';
import { CVForm } from './components/CVForm';
import type { CVData } from './types';
import { sampleData } from './data/sampleData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

function App() {
  const [cvData, setCvData] = useState<CVData>(sampleData);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    const element = document.getElementById('cv-template');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'FAST');

      const fileName = `${cvData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>✨ Professional Resume Builder</h1>
          <p>Create stunning, ATS-optimized resumes in minutes</p>
        </div>
        <div className="header-actions">
          <button onClick={handlePrint} className="action-btn print-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="action-btn download-btn"
            disabled={isGenerating}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
        </div>
      </header>

      <div className="app-container">
        <div className="editor-panel">
          <CVForm data={cvData} onChange={setCvData} />
        </div>
        <div className="preview-panel">
          <div className="preview-label">Live Preview</div>
          <div className="preview-wrapper">
            <CVTemplate data={cvData} />
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <p>💼 Your resume is optimized for Applicant Tracking Systems (ATS)</p>
        <p className="footer-credit">Crafted by Gamteni Karabo</p>
      </footer>
    </div>
  );
}

export default App;