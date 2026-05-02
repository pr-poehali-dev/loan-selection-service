import { useState } from 'react';
import Icon from '@/components/ui/icon';

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

interface ContentSectionsProps {
  onOpenRegister: () => void;
}

export default function ContentSections({ onOpenRegister }: ContentSectionsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
            onClick={onOpenRegister}
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
    </>
  );
}
