# ✨ Professional Resume Builder

<div align="center">

![Resume Builder](https://img.shields.io/badge/Resume-Builder-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, professional resume builder with ATS optimization and stunning design**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## 🌟 Overview

Professional Resume Builder is a cutting-edge web application that empowers job seekers to create stunning, ATS-friendly resumes in minutes. Built with modern technologies and featuring a beautiful gradient UI, this tool combines professional design with powerful functionality.

### 🎯 Why Choose This Resume Builder?

- **🤖 ATS-Optimized**: Structure your resume to pass Applicant Tracking Systems
- **🎨 Beautiful Design**: Professional styling with modern gradients and animations
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Real-Time Preview**: See changes instantly as you type
- **📥 High-Quality Export**: Download professional PDFs with perfect formatting
- **🔒 Privacy First**: All data stays in your browser - no server uploads
- **🎯 Easy to Use**: Intuitive interface with guided sections

---

## ✨ Features

### 📋 **Comprehensive Sections**
- **Personal Information**: Name, title, contact details, professional summary
- **Work Experience**: Detailed employment history with achievements
- **Education**: Academic background and qualifications
- **Skills**: Organized by categories for easy scanning
- **Projects**: Showcase your portfolio and accomplishments

### 🎨 **Professional Design**
- Modern gradient color scheme (Purple to Blue)
- Clean, readable typography with optimized font sizes
- Proper spacing and visual hierarchy
- Print-ready A4 format (210mm × 297mm)
- Subtle creator signature (GK watermark)

### 🚀 **Export Options**
- **Download PDF**: High-resolution PDF export (300 DPI)
- **Print**: Browser-native print functionality
- **Live Preview**: Real-time WYSIWYG editing

### 💼 **ATS Compliance**
- Semantic HTML structure
- Standard section headers
- Clean formatting without complex graphics
- Machine-readable content
- Proper date formatting

### 🎯 **User Experience**
- Tabbed interface for easy navigation
- Add/remove sections dynamically
- Form validation
- Responsive design
- Smooth animations and transitions

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **TypeScript** | Type Safety | 5.3.0 |
| **Vite** | Build Tool | 5.0.0 |
| **html2canvas** | PDF Generation | 1.4.1 |
| **jsPDF** | PDF Export | 2.5.1 |
| **CSS3** | Styling | - |

---

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher

### Quick Start

```bash
# Clone the repository
git clone https://github.com/gamtenikarabo/resume-builder.git

# Navigate to project directory
cd resume-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Usage

### Creating Your Resume

1. **Launch the Application**
   - Open `http://localhost:5173` in your browser
   - You'll see a split-screen with the editor on the left and live preview on the right

2. **Fill in Your Information**
   - Navigate through the tabs: Personal Info, Experience, Education, Skills, Projects
   - Click "Add" buttons to create new entries
   - Fill in all relevant fields
   - Watch the preview update in real-time

3. **Customize Your Content**
   - Use action verbs in your experience descriptions
   - Quantify achievements with numbers and percentages
   - Keep your professional summary concise (2-3 sentences)
   - Organize skills by category for better readability

4. **Export Your Resume**
   - Click **"Download PDF"** for a high-quality PDF file
   - Click **"Print"** to print or save via browser dialog
   - Your resume is automatically named: `YourName_Resume.pdf`

### 💡 Pro Tips

- **Action Verbs**: Start bullet points with strong verbs (Led, Built, Achieved, Improved)
- **Quantify Results**: Use numbers to show impact (Increased sales by 40%, Managed team of 5)
- **Keywords**: Include industry-specific keywords for ATS optimization
- **Consistency**: Maintain consistent formatting throughout
- **Proofread**: Check for typos and grammatical errors

---

## 📁 Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── CVTemplate.tsx          # Resume display component
│   │   ├── CVTemplate.css          # Resume styling (A4 format)
│   │   ├── CVForm.tsx              # Form editor component
│   │   └── CVForm.css              # Form styling
│   ├── data/
│   │   └── sampleData.ts           # Sample resume data
│   ├── types.ts                    # TypeScript interfaces
│   ├── App.tsx                     # Main application component
│   ├── App.css                     # Application styling
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

---

## 🎨 Customization

### Changing Colors

Edit `src/App.css` for the main gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Edit `src/components/CVTemplate.css` for resume colors:
```css
border-bottom: 3px solid #0f172a;  /* Header line */
color: #475569;                     /* Text color */
```

### Adjusting Font Sizes

All font sizes are in `src/components/CVTemplate.css`:
```css
.cv-name { font-size: 38px; }       /* Your name */
.cv-title { font-size: 18px; }      /* Job title */
.summary-text { font-size: 14px; }  /* Body text */
```

### Adding New Sections

1. Update `src/types.ts` with new interface
2. Add data to `src/data/sampleData.ts`
3. Create form fields in `src/components/CVForm.tsx`
4. Add display section in `src/components/CVTemplate.tsx`

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| Opera | Latest ✅ |

---

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1400px+ (Split view)
- **Tablet**: 768px - 1399px (Stacked layout)
- **Mobile**: < 768px (Single column)

---

## 🔒 Privacy & Security

- **No Server Storage**: All data stays in your browser
- **No Tracking**: No analytics or tracking scripts
- **Local Processing**: PDF generation happens client-side
- **No Account Required**: Use immediately without sign-up

---

## 🐛 Troubleshooting

### PDF Export Issues
- Ensure you're using a modern browser (Chrome, Firefox, Safari)
- Check browser console for errors
- Try the Print option as an alternative

### Preview Not Updating
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check that JavaScript is enabled

### Layout Issues on Print
- Use the "Download PDF" button instead
- Check that your print settings are set to A4
- Ensure margins are set to "None" or "Minimal"

---

## 🚀 Deployment

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/resume-builder",

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for all new code
- Test thoroughly before submitting
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Gamteni Karabo**

- Portfolio: [gamtenikarabo.dev](https://gamtenikarabo.netlify.app)
- LinkedIn: [linkedin.com/in/gamtenikarabo](https://linkedin.com/in/karabogamteni)
- GitHub: [@gamtenikarabo](https://github.com/gamtenikarabo)

---

## 🙏 Acknowledgments

- Inspired by modern resume design trends
- Built with love for job seekers worldwide
- Special thanks to the open-source community

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/gamtenikarabo/resume-builder?style=social)
![GitHub forks](https://img.shields.io/github/forks/gamtenikarabo/resume-builder?style=social)
![GitHub issues](https://img.shields.io/github/issues/gamtenikarabo/resume-builder)
![GitHub pull requests](https://img.shields.io/github/issues-pr/gamtenikarabo/resume-builder)

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an [Issue](https://github.com/gamtenikarabo/resume-builder/issues)
3. Contact via [email](mailto:gamtenikarabo@email.com)

---

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [ATS-Friendly Resume Tips](https://www.jobscan.co/blog/ats-resume/)

---

<div align="center">

**⭐ Star this repo if you find it helpful! ⭐**

Made with ❤️ by [Gamteni Karabo](https://github.com/GamteniKarabo)

</div>
