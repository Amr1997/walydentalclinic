import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialFeed from './components/SocialFeed';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './i18n/i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Ensure Arabic is set as default
    if (i18n.language !== 'ar') {
      i18n.changeLanguage('ar');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.className = 'font-arabic';
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    document.documentElement.className = newLang === 'ar' ? 'font-arabic' : '';
  };

  return (
    <div className={`min-h-screen ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 glass-card p-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Toggle language"
      >
        <Globe className="w-6 h-6 text-blue-600" />
      </button>
      
      <Hero />
      <Services />
      <SocialFeed />
      <BookingForm />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;