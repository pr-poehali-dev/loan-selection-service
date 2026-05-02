import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
}

export default function RegisterModal({ show, onClose }: RegisterModalProps) {
  const [regData, setRegData] = useState({ name: '', phone: '', email: '', password: '' });
  const [regStep, setRegStep] = useState<'form' | 'pay'>('form');

  function handleClose() {
    onClose();
    setRegStep('form');
  }

  function handleRegSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRegStep('pay');
  }

  function handlePaySubmit(e: React.FormEvent) {
    e.preventDefault();
    handleClose();
    alert('Оплата принята! Добро пожаловать в ЗаймПодбор.');
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative glass rounded-3xl p-8 w-full max-w-md glow animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl pointer-events-none" />
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <Icon name="X" size={16} className="text-white/70" />
        </button>

        {regStep === 'form' ? (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl grad-btn flex items-center justify-center mb-4">
                <Icon name="UserPlus" size={22} className="text-white" />
              </div>
              <h2 className="font-montserrat font-800 text-white text-2xl mb-1">Регистрация</h2>
              <p className="text-white/50 text-sm">Создайте аккаунт для доступа к подбору займов</p>
            </div>
            <form onSubmit={handleRegSubmit} className="space-y-4">
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  value={regData.name}
                  onChange={e => setRegData({ ...regData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  value={regData.phone}
                  onChange={e => setRegData({ ...regData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  value={regData.email}
                  onChange={e => setRegData({ ...regData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Пароль</label>
                <input
                  type="password"
                  required
                  placeholder="Минимум 8 символов"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  value={regData.password}
                  onChange={e => setRegData({ ...regData, password: e.target.value })}
                />
              </div>
              <button type="submit" className="grad-btn text-white font-montserrat font-700 w-full py-4 rounded-2xl text-base mt-2">
                Продолжить к оплате →
              </button>
              <p className="text-white/30 text-xs text-center">Нажимая «Продолжить», вы принимаете <a href="#" className="underline">условия оферты</a></p>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl grad-btn flex items-center justify-center mb-4">
                <Icon name="CreditCard" size={22} className="text-white" />
              </div>
              <h2 className="font-montserrat font-800 text-white text-2xl mb-1">Оплата подписки</h2>
              <p className="text-white/50 text-sm">Доступ ко всем функциям сервиса на 30 дней</p>
            </div>

            <div className="glass rounded-2xl p-4 mb-6 border border-indigo-500/30">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-semibold text-sm">Подписка ЗаймПодбор</div>
                  <div className="text-white/45 text-xs mt-0.5">30 дней · Безлимитный подбор</div>
                </div>
                <div className="font-montserrat font-800 text-white text-xl">1 999 ₽</div>
              </div>
            </div>

            <form onSubmit={handlePaySubmit} className="space-y-4">
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Номер карты</label>
                <input
                  type="text"
                  required
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">Срок действия</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">CVV</label>
                  <input
                    type="password"
                    required
                    placeholder="•••"
                    maxLength={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Имя держателя карты</label>
                <input
                  type="text"
                  required
                  placeholder="IVAN IVANOV"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <button type="submit" className="grad-btn text-white font-montserrat font-700 w-full py-4 rounded-2xl text-base mt-2">
                Оплатить 1 999 ₽
              </button>
              <div className="flex items-center justify-center gap-2 text-white/30 text-xs">
                <Icon name="Lock" size={12} />
                <span>Платёж защищён SSL-шифрованием</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
