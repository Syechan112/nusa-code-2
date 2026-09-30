import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/views/Home'
import PricingDetailPage from '@/views/PricingDetailPage'
import NotFound from '@/views/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/pricing/:slug" element={<PricingDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
