import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface BathHouse {
  id: number;
  name: string;
  capacity: string;
  price: string;
  features: string[];
  image: string;
  description: string;
}

export default function Index() {
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['hero', 'about', 'houses', 'rituals', 'gallery', 'booking'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const bathHouses: BathHouse[] = [
    {
      id: 1,
      name: 'Изба',
      capacity: 'До 6 человек',
      price: '4000 ₽/час',
      features: ['Русская печь', 'Дубовые веники', 'Чан под звёздами'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      description: 'Аутентичная русская баня с вековыми традициями'
    },
    {
      id: 2,
      name: 'Терем',
      capacity: 'До 10 человек',
      price: '6000 ₽/час',
      features: ['Панорамные окна', 'Бассейн', 'Массажная комната'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Современный комфорт в традиционном исполнении'
    },
    {
      id: 3,
      name: 'Усадьба Premium',
      capacity: 'До 15 человек',
      price: '10000 ₽/час',
      features: ['Два парных отделения', 'Караоке', 'Банкетный зал', 'Барбекю-зона'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      description: 'Премиальное пространство для особых событий'
    }
  ];

  const rituals = [
    { icon: 'Leaf', title: 'Веничный массаж', desc: 'Традиционный массаж дубовыми и берёзовыми вениками' },
    { icon: 'Droplets', title: 'Ароматерапия', desc: 'Эфирные масла кедра, эвкалипта и мяты' },
    { icon: 'Flame', title: 'Контрастные процедуры', desc: 'Чередование жара и прохладной купели' },
    { icon: 'Sparkles', title: 'Травяные настои', desc: 'Целебные чаи из таёжных трав' }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-graphite relative">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-copper pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease'
        }}
      />

      {/* Vertical Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {[
          { id: 'hero', label: 'Главная', icon: 'Home' },
          { id: 'houses', label: 'Дома', icon: 'Building2' },
          { id: 'rituals', label: 'Ритуалы', icon: 'Sparkles' },
          { id: 'gallery', label: 'Галерея', icon: 'Image' },
          { id: 'booking', label: 'Бронь', icon: 'Calendar' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group flex items-center gap-3 transition-all duration-300 ${
              activeSection === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
            }`}
          >
            <span className="text-xs text-cream font-heading opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-copper scale-150' 
                : 'bg-cream scale-100'
            }`} />
          </button>
        ))}
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-graphite z-50">
        <div 
          className="h-full bg-gradient-to-r from-copper via-honey-gold to-copper"
          style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease' }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1521133573892-e44906baee46?w=1920&q=80)',
              filter: 'brightness(0.3)'
            }}
          />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-copper/10 blur-3xl"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-left">
              <div className="mb-8">
                <div 
                  className="text-7xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-honey-gold via-copper to-honey-gold mb-4"
                  style={{ 
                    lineHeight: '0.9',
                    WebkitTextStroke: '1px rgba(205, 127, 50, 0.3)'
                  }}
                >
                  STEAM
                  <br />
                  LAB
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-gradient-to-r from-copper to-transparent flex-1"></div>
                  <span className="text-copper text-sm tracking-[0.3em]">EST. 2024</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-heading mb-6 text-cream tracking-wide">
                Пар. Камень. Время.
              </h1>
              
              <p className="text-base md:text-lg mb-12 text-warm-light/80 max-w-md leading-relaxed">
                Здесь древность дышит через современность. 
                Каждая капля пара — история. Каждый камень — память.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-copper hover:bg-honey-gold text-white font-heading text-base border-2 border-copper hover:border-honey-gold transition-all duration-300 group"
                  onClick={() => scrollToSection('booking')}
                >
                  Забронировать
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="border-2 border-cream/30 text-cream hover:bg-cream/10 font-heading text-base"
                  onClick={() => scrollToSection('houses')}
                >
                  Исследовать
                </Button>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="hidden lg:block relative h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Rotating Circle */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '30s' }}>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#CD7F32" />
                        <stop offset="100%" stopColor="#D4A574" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-honey-gold text-6xl font-heading mb-2">∞</div>
                      <div className="text-cream/60 text-xs tracking-widest">ТРАДИЦИИ</div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  {[
                    { icon: 'Flame', top: '10%', left: '20%', delay: 0 },
                    { icon: 'Droplets', top: '20%', right: '15%', delay: 1 },
                    { icon: 'Wind', bottom: '25%', left: '15%', delay: 2 },
                    { icon: 'Mountain', bottom: '15%', right: '20%', delay: 1.5 }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="absolute p-4 rounded-full bg-gradient-to-br from-copper/20 to-honey-gold/20 backdrop-blur-sm border border-copper/30"
                      style={{
                        ...item,
                        animation: 'float 3s ease-in-out infinite',
                        animationDelay: `${item.delay}s`
                      }}
                    >
                      <Icon name={item.icon as any} size={24} className="text-honey-gold" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Parallax */}
      <section id="about" className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite via-[#1a1512] to-graphite"></div>
        
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[20vw] font-heading text-copper/20"
              style={{
                top: `${i * 30}%`,
                left: `${-10 + i * 20}%`,
                transform: `translateY(${scrollProgress * (i + 1) * 0.5}px)`,
                transition: 'transform 0.1s ease'
              }}
            >
              {['ПАР', 'КАМЕНЬ', 'ВРЕМЯ'][i]}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-copper"></div>
                <span className="text-copper text-sm tracking-widest">О НАС</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-heading mb-8 text-honey-gold leading-tight">
                История,<br/>
                написанная<br/>
                теплом
              </h2>
              
              <div className="space-y-6 text-warm-light/80">
                <p className="text-lg leading-relaxed">
                  Мы не просто строим бани. Мы создаём пространства, 
                  где время течёт иначе.
                </p>
                
                <p className="text-base leading-relaxed">
                  Каждый дом — симфония натуральных материалов: массив кедра, 
                  речной камень, кованая медь. Здесь технологии служат традициям.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '3', label: 'Уникальных дома', icon: 'Home' },
                { number: '15', label: 'Лет опыта', icon: 'Award' },
                { number: '1000+', label: 'Довольных гостей', icon: 'Users' },
                { number: '24/7', label: 'Поддержка', icon: 'Clock' }
              ].map((stat, idx) => (
                <Card 
                  key={idx}
                  className="p-8 bg-gradient-to-br from-[#3a2f1f] to-[#2a1f12] border-2 border-wood-brown/30 hover:border-copper/50 transition-all duration-300 group"
                >
                  <Icon name={stat.icon as any} size={32} className="text-copper mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-heading text-honey-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-cream/60">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bath Houses - Horizontal Scroll */}
      <section id="houses" className="py-32 px-4 bg-[#0a0806]">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold">
              Выберите<br/>свой дом
            </h2>
            <div className="hidden md:block text-copper text-sm tracking-widest">
              [{bathHouses.findIndex(h => h.id === selectedHouse) + 1 || 1}/{bathHouses.length}]
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-copper to-transparent"></div>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 px-4 md:px-8 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {bathHouses.map((house, index) => (
              <div
                key={house.id}
                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group"
                onClick={() => setSelectedHouse(house.id)}
              >
                <Card className={`h-full bg-gradient-to-br from-[#3a2f1f] to-[#2a1f12] border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  selectedHouse === house.id 
                    ? 'border-copper shadow-2xl shadow-copper/20 scale-105' 
                    : 'border-wood-brown/30 hover:border-copper/50'
                }`}>
                  <div className="relative h-[400px] overflow-hidden">
                    <img 
                      src={house.image} 
                      alt={house.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/10 transition-all duration-500"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-copper/90 backdrop-blur flex items-center justify-center">
                      <span className="text-3xl font-heading text-white">{index + 1}</span>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <h3 className="text-5xl font-heading text-honey-gold mb-2">{house.name}</h3>
                          <p className="text-cream/70 text-sm italic">{house.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-copper/30">
                      <div className="flex items-center gap-3 text-cream">
                        <Icon name="Users" size={20} />
                        <span className="text-lg">{house.capacity}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-cream/60 mb-1">от</div>
                        <div className="text-3xl font-heading text-copper">{house.price}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {house.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-warm-light text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-copper hover:bg-honey-gold text-white font-heading text-lg py-6 group"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection('booking');
                      }}
                    >
                      Забронировать
                      <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals - Diagonal Grid */}
      <section id="rituals" className="py-32 px-4 bg-gradient-to-br from-graphite via-[#1a1512] to-graphite relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #CD7F32 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-copper"></div>
                <span className="text-copper text-sm tracking-widest">РИТУАЛЫ</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-copper"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Священные<br/>традиции
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg">
              Каждый ритуал — это диалог с вековой мудростью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rituals.map((ritual, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-[#3a2f1f] to-[#1a1512] border-2 border-wood-brown/20 hover:border-copper/60 p-8 transition-all duration-500 overflow-hidden"
                style={{
                  transform: index % 2 === 0 ? 'translateY(0)' : 'translateY(2rem)'
                }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-copper/0 to-honey-gold/0 group-hover:from-copper/5 group-hover:to-honey-gold/5 transition-all duration-500"></div>
                
                {/* Number */}
                <div className="absolute top-4 right-4 text-6xl font-heading text-copper/10 group-hover:text-copper/20 transition-colors">
                  {index + 1}
                </div>

                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-copper/20 to-honey-gold/20 flex items-center justify-center backdrop-blur-sm border border-copper/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon name={ritual.icon as any} size={32} className="text-copper" />
                  </div>
                  
                  <h3 className="text-2xl font-heading text-honey-gold mb-4 group-hover:text-copper transition-colors">
                    {ritual.title}
                  </h3>
                  
                  <p className="text-warm-light/70 text-sm leading-relaxed">
                    {ritual.desc}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-px bg-gradient-to-r from-copper/50 to-transparent group-hover:from-copper group-hover:to-honey-gold/50 transition-all duration-500"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Layout */}
      <section id="gallery" className="py-32 px-4 bg-[#0a0806] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6">
              Атмосфера
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-32 h-1 bg-gradient-to-r from-copper to-transparent"></div>
              <p className="text-cream/60 italic text-lg">
                История, написанная теплом
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
            {[
              { img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', span: 'md:row-span-2 md:col-span-2', label: 'Главный зал' },
              { img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', span: 'md:row-span-1', label: 'Парная' },
              { img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', span: 'md:row-span-1', label: 'Чан' },
              { img: 'https://images.unsplash.com/photo-1521133573892-e44906baee46?w=800&q=80', span: 'md:row-span-2', label: 'Терраса' },
              { img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', span: 'md:col-span-2', label: 'Интерьер' }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
              >
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-copper"></div>
                    <span className="text-honey-gold font-heading text-xl">{item.label}</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-copper/0 group-hover:border-copper/80 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking - Split Layout */}
      <section id="booking" className="py-32 px-4 bg-gradient-to-br from-graphite to-[#1a1512] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-copper/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-honey-gold/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-copper"></div>
                  <span className="text-copper text-sm tracking-widest">БРОНИРОВАНИЕ</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-heading text-honey-gold mb-6 leading-tight">
                  Начните<br/>
                  ваше<br/>
                  путешествие
                </h2>
                
                <p className="text-warm-light/70 text-lg leading-relaxed mb-8">
                  Оставьте заявку, и наш координатор свяжется с вами 
                  в течение 15 минут для уточнения деталей
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: 'Clock', text: 'Работаем 24/7 без выходных' },
                  { icon: 'Shield', text: 'Гарантия безопасности' },
                  { icon: 'Sparkles', text: 'Индивидуальный подход' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-cream/70">
                    <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30">
                      <Icon name={item.icon as any} size={18} className="text-copper" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <Card className="p-8 md:p-12 bg-gradient-to-br from-[#3a2f1f] to-[#2a1f12] border-2 border-copper/20 backdrop-blur-sm">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream mb-3 font-heading text-sm tracking-wide">Ваше имя</label>
                    <Input 
                      required
                      className="bg-[#1a1512] border-copper/30 text-cream focus:ring-copper focus:border-copper transition-all h-12" 
                      placeholder="Иван Иванович"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cream mb-3 font-heading text-sm tracking-wide">Телефон</label>
                    <Input 
                      required
                      type="tel"
                      className="bg-[#1a1512] border-copper/30 text-cream focus:ring-copper focus:border-copper transition-all h-12" 
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream mb-3 font-heading text-sm tracking-wide">Дата и время</label>
                    <Input 
                      required
                      type="datetime-local"
                      className="bg-[#1a1512] border-copper/30 text-cream focus:ring-copper focus:border-copper transition-all h-12" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cream mb-3 font-heading text-sm tracking-wide">Количество гостей</label>
                    <Input 
                      required
                      type="number"
                      min="1"
                      className="bg-[#1a1512] border-copper/30 text-cream focus:ring-copper focus:border-copper transition-all h-12" 
                      placeholder="4"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-cream mb-3 font-heading text-sm tracking-wide">Комментарий</label>
                  <Textarea 
                    className="bg-[#1a1512] border-copper/30 text-cream focus:ring-copper focus:border-copper transition-all resize-none" 
                    placeholder="Дополнительные пожелания..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-copper hover:bg-honey-gold text-white font-heading text-lg py-6 transition-all duration-300 group border-2 border-copper hover:border-honey-gold"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-cream/40 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Modern */}
      <footer className="bg-[#0a0806] py-16 px-4 border-t border-copper/10">
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
              <p className="text-warm-light/60 text-sm leading-relaxed mb-6">
                Традиции живут в тепле.<br/>
                Возрождаем древнее искусство банной культуры.
              </p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Youtube'].map(social => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-copper/20 to-honey-gold/10 border border-copper/30 flex items-center justify-center hover:border-copper hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon name={social as any} size={18} className="text-copper group-hover:text-honey-gold transition-colors" />
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
                  { label: 'Дома', id: 'houses' },
                  { label: 'Ритуалы', id: 'rituals' },
                  { label: 'Галерея', id: 'gallery' }
                ].map(link => (
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
                <a href="tel:+79991234567" className="flex items-center gap-3 text-warm-light/70 hover:text-copper transition-colors text-sm group">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/30 group-hover:border-copper transition-all">
                    <Icon name="Phone" size={16} className="text-copper" />
                  </div>
                  <div>
                    <div className="text-xs text-cream/40 mb-1">Звоните</div>
                    +7 (999) 123-45-67
                  </div>
                </a>
                
                <a href="mailto:info@steamlab.ru" className="flex items-center gap-3 text-warm-light/70 hover:text-copper transition-colors text-sm group">
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
              <button className="hover:text-copper transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-copper transition-colors">Условия использования</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}