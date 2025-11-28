import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(84, 78%, 51%) 0%, hsl(84, 78%, 51%) 50%, hsl(199, 89%, 48%) 100%)`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 grid grid-cols-6 gap-1">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-900 rounded-full"></div>
            ))}
          </div>
          <div className="absolute bottom-20 right-20 w-32 h-32 grid grid-cols-6 gap-1">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-900 rounded-full"></div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-900"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/3">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-900"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-4 tracking-tight">
                ЭКСТРИМ
              </h1>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tight">
                КЛУБ
              </h2>
            </div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-wide">
              ТВОЁ НОВОЕ ХОББИ
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-1 w-20 bg-gray-900"></div>
              <p className="text-4xl md:text-6xl font-extrabold text-gray-900">
                200% СЧАСТЬЯ
              </p>
              <div className="h-1 w-20 bg-gray-900"></div>
            </div>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gray-900 hover:bg-gray-800 text-white font-bold"
              asChild
            >
              <a href="#services">
                ВЫБРАТЬ ТАРИФ
                <Icon name="ChevronDown" className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-gray-900" />
        </div>
      </div>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/afc74bb3-7a37-4519-bd68-e342f37c19c1.jpg"
                    alt="Аэротруба"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-gray-900 p-3 rounded-full">
                    <Icon name="Wind" className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">ПОЛЕТЫ В АЭРОТРУБЕ</h3>
                  <p className="text-gray-600 mb-6">
                    Испытай ощущение свободного падения в безопасной среде. Идеально для новичков и всей семьи!
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">От</p>
                      <p className="text-3xl font-bold text-primary">1 800 ₽</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Длительность</p>
                      <p className="text-xl font-bold text-gray-900">2-60 мин</p>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link to="/wind-tunnel">
                      ПОДРОБНЕЕ
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/c4d859da-ae44-41d3-9e5c-c6a2e9bba885.jpg"
                    alt="Тандем"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-secondary text-white p-3 rounded-full">
                    <Icon name="Plane" className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">ПРЫЖКИ В ТАНДЕМЕ</h3>
                  <p className="text-gray-600 mb-6">
                    Настоящий прыжок с парашютом с высоты 4000 метров в связке с инструктором. Адреналин гарантирован!
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">От</p>
                      <p className="text-3xl font-bold text-secondary">12 500 ₽</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Высота</p>
                      <p className="text-xl font-bold text-gray-900">4000 м</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    <Link to="/tandem-jump">
                      ПОДРОБНЕЕ
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/7f7fb440-4e1e-403b-b53f-03d6bf8ed325.jpg"
                    alt="AFF курс"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-gray-900 p-3 rounded-full">
                    <Icon name="Award" className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">КУРС ОБУЧЕНИЯ AFF</h3>
                  <p className="text-gray-600 mb-6">
                    Стань профессиональным парашютистом за 7-10 дней. Международный сертификат и свобода в небе!
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">От</p>
                      <p className="text-3xl font-bold text-primary">65 000 ₽</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Прыжков</p>
                      <p className="text-xl font-bold text-gray-900">7 шт</p>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link to="/aff-course">
                      ПОДРОБНЕЕ
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                {
                  icon: "Clock",
                  title: "Ежедневно",
                  subtitle: "и в любую погоду"
                },
                {
                  icon: "UserCheck",
                  title: "Профессиональные",
                  subtitle: "инструкторы"
                },
                {
                  icon: "CheckCircle2",
                  title: "Все необходимое уже",
                  subtitle: "включено в стоимость"
                },
                {
                  icon: "Palmtree",
                  title: "Комфортная зона",
                  subtitle: "отдыха"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-gray-900">КОНТАКТЫ</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <Icon name="Phone" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Телефон</h3>
                <a href="tel:+74912434662" className="text-secondary hover:underline text-lg">
                  +7 491 243-46-62
                </a>
                <br />
                <a href="tel:+79685998339" className="text-secondary hover:underline text-lg">
                  +7 968 599-83-39
                </a>
              </Card>
              <Card className="p-6">
                <Icon name="MapPin" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Адрес</h3>
                <p className="text-gray-600">
                  Аэродром Крутицы
                  <br />
                  Московская область
                </p>
              </Card>
              <Card className="p-6">
                <Icon name="Mail" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
                <a href="mailto:info@ekstrim-club.ru" className="text-secondary hover:underline text-lg">
                  info@ekstrim-club.ru
                </a>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Phone" className="h-5 w-5" />
                ЗАКАЗАТЬ ЗВОНОК
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                НАПИСАТЬ В WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2024 Экстрим Клуб</p>
          <p className="text-gray-400">Твоё новое хобби - 200% счастья</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
