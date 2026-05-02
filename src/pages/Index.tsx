import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import RegisterModal from '@/components/RegisterModal';

export default function Index() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showRegister, setShowRegister] = useState(false);

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${theme}`}>
      <Navbar
        isLight={isLight}
        onToggleTheme={() => setTheme(isLight ? 'dark' : 'light')}
        onOpenRegister={() => setShowRegister(true)}
      />
      <HeroSection
        isLight={isLight}
        onOpenRegister={() => setShowRegister(true)}
      />
      <ContentSections
        onOpenRegister={() => setShowRegister(true)}
      />
      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />
    </div>
  );
}
