import { useState } from 'react';
import Icon from '@/components/ui/icon';

const LOAN_MIN = 1000;
const LOAN_MAX = 100000;
const LOAN_STEP = 1000;
const PERIOD_MIN = 3;
const PERIOD_MAX = 24;

function formatMoney(n: number) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

interface HeroSectionProps {
  isLight: boolean;
  onOpenRegister: () => void;
}

export default function HeroSection({ isLight, onOpenRegister }: HeroSectionProps) {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [period, setPeriod] = useState(6);

  const rate = 0.8;
  const monthlyPayment = Math.round((loanAmount * (rate / 100)) * period + loanAmount) / period;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Фоновые шары */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${isLight ? 'bg-indigo-400/15' : 'bg-indigo-600/20'}`} />
        <div className={`absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] ${isLight ? 'bg-purple-400/15' : 'bg-purple-600/25'}`} />
        <div className={`absolute bottom-[-5%] left-[30%] w-[350px] h-[350px] rounded-full blur-[90px] ${isLight ? 'bg-pink-400/12' : 'bg-pink-600/15'}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(79,70,229,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Левая часть — продающий текст */}
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-white/80">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            50+ МФО и банков в базе
          </div>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-900 leading-[1.1] mb-6 text-white">
            Получите займ<br />
            <span className="grad-text">на лучших условиях</span><br />
            за 5 минут
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg">
            Сравниваем предложения 50+ МФО и банков автоматически. Подбираем минимальную ставку и максимальный шанс одобрения — даже с плохой кредитной историей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenRegister}
              className="grad-btn text-white font-700 font-montserrat text-base px-8 py-4 rounded-2xl glow animate-pulse-glow"
            >
              Подобрать займ — 1 999 ₽
            </button>
            <button className="glass text-white/80 font-medium text-base px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
              Узнать подробнее ↓
            </button>
          </div>
          <p className="text-white/40 text-xs mt-4">Гарантия возврата в течение 7 дней · Без скрытых платежей</p>
        </div>

        {/* Правая часть — калькулятор */}
        <div className="animate-scale-in delay-300">
          <div className="glass rounded-3xl p-8 glow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <h3 className="font-montserrat font-700 text-white text-xl mb-6">Рассчитайте займ</h3>

            {/* Сумма займа */}
            <div className="mb-7">
              <div className="flex justify-between items-end mb-3">
                <span className="text-white/60 text-sm">Сумма займа</span>
                <span className="font-montserrat font-700 text-2xl text-white">{formatMoney(loanAmount)}</span>
              </div>
              <input
                type="range"
                min={LOAN_MIN}
                max={LOAN_MAX}
                step={LOAN_STEP}
                value={loanAmount}
                onChange={e => setLoanAmount(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-white/35 mt-1.5">
                <span>{formatMoney(LOAN_MIN)}</span>
                <span>{formatMoney(LOAN_MAX)}</span>
              </div>
            </div>

            {/* Срок */}
            <div className="mb-7">
              <div className="flex justify-between items-end mb-3">
                <span className="text-white/60 text-sm">Срок займа</span>
                <span className="font-montserrat font-700 text-2xl text-white">{period} мес.</span>
              </div>
              <input
                type="range"
                min={PERIOD_MIN}
                max={PERIOD_MAX}
                step={1}
                value={period}
                onChange={e => setPeriod(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-white/35 mt-1.5">
                <span>{PERIOD_MIN} мес.</span>
                <span>{PERIOD_MAX} мес.</span>
              </div>
            </div>

            {/* Итог */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-white/50 text-xs mb-1">Платёж в месяц</div>
                  <div className="font-montserrat font-700 text-white text-xl">{formatMoney(Math.round(monthlyPayment))}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Ставка от</div>
                  <div className="font-montserrat font-700 text-white text-xl">0.8% / день</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRegister}
              className="grad-btn text-white font-montserrat font-700 w-full py-4 rounded-2xl text-base"
            >
              Найти лучшее предложение
            </button>
            <p className="text-center text-white/30 text-xs mt-3">Расчёт ориентировочный. Точные условия — у партнёров.</p>
          </div>
        </div>
      </div>
    </section>
  );
}