import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const AFFCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">ЭКСТРИМ КЛУБ</Link>
          <Button asChild variant="outline">
            <Link to="/">
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Назад
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                КУРС ОБУЧЕНИЯ AFF
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AFF (Accelerated Free Fall) — это международная программа ускоренного обучения свободному падению. За 7-10 дней вы пройдете путь от новичка до самостоятельного парашютиста с правом совершать прыжки без инструктора!
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Курс включает теоретическую подготовку и 7 учебных прыжков с постепенным усложнением задач. Первые прыжки вы совершаете с двумя инструкторами, которые страхуют вас в воздухе. С каждым прыжком вы становитесь всё более самостоятельным, пока не сможете совершать прыжки полностью сами.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">ПРЕИМУЩЕСТВА AFF</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">МЕЖДУНАРОДНЫЙ СЕРТИФИКАТ</p>
                      <p className="text-sm text-gray-600">Признается во всем мире</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Zap" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">БЫСТРОЕ ОБУЧЕНИЕ</p>
                      <p className="text-sm text-gray-600">7-10 дней до самостоятельных прыжков</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>
                      <p className="text-sm text-gray-600">Личные инструкторы на каждом этапе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">МАКСИМАЛЬНАЯ БЕЗОПАСНОСТЬ</p>
                      <p className="text-sm text-gray-600">Современное оборудование и опытные инструкторы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/7f7fb440-4e1e-403b-b53f-03d6bf8ed325.jpg"
                alt="Курс AFF"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">ПРОГРАММА КУРСА</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  level: "УРОВЕНЬ 1-2",
                  title: "Первые прыжки",
                  description: "2 инструктора, отработка устойчивого положения в свободном падении, раскрытие парашюта",
                  icon: "Rocket"
                },
                {
                  level: "УРОВЕНЬ 3-4",
                  title: "Развитие навыков",
                  description: "1-2 инструктора, повороты на 90°, контроль высоты, стабильное положение тела",
                  icon: "Target"
                },
                {
                  level: "УРОВЕНЬ 5-6",
                  title: "Самостоятельность",
                  description: "1 инструктор на расстоянии, повороты на 360°, движение вперёд-назад, полный контроль",
                  icon: "Award"
                },
                {
                  level: "УРОВЕНЬ 7",
                  title: "Выпускной прыжок",
                  description: "Полностью самостоятельный прыжок, инструктор наблюдает со стороны, получение сертификата",
                  icon: "Trophy"
                }
              ].map((level, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={level.icon as any} className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">{level.level}</p>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{level.title}</h3>
                      <p className="text-gray-600 text-sm">{level.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">СТОИМОСТЬ ОБУЧЕНИЯ</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 border-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">БАЗОВЫЙ КУРС</h3>
                  <p className="text-5xl font-bold text-secondary mb-2">65 000 ₽</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Теоретическая подготовка (8 часов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">7 учебных прыжков с инструкторами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Аренда всего оборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Учебные материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Международный сертификат AFF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Страховка на все прыжки</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" size="lg">ЗАПИСАТЬСЯ НА КУРС</Button>
              </Card>

              <Card className="p-8 border-primary border-2 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 rounded-full">
                  <span className="font-bold text-gray-900 text-sm">ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">PREMIUM КУРС</h3>
                  <p className="text-5xl font-bold text-primary mb-2">85 000 ₽</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Всё из базового курса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Видеосъёмка всех 7 прыжков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Разбор каждого прыжка по видео</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Брендированная экипировка в подарок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Приоритетная запись на прыжки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Скидка 15% на следующие 10 прыжков</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">ЗАПИСАТЬСЯ НА КУРС</Button>
              </Card>
            </div>
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg text-center max-w-2xl mx-auto">
              <p className="text-gray-700">
                <Icon name="Info" className="inline h-5 w-5 mr-2" />
                Возможна оплата частями! Первый взнос 30 000 ₽, остальное после 3-го прыжка.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary via-primary to-secondary p-12 rounded-2xl text-gray-900 mb-16">
            <h2 className="text-4xl font-bold mb-6">ПОЛУЧИТЕ СТАТУС "СПОРТСМЕН"</h2>
            <p className="text-lg mb-6">После успешного завершения курса AFF и получения сертификата вы можете:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur p-6 rounded-lg">
                <Icon name="Users" className="h-10 w-10 mb-3" />
                <h3 className="font-bold text-lg mb-2">Прыгать самостоятельно</h3>
                <p className="text-sm">В любой дропзоне мира с сертификатом AFF</p>
              </div>
              <div className="bg-white/20 backdrop-blur p-6 rounded-lg">
                <Icon name="Medal" className="h-10 w-10 mb-3" />
                <h3 className="font-bold text-lg mb-2">Участвовать в соревнованиях</h3>
                <p className="text-sm">Присоединяйтесь к нашей команде спортсменов</p>
              </div>
              <div className="bg-white/20 backdrop-blur p-6 rounded-lg">
                <Icon name="GraduationCap" className="h-10 w-10 mb-3" />
                <h3 className="font-bold text-lg mb-2">Обучаться дальше</h3>
                <p className="text-sm">Wingsuit, фрифлай, групповая акробатика</p>
              </div>
            </div>
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
            <p className="text-center text-gray-600 mb-6">Оставьте заявку и мы свяжемся с вами для обсуждения деталей курса</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Расскажите о вашем опыте и ожиданиях от курса"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2024 Экстрим Клуб</p>
          <p className="text-gray-400">Твоё новое хобби - 200% счастья</p>
        </div>
      </footer>
    </div>
  );
};

export default AFFCourse;
