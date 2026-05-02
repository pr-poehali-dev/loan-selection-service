import { useState } from 'react';
import Icon from '@/components/ui/icon';

const LOAN_MIN = 5000;
const LOAN_MAX = 500000;
const LOAN_STEP = 5000;
const PERIOD_MIN = 3;
const PERIOD_MAX = 24;

function formatMoney(n: number) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

const advantages = [
  {
    icon: 'Zap',
    title: 'Решение за 5 минут',
    desc: 'Алгоритм анализирует 50+ МФО и банков одновременно. Вы получаете готовый список лучших предложений мгновенно.',
    color: '#818cf8',
  },
  {
    icon: 'ShieldCheck',
    title: 'Безопасно и конфиденциально',
    desc: 'Данные защищены 256-битным шифрованием. Мы не передаём информацию третьим лицам без вашего согласия.',
    color: '#a78bfa',
  },
  {
    icon: 'TrendingDown',
    title: 'Минимальная ставка',
    desc: 'Подбираем займы с наименьшим процентом под ваш профиль. Экономим от 3 000 до 15 000 ₽ в среднем на каждый займ.',
    color: '#f472b6',
  },
  {
    icon: 'HeartHandshake',
    title: 'Одобрение даже с плохой КИ',
    desc: 'Партнёрская база включает МФО, работающие с любой кредитной историей. Шанс одобрения — до 94%.',
    color: '#34d399',
  },
];

const reviews = [
  {
    name: 'Анастасия М.',
    city: 'Москва',
    text: 'Получила 80 000 ₽ под 0.5% в день. Раньше сама искала и постоянно получала отказы. Сервис нашёл за 3 минуты!',
    rating: 5,
    avatar: 'А',
    color: '#818cf8',
  },
  {
    name: 'Дмитрий К.',
    city: 'Екатеринбург',
    text: 'У меня была испорчена кредитная история. Думал никто не даст — одобрили 50 000 ₽. Очень доволен!',
    rating: 5,
    avatar: 'Д',
    color: '#a78bfa',
  },
  {
    name: 'Ольга П.',
    city: 'Казань',
    text: 'Сервис сравнил 30 предложений за секунды. Взяла 200 000 ₽ на ремонт под лучший процент. Рекомендую!',
    rating: 5,
    avatar: 'О',
    color: '#f472b6',
  },
];

const methods = [
  { icon: 'CreditCard', label: 'На карту', desc: 'Моментальный перевод на любую карту РФ' },
  { icon: 'Smartphone', label: 'СБП', desc: 'Перевод через систему быстрых платежей' },
  { icon: 'Landmark', label: 'На счёт', desc: 'Зачисление на расчётный счёт в банке' },
  { icon: 'Wallet', label: 'Наличными', desc: 'Получение в офисе МФО или через партнёров' },
];

const faqs = [
  {
    q: 'Как работает сервис?',
    a: 'Вы указываете нужную сумму и срок — система автоматически анализирует предложения 50+ МФО и банков, сортирует по ставке и шансу одобрения, и выдаёт персональный список лучших вариантов.',
  },
  {
    q: 'Почему сервис платный?',
    a: 'Мы постоянно обновляем базу партнёров, разрабатываем алгоритм оценки одобрения и поддерживаем сервис 24/7. Стоимость подписки — 1 999 ₽, что окупается экономией на процентах уже с первого займа.',
  },
  {
    q: 'Возможен ли возврат средств?',
    a: 'Да. Если в течение 7 дней сервис не помог найти подходящий займ — возвращаем полную стоимость подписки без вопросов.',
  },
  {
    q: 'Сервис работает по всей России?',
    a: 'Да, сервис доступен для жителей всех регионов РФ. Большинство партнёров выдают займы онлайн — не нужно никуда ехать.',
  },
  {
    q: 'Нужен ли хороший кредитный рейтинг?',
    a: 'Нет. В базе есть МФО, которые работают с любой кредитной историей, в том числе с просрочками и отказами из банков.',
  },
];

export default function Index() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [period, setPeriod] = useState(6);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [regData, setRegData] = useState({ name: '', phone: '', email: '', password: '' });
  const [regStep, setRegStep] = useState<'form' | 'pay'>('form');

  const rate = 0.8;
  const monthlyPayment = Math.round((loanAmount * (rate / 100)) * period + loanAmount) / period;

  function handleRegSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRegStep('pay');
  }

  function handlePaySubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowRegister(false);
    setRegStep('form');
    alert('Оплата принята! Добро пожаловать в ЗаймПодбор.');
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Навигация */}
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
          <button
            onClick={() => setShowRegister(true)}
            className="grad-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Попробовать
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Фоновые шары */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/25 blur-[100px]" />
          <div className="absolute bottom-[-5%] left-[30%] w-[350px] h-[350px] rounded-full bg-pink-600/15 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(79,70,229,0.08)_0%,transparent_60%)]" />
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
                onClick={() => setShowRegister(true)}
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
                onClick={() => setShowRegister(true)}
                className="grad-btn text-white font-montserrat font-700 w-full py-4 rounded-2xl text-base"
              >
                Найти лучшее предложение
              </button>
              <p className="text-center text-white/30 text-xs mt-3">Расчёт ориентировочный. Точные условия — у партнёров.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="advantages" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(79,70,229,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-white/70">
              <Icon name="Star" size={14} className="text-yellow-400" />
              Почему выбирают нас
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-800 text-white">
              Подбираем займы, которые <span className="grad-text">действительно одобрят</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-7 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 group animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                >
                  <Icon name={item.icon} size={22} style={{ color: item.color }} />
                </div>
                <h3 className="font-montserrat font-700 text-white text-base mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-white/70">
              <Icon name="MessageSquare" size={14} className="text-purple-400" />
              Отзывы клиентов
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-800 text-white">
              Уже <span className="grad-text">12 000+</span> человек нашли выгодный займ
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="glass rounded-3xl p-7 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-montserrat font-700 text-white text-base"
                    style={{ background: `linear-gradient(135deg, ${r.color}, #ec4899)` }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-white/45 text-xs">{r.city}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СПОСОБЫ ПОЛУЧЕНИЯ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-white/70">
              <Icon name="ArrowRight" size={14} className="text-pink-400" />
              Удобно для вас
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-800 text-white">
              Способы <span className="grad-text">получения денег</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((m, i) => (
              <div key={i} className="glass rounded-3xl p-7 text-center hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl grad-btn flex items-center justify-center mx-auto mb-4">
                  <Icon name={m.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-700 text-white text-base mb-2">{m.label}</h3>
                <p className="text-white/50 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-white/70">
              <Icon name="HelpCircle" size={14} className="text-indigo-400" />
              Частые вопросы
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-800 text-white">
              Вопросы и <span className="grad-text">ответы</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-montserrat font-600 text-white text-sm md:text-base pr-4">{item.q}</span>
                  <div className={`w-6 h-6 rounded-full grad-btn flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    <Icon name="ChevronDown" size={14} className="text-white" />
                  </div>
                </button>
                <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                  <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-montserrat text-3xl md:text-5xl font-900 text-white mb-6 leading-tight">
            Готовы найти займ<br /><span className="grad-text">на выгодных условиях?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">Подписка всего 1 999 ₽. Гарантия возврата 7 дней.</p>
          <button
            onClick={() => setShowRegister(true)}
            className="grad-btn text-white font-montserrat font-700 text-lg px-12 py-5 rounded-2xl glow"
          >
            Начать подбор займа
          </button>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md grad-btn flex items-center justify-center">
              <Icon name="Zap" size={12} className="text-white" />
            </div>
            <span className="font-montserrat font-600 text-white/60">ЗаймПодбор</span>
          </div>
          <div>© 2025 ЗаймПодбор. Сервис подбора займов</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/70 transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

      {/* МОДАЛКА РЕГИСТРАЦИИ */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => { setShowRegister(false); setRegStep('form'); }} />
          <div className="relative glass rounded-3xl p-8 w-full max-w-md glow animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl pointer-events-none" />
            <button
              onClick={() => { setShowRegister(false); setRegStep('form'); }}
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
      )}
    </div>
  );
}