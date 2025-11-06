import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_4c0e4f764a.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isSoundEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsSoundEnabled(!isSoundEnabled);
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const houses = [
    {
      name: 'Боярская',
      capacity: '6-8 человек',
      price: '8 000 ₽/час',
      features: ['Купель из лиственницы', 'Печь на дровах', 'Веники в подарок'],
      image: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/1191e4c8-1107-4568-80fe-1a1e1a11ae28.jpg'
    },
    {
      name: 'Княжеская',
      capacity: '10-12 человек',
      price: '12 000 ₽/час',
      features: ['Чан под звёздами', 'Панорамные окна', 'Бильярдная'],
      image: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/4d04bc97-9bf4-425e-b596-de4b673e602a.jpg'
    },
    {
      name: 'Купеческая',
      capacity: '4-6 человек',
      price: '6 000 ₽/час',
      features: ['Камин', 'Травяные чаи', 'Терраса у реки'],
      image: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/f8867db1-ca00-4178-b3e0-ab0977fdd030.jpg'
    },
    {
      name: 'Царская VIP',
      capacity: '12-16 человек',
      price: '18 000 ₽/час',
      features: ['Массажная зона', 'Караоке', 'Ресторанный зал', 'Частный берег'],
      image: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/c889099b-001a-4c8d-8f84-91ef3d514d9d.jpg'
    }
  ];

  const rituals = [
    {
      icon: 'Sparkles',
      title: 'Парение вениками',
      desc: 'Древний ритуал с берёзовыми, дубовыми и эвкалиптовыми вениками от мастера-парильщика'
    },
    {
      icon: 'Droplets',
      title: 'Ароматерапия',
      desc: 'Натуральные масла сибирского кедра, таёжной пихты и лугового разнотравья'
    },
    {
      icon: 'Flame',
      title: 'Контрастные процедуры',
      desc: 'Чередование жара парной и прохлады купели — баланс огня и воды'
    },
    {
      icon: 'Heart',
      title: 'Травяные чаи',
      desc: 'Сборы по старинным рецептам: иван-чай, чабрец, душица с мёдом'
    }
  ];

  return (
    <div className="min-h-screen bg-graphite font-body text-cream overflow-x-hidden">
      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-wood-brown/80 border-2 border-copper/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300 group shadow-lg"
        title={isSoundEnabled ? 'Выключить звук' : 'Включить звук'}
      >
        <Icon
          name={isSoundEnabled ? 'Volume2' : 'VolumeX'}
          size={24}
          className="text-copper group-hover:text-honey-gold transition-colors"
        />
      </button>

      {/* Hero Section with Video Background */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-steam-rising-from-hot-springs-8493/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/60 to-graphite"></div>
        </div>

        {/* Steam Effect Overlay */}
        <div className="absolute inset-0 steam-effect opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo as Engraved Wooden Stamp */}
          <div className="mb-12 fade-in-up">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-copper/20 blur-2xl rounded-full"></div>
              <div className="relative bg-wood-brown/80 border-4 border-copper/60 rounded-lg p-8 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 2px 10px rgba(205,127,50,0.3)' }}>
                <div className="text-6xl md:text-8xl font-heading text-honey-gold tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  SL
                </div>
                <div className="h-0.5 bg-copper my-2"></div>
                <div className="text-sm tracking-[0.3em] text-copper">EST. 2024</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-heading text-honey-gold mb-6 leading-tight tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Пар. Камень. Время.
          </h1>

          <p className="text-2xl md:text-4xl text-cream mb-4 font-heading font-semibold">
            STEAMLAB
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-copper to-transparent mx-auto mb-12"></div>

          <p className="text-lg md:text-xl text-warm-light/90 mb-16 max-w-3xl mx-auto leading-relaxed">
            Мы возвращаем древние традиции русской бани,<br className="hidden md:block" />
            сохраняя комфорт современности
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-copper hover:bg-honey-gold text-white font-heading text-lg px-12 py-7 glow-hover border-2 border-copper hover:border-honey-gold transition-all duration-300 shadow-lg"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать баню
            </Button>
            <Button
              onClick={() => scrollToSection('houses')}
              className="bg-transparent border-2 border-cream hover:bg-cream/10 hover:border-honey-gold text-cream hover:text-honey-gold font-heading text-lg px-12 py-7 transition-all duration-300"
            >
              <Icon name="Building2" size={20} className="mr-2" />
              Посмотреть дома
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-copper" />
        </div>
      </section>

      {/* About Section - Philosophy & History */}
      <section id="about" className="py-32 px-4 bg-gradient-to-b from-graphite to-[#1a1512] relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-honey-gold/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Images with Old Russian Decorative Elements */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-80 rounded-xl overflow-hidden group relative border-2 border-copper/30">
                <img
                  src="https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/70d4afec-8954-4202-b1f3-2583dc5e4ff4.jpg"
                  alt="Баня"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Decorative Corner */}
                <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-copper"></div>
                <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-copper"></div>
              </div>
              <div className="h-64 rounded-xl overflow-hidden group relative border-2 border-wood-brown/40">
                <img
                  src="https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/41a19465-4020-499d-b072-a698e653c069.jpg"
                  alt="Печь"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-64 rounded-xl overflow-hidden group relative border-2 border-wood-brown/40">
                <img
                  src="https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/f8867db1-ca00-4178-b3e0-ab0977fdd030.jpg"
                  alt="Купель"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="mb-8">
                <span className="text-copper text-xs tracking-[0.3em] uppercase">История и философия</span>
                <div className="w-20 h-1 bg-copper mt-4 mb-6"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-heading text-honey-gold mb-8 leading-tight">
                Современная<br />старина
              </h2>

              <div className="space-y-6 text-warm-light/80 text-base leading-relaxed">
                <p>
                  Мы возвращаем древние традиции бань, сохраняя комфорт современности.
                  Каждый элемент — от печи до веника — выбран с уважением к истории.
                </p>
                <p>
                  В наших банях сочетаются натуральные материалы: <strong className="text-honey-gold">сибирский кедр</strong>,
                  <strong className="text-honey-gold"> карельская берёза</strong>, <strong className="text-honey-gold">уральский камень</strong>.
                  Это не просто дерево — это живая память поколений.
                </p>
                <div className="bg-wood-brown/20 border-l-4 border-copper p-6 rounded-r-lg">
                  <p className="text-cream font-heading text-xl md:text-2xl italic">
                    "Баня парит,<br />баня правит,<br />баня всё поправит"
                  </p>
                  <span className="text-copper text-sm mt-2 block">— Русская пословица</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '12+', label: 'лет опыта' },
                  { value: '4', label: 'банных дома' },
                  { value: '5000+', label: 'довольных гостей' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-heading text-copper mb-2">{stat.value}</div>
                    <div className="text-xs text-warm-light/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Houses Catalog - Wooden Plaques Style */}
      <section id="houses" className="py-32 px-4 bg-[#1a1512] wood-texture relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-copper"></div>
                <span className="text-copper text-xs tracking-[0.3em] uppercase">Каталог</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-copper"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Банные дома
            </h2>
            <p className="text-cream/60 text-lg">
              Каждый дом — уникальная атмосфера и характер
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house, idx) => (
              <Card
                key={idx}
                className="group relative bg-gradient-to-br from-wood-brown/30 to-graphite border-2 border-wood-brown/40 hover:border-copper transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={house.image}
                    alt={house.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent"></div>

                  {/* Wooden Plaque Name Tag */}
                  <div className="absolute top-4 left-4 bg-wood-brown border-2 border-honey-gold px-6 py-3 rounded-sm shadow-lg" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
                    <h3 className="text-2xl font-heading text-honey-gold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{house.name}</h3>
                  </div>

                  {/* Steam Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 steam-effect transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-cream/70 mb-4">
                    <Icon name="Users" size={18} className="text-copper" />
                    <span className="text-sm">{house.capacity}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {house.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-warm-light/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-copper rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-copper/20">
                    <span className="text-2xl font-heading text-honey-gold">{house.price}</span>
                    <Button
                      onClick={() => scrollToSection('booking')}
                      className="bg-copper hover:bg-honey-gold text-white px-4 py-2 text-sm transition-all duration-300 glow-hover"
                    >
                      Забронировать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Steam Dissipating Effect */}
      <section id="gallery" className="py-32 px-4 bg-gradient-to-b from-[#1a1512] to-[#0a0806] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Атмосфера
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-copper to-transparent mx-auto mb-6"></div>
            <p className="text-2xl font-heading text-cream italic opacity-80">
              "Каждый дом — история, написанная теплом"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/70d4afec-8954-4202-b1f3-2583dc5e4ff4.jpg',
                label: 'Парная',
                span: 'md:col-span-2 md:row-span-2'
              },
              {
                img: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/41a19465-4020-499d-b072-a698e653c069.jpg',
                label: 'Дрова и огонь'
              },
              {
                img: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/f8867db1-ca00-4178-b3e0-ab0977fdd030.jpg',
                label: 'Чан'
              },
              {
                img: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/41a19465-4020-499d-b072-a698e653c069.jpg',
                label: 'Русская печь'
              },
              {
                img: 'https://cdn.poehali.dev/projects/61c9ef47-8470-48ca-ad6d-16ef5c43a5d9/files/56ed2a49-74ac-4824-8fc9-3dbad23eba42.jpg',
                label: 'Травяные чаи'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative h-80 rounded-xl overflow-hidden group cursor-pointer border border-wood-brown/30 ${item.span || ''}`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-30 transition-all duration-500"></div>

                {/* Steam Dissipating Effect */}
                <div className="absolute inset-0 steam-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Wooden Plaque Label */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-wood-brown/90 border border-honey-gold px-4 py-2 rounded-sm backdrop-blur-sm shadow-lg">
                    <span className="text-lg font-heading text-honey-gold">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Section - Old Herbalist Style */}
      <section id="rituals" className="py-32 px-4 bg-[#0a0806] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #CD7F32 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-xs tracking-[0.3em] uppercase">Традиции</span>
            <div className="w-20 h-1 bg-copper mx-auto mt-4 mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Ритуалы и традиции
            </h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              Каждая процедура — диалог с вековой мудростью предков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rituals.map((ritual, idx) => (
              <Card
                key={idx}
                className="group relative bg-gradient-to-br from-[#3a2f1f] to-[#1a1512] border-2 border-wood-brown/30 hover:border-copper/60 p-8 transition-all duration-500 overflow-hidden text-center"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-copper/0 to-honey-gold/0 group-hover:from-copper/10 group-hover:to-honey-gold/5 transition-all duration-500"></div>

                <div className="relative">
                  {/* Icon in Ornate Circle */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-copper/30 to-honey-gold/20 flex items-center justify-center border-2 border-copper/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Icon name={ritual.icon as any} size={36} className="text-copper" />
                  </div>

                  <h3 className="text-2xl font-heading text-honey-gold mb-4 group-hover:text-copper transition-colors">
                    {ritual.title}
                  </h3>

                  <p className="text-warm-light/70 text-sm leading-relaxed">{ritual.desc}</p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent group-hover:via-copper transition-all duration-500"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form - Warm Glow Effect */}
      <section id="booking" className="py-32 px-4 bg-gradient-to-br from-graphite to-[#1a1512] relative overflow-hidden">
        {/* Warm Candle-like Glow Effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-copper/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-honey-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-copper text-xs tracking-[0.3em] uppercase">Бронирование</span>
            <div className="w-20 h-1 bg-copper mx-auto mt-4 mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Начните ваше<br />путешествие
            </h2>
            <p className="text-cream/70 text-lg">
              Оставьте заявку, и наш координатор свяжется с вами в течение 15 минут
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-[#3a2f1f]/80 to-[#2a1f12]/80 border-2 border-copper/30 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            {/* Warm Glow Inside Form */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-honey-gold/10 rounded-full blur-3xl"></div>

            <form onSubmit={handleBooking} className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream mb-3 font-heading text-sm tracking-wide">
                    Ваше имя
                  </label>
                  <Input
                    required
                    className="bg-[#1a1512] border-copper/40 text-cream focus:ring-copper focus:border-honey-gold transition-all h-12 focus:shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                    placeholder="Иван Иванович"
                  />
                </div>

                <div>
                  <label className="block text-cream mb-3 font-heading text-sm tracking-wide">
                    Телефон
                  </label>
                  <Input
                    required
                    type="tel"
                    className="bg-[#1a1512] border-copper/40 text-cream focus:ring-copper focus:border-honey-gold transition-all h-12 focus:shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream mb-3 font-heading text-sm tracking-wide">
                    Дата и время
                  </label>
                  <Input
                    required
                    type="datetime-local"
                    className="bg-[#1a1512] border-copper/40 text-cream focus:ring-copper focus:border-honey-gold transition-all h-12 focus:shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                  />
                </div>

                <div>
                  <label className="block text-cream mb-3 font-heading text-sm tracking-wide">
                    Количество гостей
                  </label>
                  <Input
                    required
                    type="number"
                    min="1"
                    className="bg-[#1a1512] border-copper/40 text-cream focus:ring-copper focus:border-honey-gold transition-all h-12 focus:shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                    placeholder="4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cream mb-3 font-heading text-sm tracking-wide">
                  Комментарий
                </label>
                <Textarea
                  className="bg-[#1a1512] border-copper/40 text-cream focus:ring-copper focus:border-honey-gold transition-all resize-none focus:shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                  placeholder="Дополнительные пожелания..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-copper hover:bg-honey-gold text-white font-heading text-lg py-6 transition-all duration-300 group border-2 border-copper hover:border-honey-gold glow-hover shadow-lg"
              >
                Отправить заявку
                <Icon
                  name="Send"
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>

              <p className="text-center text-cream/40 text-xs mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Clock', text: 'Работаем 24/7 без выходных' },
              { icon: 'Shield', text: 'Гарантия безопасности' },
              { icon: 'Sparkles', text: 'Индивидуальный подход' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-[#2a1f12]/50 border border-copper/20 rounded-xl p-4 hover:border-copper/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30">
                  <Icon name={item.icon as any} size={20} className="text-copper" />
                </div>
                <span className="text-cream/70 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Wood Texture */}
      <footer className="bg-[#0a0806] wood-texture py-16 px-4 border-t border-copper/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="mb-6">
                <div className="text-5xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-honey-gold to-copper mb-2">
                  STEAMLAB
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-copper to-transparent mb-4"></div>
              </div>
              <p className="text-warm-light/60 text-sm leading-relaxed mb-6 italic font-heading text-lg">
                "Традиции живут в тепле"
              </p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-copper/20 to-honey-gold/10 border border-copper/30 flex items-center justify-center hover:border-copper hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon
                      name={social as any}
                      size={18}
                      className="text-copper group-hover:text-honey-gold transition-colors"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="font-heading text-cream mb-6 text-lg">Навигация</h4>
              <div className="space-y-3">
                {[
                  { label: 'Главная', id: 'hero' },
                  { label: 'О нас', id: 'about' },
                  { label: 'Дома', id: 'houses' },
                  { label: 'Ритуалы', id: 'rituals' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-warm-light/60 hover:text-copper transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="font-heading text-cream mb-6 text-lg">Услуги</h4>
              <div className="space-y-3 text-warm-light/60 text-sm">
                <div>Аренда бань</div>
                <div>Банные ритуалы</div>
                <div>Массаж вениками</div>
                <div>Организация мероприятий</div>
              </div>
            </div>

            {/* Contacts */}
            <div className="md:col-span-3">
              <h4 className="font-heading text-cream mb-6 text-lg">Контакты</h4>
              <div className="space-y-4">
                <a
                  href="tel:+79991234567"
                  className="flex items-center gap-3 text-warm-light/70 hover:text-copper transition-colors text-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30 group-hover:border-copper transition-all">
                    <Icon name="Phone" size={16} className="text-copper" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/40 mb-1">Звоните</div>
                    +7 (999) 123-45-67
                  </div>
                </a>

                <a
                  href="mailto:info@steamlab.ru"
                  className="flex items-center gap-3 text-warm-light/70 hover:text-copper transition-colors text-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30 group-hover:border-copper transition-all">
                    <Icon name="Mail" size={16} className="text-copper" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/40 mb-1">Пишите</div>
                    info@steamlab.ru
                  </div>
                </a>

                <div className="flex items-center gap-3 text-warm-light/70 text-sm">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30">
                    <Icon name="MapPin" size={16} className="text-copper" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/40 mb-1">Адрес</div>
                    Московская область
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-copper/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-warm-light/40 text-xs">
              © 2024 STEAMLAB. Все права защищены.
            </div>
            <div className="flex gap-6 text-xs text-warm-light/40">
              <button className="hover:text-copper transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-copper transition-colors">
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}