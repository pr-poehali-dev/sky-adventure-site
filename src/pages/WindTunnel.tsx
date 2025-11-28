import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const WindTunnel = () => {
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
                ПОЛЕТЫ В АЭРОТРУБЕ
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Аэротруба - это по-настоящему захватывающий и безопасный аттракцион, в котором любой человек может испытать ощущение настоящего свободного падения. Воздушный поток подхватывает тело, и вот Вы уже парите над землей, ощущая восторг, от которого захватывает дух.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                На протяжении всего полета с Вами рядом будет находиться опытный инструктор. Полеты в аэродинамической трубе не требуют специальной физической подготовки и дарят невероятно сильные эмоции как взрослым, так и детям.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">НЕВЕРОЯТНЫЕ ЭМОЦИИ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">5 МИНУТ ПОЛЕТА</p>
                      <p className="text-sm text-gray-600">Ощущение свободы в воздухе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingUp" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">5 ПРЫЖКОВ С ПАРАШЮТОМ</p>
                      <p className="text-sm text-gray-600">Эквивалент по ощущениям</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Dumbbell" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">1 ЧАС ФИТНЕСС ТРЕНИРОВКИ</p>
                      <p className="text-sm text-gray-600">Физическая нагрузка</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/08fd97e7-8e26-47b2-b814-b08ccf8d6530/files/afc74bb3-7a37-4519-bd68-e342f37c19c1.jpg"
                alt="Полеты в аэротрубе"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">ТАРИФЫ</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { time: "2", price: "1 800", standard: "1 980" },
                { time: "4", price: "2 950", standard: "3 250", popular: true },
                { time: "6", price: "3 950", standard: "4 350" },
                { time: "8", price: "4 950", standard: "5 450" },
                { time: "10", price: "5 450", standard: "5 950" }
              ].map((tariff) => (
                <Card key={tariff.time} className={`p-6 relative ${tariff.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                  {tariff.popular && (
                    <div className="absolute -top-3 right-4">
                      <Icon name="Zap" className="h-8 w-8 text-primary fill-primary" />
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <p className="text-4xl font-bold text-primary mb-1">{tariff.time}</p>
                    <p className="text-sm text-gray-600 uppercase">минут</p>
                    <p className="text-xs text-gray-500">1 ЧЕЛОВЕК</p>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Скидка в будни с 11-16</span>
                      <span className="font-bold text-primary">{tariff.price} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Стандартный тариф</span>
                      <span className="font-bold text-gray-900">{tariff.standard} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full" variant={tariff.popular ? "default" : "outline"}>
                    ЗАБРОНИРОВАТЬ
                  </Button>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
              <Icon name="Users" className="h-6 w-6 text-primary mt-1" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Летать выгодно группой!</span> Чем больше минут, тем выгоднее летать. Берите с собой семью и друзей - вместе летать не только круто и весело, но ещё и выгодно!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-secondary p-12 rounded-2xl text-gray-900 mb-16">
            <h2 className="text-4xl font-bold mb-6">ПРИЯТНЫЕ БОНУСЫ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Icon name="Gift" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ДАРИМ МИНУТЫ ПОЛЕТА В ДЕНЬ ВАШЕГО РОЖДЕНИЯ</h3>
                  <p>В День Рождения, за 3 дне до и после него дарим 2 БЕСПЛАТНЫЕ минуты полета в аэротрубе</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Percent" className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">НЕЗАБЫВАЕМЫЕ ЭМОЦИИ - ВСЕГО ЗА 1 800 ₽</h3>
                  <p>Забронируйте полет в аэротрубе в будние дни с 11:00 до 16:00 и получите скидку 10%</p>
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

export default WindTunnel;
