import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const TandemJump = () => {
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
                ПРЫЖКИ В ТАНДЕМЕ С ИНСТРУКТОРОМ
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Тандем-прыжок — это парашютный прыжок с высоты 4000 метров в связке с профессиональным инструктором. Вы испытаете настоящее свободное падение со скоростью 200 км/ч в течение 60 секунд!
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Для тандем-прыжка не требуется специальная подготовка или опыт. Инструктор полностью контролирует прыжок от момента выхода из самолета до мягкого приземления. Всё, что вам нужно — это смелость и желание испытать невероятные ощущения!
              </p>
              
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">ЧТО ВХОДИТ В ПРЫЖОК</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">ИНСТРУКТАЖ</p>
                      <p className="text-sm text-gray-600">15-20 минут теории и практики</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">ПОЛЕТ НА ВЫСОТУ 4000М</p>
                      <p className="text-sm text-gray-600">20-25 минут в самолете</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">60 СЕКУНД СВОБОДНОГО ПАДЕНИЯ</p>
                      <p className="text-sm text-gray-600">Скорость до 200 км/ч</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">5 МИНУТ ПОД КУПОЛОМ</p>
                      <p className="text-sm text-gray-600">Парение и наслаждение видами</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/c4d859da-ae44-41d3-9e5c-c6a2e9bba885.jpg"
                alt="Тандем прыжок"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">СТОИМОСТЬ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">СТАНДАРТ</h3>
                  <p className="text-5xl font-bold text-secondary mb-2">12 500 ₽</p>
                  <p className="text-sm text-gray-600">за 1 прыжок</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Инструктаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Оборудование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Прыжок с инструктором</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Страховка</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">ЗАБРОНИРОВАТЬ</Button>
              </Card>

              <Card className="p-8 border-primary border-2 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 rounded-full">
                  <span className="font-bold text-gray-900 text-sm">ПОПУЛЯРНО</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">С ВИДЕОСЪЁМКОЙ</h3>
                  <p className="text-5xl font-bold text-primary mb-2">17 500 ₽</p>
                  <p className="text-sm text-gray-600">за 1 прыжок</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Всё из пакета "Стандарт"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Видеосъёмка от выхода до приземления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Монтаж ролика с музыкой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-semibold">Готовое видео в течение 24 часов</span>
                  </li>
                </ul>
                <Button className="w-full">ЗАБРОНИРОВАТЬ</Button>
              </Card>

              <Card className="p-8 border-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">VIP</h3>
                  <p className="text-5xl font-bold text-secondary mb-2">25 000 ₽</p>
                  <p className="text-sm text-gray-600">за 1 прыжок</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm">Всё из пакета "С видеосъёмкой"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm font-semibold">Две камеры съёмки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm font-semibold">Индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-sm font-semibold">Сертификат в подарок</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">ЗАБРОНИРОВАТЬ</Button>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary via-secondary to-primary p-12 rounded-2xl text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">ТРЕБОВАНИЯ К УЧАСТНИКАМ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <Icon name="User" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ВОЗРАСТ</h3>
                  <p>От 18 лет (от 14 с письменного согласия родителей)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Weight" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ВЕС</h3>
                  <p>До 110 кг (для женщин до 90 кг)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Heart" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ЗДОРОВЬЕ</h3>
                  <p>Отсутствие серьезных заболеваний сердца и опорно-двигательного аппарата</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
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
                  placeholder="Расскажите о ваших пожеланиях"
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

export default TandemJump;
