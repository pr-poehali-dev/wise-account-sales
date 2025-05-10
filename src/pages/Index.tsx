
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Данные о продуктах
  const products = {
    personal: [
      {
        id: 1,
        title: "Верифицированный аккаунт WISE Standard",
        description: "Полностью верифицированный аккаунт с базовыми возможностями для переводов и хранения средств.",
        price: 8900,
        tag: "Популярный",
        features: ["Полная верификация", "Мгновенные переводы", "Поддержка 50+ валют"],
        available: true
      },
      {
        id: 2,
        title: "Верифицированный аккаунт WISE Premium",
        description: "Расширенный аккаунт с повышенными лимитами и дополнительными функциями безопасности.",
        price: 14500,
        features: ["Повышенные лимиты", "Премиум поддержка", "Доступ к инвестиционным продуктам"],
        available: true
      },
      {
        id: 3,
        title: "Аккаунт WISE Business",
        description: "Аккаунт для предпринимателей и компаний с возможностью выставления счетов и интеграций API.",
        price: 22900,
        tag: "Бизнес",
        features: ["Корпоративные переводы", "API для интеграций", "Мультивалютные счета"],
        available: false
      }
    ],
    business: [
      {
        id: 4,
        title: "WISE Business Starter",
        description: "Базовый бизнес-аккаунт для индивидуальных предпринимателей и небольших компаний.",
        price: 19900,
        features: ["Бизнес-верификация", "Выставление счетов", "Интеграция с бухгалтерией"],
        available: true
      },
      {
        id: 5,
        title: "WISE Business Professional",
        description: "Полный набор инструментов для среднего бизнеса с возможностью управления несколькими счетами.",
        price: 34900,
        tag: "Премиум",
        features: ["Корпоративная карта", "Управление командой", "Расширенные отчеты"],
        available: true
      }
    ]
  };

  // FAQ данные
  const faqItems = [
    {
      question: "Что такое WISE и чем он полезен?",
      answer: "WISE (ранее TransferWise) — это финансовая технологическая компания, предоставляющая услуги международных денежных переводов. С помощью WISE вы можете отправлять деньги за границу с реальным обменным курсом и минимальными комиссиями, значительно дешевле, чем через традиционные банки."
    },
    {
      question: "Как происходит передача аккаунта WISE?",
      answer: "После оплаты вы получаете полный доступ к аккаунту, включая логин, пароль и данные для восстановления. Мы также предоставляем инструкцию по безопасной смене пароля и привязке ваших личных данных для дополнительной безопасности."
    },
    {
      question: "Законно ли покупать аккаунты WISE?",
      answer: "Наши аккаунты созданы легально и проходят полную верификацию. Однако, мы рекомендуем использовать их в соответствии с условиями использования сервиса WISE и законодательством вашей страны."
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы гарантируем работоспособность аккаунта в течение 24 часов с момента покупки. В случае возникновения проблем, мы предоставим замену или вернем средства. Для получения расширенной гарантии обратитесь к нашим менеджерам."
    }
  ];

  // Преимущества
  const advantages = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все аккаунты проходят проверку безопасности и передаются с полным доступом к восстановлению"
    },
    {
      icon: "Clock",
      title: "Экономия времени",
      description: "Получите полностью готовый к работе аккаунт без ожидания верификации"
    },
    {
      icon: "Globe",
      title: "Международные переводы",
      description: "Отправляйте и получайте платежи в 50+ валютах с минимальными комиссиями"
    },
    {
      icon: "BadgeCheck",
      title: "Гарантии",
      description: "Предоставляем гарантию на работоспособность всех приобретенных аккаунтов"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      {/* Шапка сайта */}
      <header className="bg-[#1c1e2d] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#9b69ff]">WISE<span className="text-white">Market</span></div>
          </div>
          <div className="flex space-x-3 items-center">
            <Button variant="ghost" className="text-white hover:text-[#9b69ff]">
              О нас
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#9b69ff]">
              Гарантии
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#9b69ff]">
              Поддержка
            </Button>
            <Button variant="outline" className="border-[#9b69ff] text-white hover:bg-[#9b69ff]">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero секция */}
      <section className="py-16 px-4 bg-[#1c1e2d] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Верифицированные аккаунты <span className="text-[#9b69ff]">WISE</span></h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Начните отправлять деньги за границу без ограничений и с минимальными комиссиями уже сегодня
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#9b69ff] hover:bg-[#8a5ae5] text-white px-6 py-6">
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Выбрать аккаунт
            </Button>
            <Button variant="outline" className="border-[#9b69ff] text-white hover:bg-[#9b69ff] px-6 py-6">
              <Icon name="HelpCircle" className="mr-2 h-5 w-5" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Табы с продуктами */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-3 text-lg font-medium rounded-l-md ${
                  activeTab === 'personal'
                    ? 'bg-[#9b69ff] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Для частных лиц
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 text-lg font-medium rounded-r-md ${
                  activeTab === 'business'
                    ? 'bg-[#9b69ff] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Для бизнеса
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeTab as keyof typeof products].map((product) => (
              <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                    {product.tag && (
                      <Badge className="bg-[#33c5af] hover:bg-[#2db19d]">{product.tag}</Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-[#1c1e2d]">
                      {product.price.toLocaleString()} ₽
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="Check" className="h-5 w-5 text-[#33c5af] mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-[#9b69ff] hover:bg-[#8a5ae5] text-white" 
                    disabled={!product.available}
                  >
                    {product.available ? (
                      <>
                        <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                        Купить аккаунт
                      </>
                    ) : "Нет в наличии"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#f5f6fa] rounded-full h-20 w-20 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#9b69ff] transition-colors duration-300">
                  <Icon name={item.icon} className="h-10 w-10 text-[#9b69ff] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f5f6fa]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium px-6 hover:text-[#9b69ff]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 px-4 bg-[#9b69ff] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать работу с WISE?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Приобретите верифицированный аккаунт и получите доступ к международным переводам с минимальными комиссиями
          </p>
          <Button className="bg-white text-[#9b69ff] hover:bg-gray-100 px-8 py-6 text-lg">
            <Icon name="ArrowRight" className="mr-2 h-5 w-5" />
            Выбрать аккаунт
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1c1e2d] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WISEMarket</h3>
              <p className="text-gray-400 mb-4">
                Крупнейший магазин верифицированных аккаунтов WISE для работы по всему миру.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Mail" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Продукты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантии</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  contact@wisemarket.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  +7 (995) 123-45-67
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                  @wise_market_support
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p>© 2023-2025 WISEMarket. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
