import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import HomePage from './pages/HomePage'
import PrintingPage from './pages/PrintingPage'
import PublishingPage from './pages/PublishingPage'
import PackagingPage from './pages/PackagingPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/printing" element={<PrintingPage />} />
          <Route path="/publishing" element={<PublishingPage />} />
          <Route path="/packaging" element={<PackagingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
