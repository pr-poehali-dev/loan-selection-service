import Icon from '@/components/ui/icon';

interface NavbarProps {
  isLight: boolean;
  onToggleTheme: () => void;
  onOpenRegister: () => void;
}

export default function Navbar({ isLight, onToggleTheme, onOpenRegister }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg grad-btn flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-montserrat font-800 text-white text-lg tracking-tight">ЗаймПодбор</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#advantages" className="hover:text-white transition-colors">Преимущества</a>
          <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="glass rounded-xl w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
            title="Сменить тему"
          >
            <Icon name={isLight ? 'Moon' : 'Sun'} size={18} className={isLight ? 'text-indigo-600' : 'text-yellow-300'} />
          </button>
          <button
            onClick={onOpenRegister}
            className="grad-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Попробовать
          </button>
        </div>
      </div>
    </nav>
  );
}
