import { useState } from 'react';
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
}

export default function Index() {
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

  const bathHouses: BathHouse[] = [
    {
      id: 1,
      name: 'Изба',
      capacity: 'До 6 человек',
      price: '4000 ₽/час',
      features: ['Русская печь', 'Дубовые веники', 'Чан под звёздами'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
    },
    {
      id: 2,
      name: 'Терем',
      capacity: 'До 10 человек',
      price: '6000 ₽/час',
      features: ['Панорамные окна', 'Бассейн', 'Массажная комната'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80'
    },
    {
      id: 3,
      name: 'Усадьба Premium',
      capacity: 'До 15 человек',
      price: '10000 ₽/час',
      features: ['Два парных отделения', 'Караоке', 'Банкетный зал', 'Барбекю-зона'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
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

  return (
    <div className="min-h-screen bg-graphite">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center steam-effect overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521133573892-e44906baee46?w=1920&q=80)',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="text-6xl md:text-8xl font-heading font-bold text-honey-gold tracking-wider" 
                 style={{ textShadow: '0 0 30px rgba(205, 127, 50, 0.5)' }}>
              STEAMLAB
            </div>
            <div className="h-1 bg-gradient-to-r from-transparent via-copper to-transparent mt-4"></div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading mb-6 text-cream">
            Пар. Камень. Время.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-warm-light opacity-90">
            Древние традиции в современном исполнении
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-copper hover:bg-honey-gold text-white font-heading text-lg glow-hover border-2 border-honey-gold"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Забронировать баню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cream text-cream hover:bg-cream hover:text-graphite font-heading text-lg"
              onClick={() => document.getElementById('houses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть дома
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-graphite to-[#1a1512]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading mb-8 text-honey-gold">
            История и философия
          </h2>
          <div className="w-24 h-1 bg-copper mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl leading-relaxed text-cream mb-8 font-light">
            Мы возвращаем древние традиции бань, сохраняя комфорт современности.
          </p>
          
          <p className="text-lg leading-relaxed text-warm-light opacity-80 max-w-3xl mx-auto">
            Каждый наш дом — это симфония натуральных материалов: массив кедра, речной камень, 
            кованая медь. Здесь технологии служат традициям, а не наоборот.
          </p>
        </div>
      </section>

      {/* Bath Houses Catalog */}
      <section id="houses" className="py-20 px-4 wood-texture">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading text-center mb-4 text-honey-gold">
            Наши дома
          </h2>
          <div className="w-24 h-1 bg-copper mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bathHouses.map((house, index) => (
              <Card 
                key={house.id}
                className="overflow-hidden bg-[#3a2f1f] border-2 border-wood-brown glow-hover cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedHouse(house.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={house.image} 
                    alt={house.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-heading text-honey-gold mb-2">{house.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="flex items-center gap-2 text-cream">
                      <Icon name="Users" size={18} />
                      {house.capacity}
                    </span>
                    <span className="text-2xl font-heading text-copper">{house.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {house.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-warm-light text-sm">
                        <Icon name="Check" size={16} className="text-copper" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-copper hover:bg-honey-gold text-white font-heading"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Забронировать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section className="py-20 px-4 bg-[#1a1512]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading text-center mb-4 text-honey-gold">
            Ритуалы и традиции
          </h2>
          <div className="w-24 h-1 bg-copper mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rituals.map((ritual, index) => (
              <div 
                key={index}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-copper to-honey-gold flex items-center justify-center glow-hover">
                  <Icon name={ritual.icon as any} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-heading text-honey-gold mb-3">{ritual.title}</h3>
                <p className="text-warm-light opacity-80 text-sm leading-relaxed">{ritual.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1512] to-graphite">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading text-center mb-4 text-honey-gold">
            Атмосфера
          </h2>
          <div className="w-24 h-1 bg-copper mx-auto mb-8"></div>
          <p className="text-center text-xl font-heading text-cream mb-16 italic">
            Каждый дом — история, написанная теплом
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
              'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
              'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
              'https://images.unsplash.com/photo-1521133573892-e44906baee46?w=800&q=80'
            ].map((img, idx) => (
              <div 
                key={idx}
                className="relative h-80 overflow-hidden rounded-lg group fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={img} 
                  alt={`Атмосфера ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 wood-texture">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading text-center mb-4 text-honey-gold">
            Бронирование
          </h2>
          <div className="w-24 h-1 bg-copper mx-auto mb-12"></div>
          
          <Card className="p-8 bg-[#3a2f1f] border-2 border-wood-brown">
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-cream mb-2 font-heading">Ваше имя</label>
                <Input 
                  required
                  className="bg-[#2a1f12] border-copper text-cream focus:ring-copper" 
                  placeholder="Иван Иванович"
                />
              </div>
              
              <div>
                <label className="block text-cream mb-2 font-heading">Телефон</label>
                <Input 
                  required
                  type="tel"
                  className="bg-[#2a1f12] border-copper text-cream focus:ring-copper" 
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              
              <div>
                <label className="block text-cream mb-2 font-heading">Дата и время</label>
                <Input 
                  required
                  type="datetime-local"
                  className="bg-[#2a1f12] border-copper text-cream focus:ring-copper" 
                />
              </div>
              
              <div>
                <label className="block text-cream mb-2 font-heading">Количество гостей</label>
                <Input 
                  required
                  type="number"
                  min="1"
                  className="bg-[#2a1f12] border-copper text-cream focus:ring-copper" 
                  placeholder="4"
                />
              </div>
              
              <div>
                <label className="block text-cream mb-2 font-heading">Комментарий</label>
                <Textarea 
                  className="bg-[#2a1f12] border-copper text-cream focus:ring-copper" 
                  placeholder="Дополнительные пожелания..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-copper hover:bg-honey-gold text-white font-heading text-lg py-6 glow-hover"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0806] py-12 px-4 border-t border-wood-brown">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading text-honey-gold mb-4">STEAMLAB</h3>
              <p className="text-warm-light opacity-80 text-sm">
                Традиции живут в тепле
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-cream mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-warm-light opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@steamlab.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Московская область
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-cream mb-4">Соцсети</h4>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Youtube'].map(social => (
                  <div 
                    key={social}
                    className="w-10 h-10 rounded-full bg-copper flex items-center justify-center cursor-pointer glow-hover"
                  >
                    <Icon name={social as any} size={20} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-wood-brown text-warm-light opacity-60 text-sm">
            © 2024 STEAMLAB. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}