import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mythicalCreatures = [
    {
      id: 1,
      name: "Дракон",
      type: "Древний",
      danger: "Высокая",
      habitat: "Горные пещеры",
      description: "Величественное крылатое существо, охраняющее сокровища в глубинах горных пещер. Обладает огненным дыханием и мудростью веков.",
      abilities: ["Огненное дыхание", "Полёт", "Магическая защита"],
      element: "Огонь",
      image: "/img/c09cd78c-383b-455a-94ca-55f2e6dd215a.jpg"
    },
    {
      id: 2,
      name: "Фенікс",
      type: "Бессмертный",
      danger: "Низкая",
      habitat: "Священные храмы",
      description: "Птица из легенд, способная возрождаться из собственного пепла. Символ вечной жизни и обновления.",
      abilities: ["Возрождение", "Целительный огонь", "Пророчество"],
      element: "Огонь/Свет",
      image: "/img/f19e2f0f-35bc-44e6-b8a2-995a7fe8c658.jpg"
    },
    {
      id: 3,
      name: "Кракен",
      type: "Морской",
      danger: "Критическая",
      habitat: "Глубины океана",
      description: "Гигантский осьминог из морских глубин, способный потопить целый флот своими щупальцами.",
      abilities: ["Морской шторм", "Сокрушительные щупальца", "Подводное господство"],
      element: "Вода",
      image: "/img/1d9b28cb-aece-4698-8375-03f0b9650cd3.jpg"
    }
  ];

  const getDangerColor = (danger: string) => {
    switch(danger) {
      case 'Критическая': return 'bg-gothic-crimson text-gothic-gold';
      case 'Высокая': return 'bg-gothic-burgundy text-gothic-gold';
      case 'Низкая': return 'bg-gothic-gray text-gothic-gold';
      default: return 'bg-gothic-gray text-gothic-gold';
    }
  };

  return (
    <div className="min-h-screen bg-gothic-black text-gothic-gold">
      {/* Header with Logo */}
      <header className="relative border-b border-gothic-gold/20 bg-gothic-charcoal/50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-gothic font-bold animate-glow">Бестиарий Мифических Существ</h1>
          <div className="flex items-center space-x-2 bg-gothic-crimson/20 px-4 py-2 rounded border border-gothic-gold/30">
            <Icon name="Shield" size={20} className="text-gothic-gold" />
            <span className="font-parchment text-sm">ЖК Мурино</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gothic-charcoal to-gothic-black">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 5L55 35L85 35L65 55L75 85L50 70L25 85L35 55L15 35L45 35Z" fill="%23ffd700" /%3E%3C/svg%3E')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-parchment font-bold mb-6 animate-float text-gothic-gold">
              Древние Тайны
            </h2>
            <p className="text-xl font-body mb-8 leading-relaxed text-gothic-gold/80">
              Откройте врата в мир забытых легенд и мифических существ. 
              Здесь собраны знания о тварях, что скрываются в тенях нашего мира, 
              ожидая смелых душ, готовых познать их тайны.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gothic-crimson hover:bg-gothic-burgundy text-gothic-gold border border-gothic-gold/50 px-8 py-3 text-lg font-gothic">
                <Icon name="Book" className="mr-2" size={20} />
                Изучить Бестиарий
              </Button>
              <Button variant="outline" className="border-gothic-gold/50 text-gothic-gold hover:bg-gothic-gold/10 px-8 py-3 text-lg font-gothic">
                <Icon name="Scroll" className="mr-2" size={20} />
                Древние Свитки
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Creatures Gallery */}
      <section className="py-16 bg-gothic-charcoal/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-parchment font-bold mb-4 text-gothic-gold">
              Каталог Существ
            </h3>
            <p className="text-lg text-gothic-gold/70 max-w-2xl mx-auto">
              Каждое существо в этом бестиарии было тщательно задокументировано древними мудрецами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mythicalCreatures.map((creature) => (
              <Card 
                key={creature.id} 
                className="bg-gothic-black/80 border-gothic-gold/30 hover:border-gothic-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gothic-gold/20 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-gothic text-gothic-gold group-hover:animate-glow">
                      {creature.name}
                    </CardTitle>
                    <Badge className={`${getDangerColor(creature.danger)} font-gothic text-xs px-3 py-1`}>
                      {creature.danger}
                    </Badge>
                  </div>
                  <CardDescription className="text-gothic-gold/70 font-body">
                    {creature.type} • {creature.habitat}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="h-48 bg-gothic-gray/20 rounded border border-gothic-gold/20 overflow-hidden group-hover:border-gothic-gold/60 transition-all duration-300">
                    <img 
                      src={creature.image} 
                      alt={creature.name}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  <p className="text-gothic-gold/80 font-body text-sm leading-relaxed">
                    {creature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gothic-gold/70">
                      <Icon name="Flame" size={16} className="mr-2" />
                      <span className="font-gothic">Стихия: {creature.element}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-sm font-gothic text-gothic-gold/70">Способности:</span>
                      <div className="flex flex-wrap gap-1">
                        {creature.abilities.map((ability, index) => (
                          <Badge 
                            key={index}
                            variant="outline" 
                            className="text-xs border-gothic-gold/30 text-gothic-gold/80 bg-gothic-charcoal/50"
                          >
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-gothic-gold/50 text-gothic-gold hover:bg-gothic-gold/10 font-gothic mt-4"
                  >
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mystical Symbols Section */}
      <section className="py-16 bg-gothic-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-3xl font-parchment font-bold mb-8 text-gothic-gold">
              Древние Символы Защиты
            </h4>
            <div className="flex justify-center space-x-12 items-center animate-float">
              <Icon name="Shield" size={60} className="text-gothic-gold opacity-70 hover:opacity-100 transition-opacity animate-flicker" />
              <Icon name="Star" size={50} className="text-gothic-gold opacity-70 hover:opacity-100 transition-opacity animate-flicker" />
              <Icon name="Crown" size={55} className="text-gothic-gold opacity-70 hover:opacity-100 transition-opacity animate-flicker" />
              <Icon name="Gem" size={45} className="text-gothic-gold opacity-70 hover:opacity-100 transition-opacity animate-flicker" />
            </div>
            <p className="mt-8 text-gothic-gold/70 font-body max-w-2xl mx-auto">
              Эти древние символы использовались мудрецами для защиты от злых духов и призыва добрых сил
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gothic-charcoal border-t border-gothic-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gothic-gold/60 font-body">
            © Древние времена • Бестиарий мифических существ • ЖК Мурино
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Icon name="Book" size={20} className="text-gothic-gold/40 hover:text-gothic-gold/70 transition-colors" />
            <Icon name="Scroll" size={20} className="text-gothic-gold/40 hover:text-gothic-gold/70 transition-colors" />
            <Icon name="Shield" size={20} className="text-gothic-gold/40 hover:text-gothic-gold/70 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;