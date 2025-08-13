"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.reservations": "Reservations",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Authentic Pakistani & Indian Cuisine",
    "hero.subtitle":
      "Experience the finest halal dining in Porto with traditional flavors, premium ingredients, and elegant atmosphere.",
    "hero.cta.menu": "View Menu",
    "hero.cta.reserve": "Reserve Table",

    // Reviews
    "reviews.title": "What Our Guests Say",
    "reviews.subtitle":
      "Experience the authentic flavors that have earned us recognition from food lovers across Porto",
    "reviews.google": "Google Reviews",
    "reviews.tripadvisor": "TripAdvisor Reviews",

    // About
    "about.title": "Our Story",
    "about.subtitle":
      "At Turmeric, we bring the authentic flavors of Pakistani and Indian cuisine to Porto, combining traditional recipes with luxury dining experience. Every dish tells a story of heritage, quality, and passion for excellence.",
    "about.feature1.title": "Premium Quality Food",
    "about.feature1.desc":
      "We source the finest ingredients and authentic spices to create exceptional Pakistani and Indian dishes that celebrate traditional flavors.",
    "about.feature2.title": "Professional & Friendly Staff",
    "about.feature2.desc":
      "Our experienced team combines warm hospitality with professional service, ensuring every guest feels welcomed and valued.",
    "about.feature3.title": "100% Halal Certified",
    "about.feature3.desc":
      "Every ingredient and dish is carefully prepared according to halal standards, providing peace of mind without compromising quality.",
    "about.feature4.title": "Attention to Detail",
    "about.feature4.desc":
      "From elegant presentation to personalized service, we believe luxury lies in the details. Every aspect of your experience is thoughtfully crafted.",
    "about.why.title": "What Makes Turmeric Special",
    "about.why.recipe.title": "Authentic Recipes",
    "about.why.recipe.desc":
      "Passed down through generations, our recipes maintain the true essence of Pakistani and Indian cuisine.",
    "about.why.ingredients.title": "Fresh Ingredients",
    "about.why.ingredients.desc":
      "We source premium, fresh ingredients daily to ensure every dish meets our high standards.",
    "about.why.ambiance.title": "Elegant Ambiance",
    "about.why.ambiance.desc":
      "Our restaurant combines traditional charm with modern luxury for an unforgettable dining experience.",

    // Atmosphere
    "atmosphere.title": "Our Atmosphere",
    "atmosphere.subtitle":
      "Step into a world where nature meets culture, creating the perfect backdrop for memorable dining experiences",
    "atmosphere.feature1.title": "Natural Ambiance",
    "atmosphere.feature1.desc":
      "Experience dining surrounded by beautiful botanical elements that create a serene and welcoming atmosphere.",
    "atmosphere.feature2.title": "Family Friendly",
    "atmosphere.feature2.desc":
      "A warm, welcoming space perfect for family gatherings, romantic dinners, and special celebrations.",
    "atmosphere.feature3.title": "Elegant Design",
    "atmosphere.feature3.desc":
      "Thoughtfully designed interiors that blend traditional Pakistani culture with modern Portuguese elegance.",
    "atmosphere.feature4.title": "Community Space",
    "atmosphere.feature4.desc":
      "More than a restaurant - a gathering place where cultures meet and friendships are formed over authentic cuisine.",
    "atmosphere.highlight.title": "A Unique Dining Experience",
    "atmosphere.highlight.desc":
      "At Turmeric, we believe that dining is about more than just food. It's about creating connections, celebrating culture, and enjoying life's precious moments in a space that feels like home.",
    "atmosphere.stats.years": "Years of Excellence",
    "atmosphere.stats.customers": "Satisfied Customers",
    "atmosphere.stats.halal": "Halal Certification",

    // Menu
    "menu.title": "Our Menu",
    "menu.subtitle":
      "Discover authentic Pakistani and Indian cuisine crafted with love, premium ingredients, and traditional recipes passed down through generations",
    "menu.halal": "100% Halal",
    "menu.fresh": "Fresh Daily",
    "menu.popular": "Popular",
    "menu.cta.title": "Ready to Experience Authentic Flavors?",
    "menu.cta.desc":
      "Book your table now and let us take you on a culinary journey through Pakistan and India, where every dish is prepared with fresh, high-quality ingredients and traditional recipes.",
    "menu.cta.button": "Reserve Your Table",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle":
      "Take a visual journey through our restaurant and discover the ambiance that makes Turmeric special",

    // Reservations
    "reservations.title": "Reservations",
    "reservations.subtitle":
      "Book your table for an unforgettable dining experience with authentic Pakistani and Indian cuisine",
    "reservations.form.title": "Make a Reservation",
    "reservations.form.subtitle":
      "Reserve your table and let us create a memorable experience for you",
    "reservations.form.name": "Full Name *",
    "reservations.form.email": "Email Address *",
    "reservations.form.phone": "Phone Number *",
    "reservations.form.date": "Date *",
    "reservations.form.time": "Time *",
    "reservations.form.guests": "Guests *",
    "reservations.form.requests": "Special Requests (Optional)",
    "reservations.form.submit": "Book Table",
    "reservations.form.confirmation":
      "* We'll confirm your reservation within 24 hours via phone or email",
    "reservations.form.success.title": "Reservation Submitted!",
    "reservations.form.success.message":
      "Thank you for choosing Turmeric. We'll contact you within 24 hours to confirm your reservation.",
    "reservations.form.placeholder.name": "Enter your full name",
    "reservations.form.placeholder.phone": "+351 XXX XXX XXX",
    "reservations.form.placeholder.email": "your.email@example.com",
    "reservations.form.placeholder.time": "Select time",
    "reservations.form.placeholder.guests": "Number",
    "reservations.form.placeholder.requests":
      "Any special dietary requirements, celebration notes, or seating preferences...",
    "reservations.form.guest.singular": "Guest",
    "reservations.form.guest.plural": "Guests",
    "reservations.hours.title": "Operating Hours",
    "reservations.hours.note":
      "Note: We recommend making reservations in advance, especially for weekend dining.",
    "reservations.hours.days.thursday": "Thursday",
    "reservations.hours.days.friday": "Friday",
    "reservations.hours.days.saturday": "Saturday",
    "reservations.hours.days.sunday": "Sunday",
    "reservations.hours.days.monday": "Monday",
    "reservations.hours.days.tuesday": "Tuesday",
    "reservations.hours.days.wednesday": "Wednesday",
    "reservations.hours.time": "15:00 - 23:00",
    language: "en",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We'd love to hear from you. Get in touch with us for reservations, inquiries, or just to say hello.",
    "contact.visit": "Visit Us",
    "contact.call": "Call Us",
    "contact.hours": "Opening Hours",
    "contact.daily": "Daily: 15:00 - 23:00",
    "contact.follow": "Follow Us",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.hours": "Opening Hours",
    "footer.daily": "Daily: 15:00 - 23:00",
    "footer.location": "Location",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",
    "footer.quicklinks": "Quick Links",
    "footer.contactinfo": "Contact Info",
    "footer.description":
      "Experience authentic Pakistani and Indian cuisine in the heart of Porto. We pride ourselves on serving halal, high-quality dishes with exceptional service in an elegant atmosphere.",
    "footer.rating": "4.9/5 Customer Rating",
    "footer.dailyhours": "Daily Opening Hours",
    "footer.everyday": "15:00 - 23:00 (Every Day)",
    "footer.recommendation": "Reservations recommended • Walk-ins welcome",
    "footer.copyright":
      "© 2025 Turmeric Restaurant. Made with ❤️ by Picky Pixels Studio",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.menu": "Menu",
    "nav.gallery": "Galeria",
    "nav.reservations": "Reservas",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Culinária Autêntica Paquistanesa e Indiana",
    "hero.subtitle":
      "Experiencie o melhor restaurante halal no Porto com sabores tradicionais, ingredientes premium e atmosfera elegante.",
    "hero.cta.menu": "Ver Menu",
    "hero.cta.reserve": "Reservar Mesa",

    // Reviews
    "reviews.title": "O Que Os Nossos Clientes Dizem",
    "reviews.subtitle":
      "Experiencie os sabores autênticos que nos valeram o reconhecimento de amantes da gastronomia em todo o Porto",
    "reviews.google": "Avaliações Google",
    "reviews.tripadvisor": "Avaliações TripAdvisor",

    // About
    "about.title": "A Nossa História",
    "about.subtitle":
      "No Turmeric, trazemos os sabores autênticos da culinária paquistanesa e indiana ao Porto, combinando receitas tradicionais com uma experiência gastronómica de luxo. Cada prato conta uma história de herança, qualidade e paixão pela excelência.",
    "about.feature1.title": "Comida de Qualidade Premium",
    "about.feature1.desc":
      "Obtemos os melhores ingredientes e especiarias autênticas para criar pratos excecionais paquistaneses e indianos que celebram sabores tradicionais.",
    "about.feature2.title": "Equipa Profissional e Simpática",
    "about.feature2.desc":
      "A nossa equipa experiente combina hospitalidade calorosa com serviço profissional, garantindo que cada hóspede se sinta bem-vindo e valorizado.",
    "about.feature3.title": "100% Certificado Halal",
    "about.feature3.desc":
      "Cada ingrediente e prato é cuidadosamente preparado de acordo com os padrões halal, proporcionando tranquilidade sem comprometer a qualidade.",
    "about.feature4.title": "Atenção aos Detalhes",
    "about.feature4.desc":
      "Desde a apresentação elegante ao serviço personalizado, acreditamos que o luxo está nos detalhes. Cada aspeto da sua experiência é cuidadosamente elaborado.",
    "about.why.title": "O Que Torna o Turmeric Especial",
    "about.why.recipe.title": "Receitas Autênticas",
    "about.why.recipe.desc":
      "Transmitidas através de gerações, as nossas receitas mantêm a verdadeira essência da culinária paquistanesa e indiana.",
    "about.why.ingredients.title": "Ingredientes Frescos",
    "about.why.ingredients.desc":
      "Obtemos ingredientes premium e frescos diariamente para garantir que cada prato atende aos nossos altos padrões.",
    "about.why.ambiance.title": "Ambiente Elegante",
    "about.why.ambiance.desc":
      "O nosso restaurante combina charme tradicional com luxo moderno para uma experiência gastronómica inesquecível.",

    // Atmosphere
    "atmosphere.title": "O Nosso Ambiente",
    "atmosphere.subtitle":
      "Entre num mundo onde a natureza encontra a cultura, criando o cenário perfeito para experiências gastronómicas memoráveis",
    "atmosphere.feature1.title": "Ambiente Natural",
    "atmosphere.feature1.desc":
      "Desfrute de uma refeição rodeada por belos elementos botânicos que criam uma atmosfera serena e acolhedora.",
    "atmosphere.feature2.title": "Ambiente Familiar",
    "atmosphere.feature2.desc":
      "Um espaço caloroso e acolhedor, perfeito para reuniões familiares, jantares românticos e celebrações especiais.",
    "atmosphere.feature3.title": "Design Elegante",
    "atmosphere.feature3.desc":
      "Interiores cuidadosamente projetados que combinam a cultura tradicional paquistanesa com a elegância portuguesa moderna.",
    "atmosphere.feature4.title": "Espaço Comunitário",
    "atmosphere.feature4.desc":
      "Mais do que um restaurante - um local de encontro onde culturas se encontram e amizades se formam em torno da culinária autêntica.",
    "atmosphere.highlight.title": "Uma Experiência Gastronómica Única",
    "atmosphere.highlight.desc":
      "No Turmeric, acreditamos que jantar é mais do que apenas comida. É sobre criar conexões, celebrar a cultura e desfrutar dos momentos preciosos da vida num espaço que se sente como casa.",
    "atmosphere.stats.years": "Anos de Excelência",
    "atmosphere.stats.customers": "Clientes Satisfeitos",
    "atmosphere.stats.halal": "Certificação Halal",

    // Menu
    "menu.title": "O Nosso Menu",
    "menu.subtitle":
      "Descubra a culinária autêntica paquistanesa e indiana elaborada com amor, ingredientes premium e receitas tradicionais transmitidas através de gerações",
    "menu.halal": "100% Halal",
    "menu.fresh": "Fresco Diariamente",
    "menu.popular": "Popular",
    "menu.cta.title": "Pronto para Experimentar Sabores Autênticos?",
    "menu.cta.desc":
      "Reserve a sua mesa agora e deixe-nos levá-lo numa jornada culinária através do Paquistão e da Índia, onde cada prato é preparado com ingredientes frescos e de alta qualidade e receitas tradicionais.",
    "menu.cta.button": "Reserve a Sua Mesa",

    // Gallery
    "gallery.title": "Galeria",
    "gallery.subtitle":
      "Faça uma jornada visual através do nosso restaurante e descubra o ambiente que torna o Turmeric especial",

    // Reservations
    "reservations.title": "Reservas",
    "reservations.subtitle":
      "Reserve a sua mesa para uma experiência gastronómica inesquecível com culinária autêntica paquistanesa e indiana",
    "reservations.form.title": "Fazer uma Reserva",
    "reservations.form.subtitle":
      "Reserve a sua mesa e deixe-nos criar uma experiência memorável para si",
    "reservations.form.name": "Nome Completo *",
    "reservations.form.email": "Endereço de Email *",
    "reservations.form.phone": "Número de Telefone *",
    "reservations.form.date": "Data *",
    "reservations.form.time": "Hora *",
    "reservations.form.guests": "Pessoas *",
    "reservations.form.requests": "Pedidos Especiais (Opcional)",
    "reservations.form.submit": "Reservar Mesa",
    "reservations.form.confirmation":
      "* Confirmaremos a sua reserva em 24 horas por telefone ou email",
    "reservations.form.success.title": "Reserva Enviada!",
    "reservations.form.success.message":
      "Obrigado por escolher o Turmeric. Entraremos em contacto consigo em 24 horas para confirmar a sua reserva.",
    "reservations.form.placeholder.name": "Introduza o seu nome completo",
    "reservations.form.placeholder.phone": "+351 XXX XXX XXX",
    "reservations.form.placeholder.email": "o.seu.email@exemplo.com",
    "reservations.form.placeholder.time": "Selecionar hora",
    "reservations.form.placeholder.guests": "Número",
    "reservations.form.placeholder.requests":
      "Quaisquer requisitos dietéticos especiais, notas de celebração ou preferências de lugar...",
    "reservations.form.guest.singular": "Pessoa",
    "reservations.form.guest.plural": "Pessoas",
    "reservations.hours.title": "Horário de Funcionamento",
    "reservations.hours.note":
      "Nota: Recomendamos fazer reservas com antecedência, especialmente para jantares de fim de semana.",
    "reservations.hours.days.thursday": "Quinta-feira",
    "reservations.hours.days.friday": "Sexta-feira",
    "reservations.hours.days.saturday": "Sábado",
    "reservations.hours.days.sunday": "Domingo",
    "reservations.hours.days.monday": "Segunda-feira",
    "reservations.hours.days.tuesday": "Terça-feira",
    "reservations.hours.days.wednesday": "Quarta-feira",
    "reservations.hours.time": "15:00 - 23:00",
    language: "pt",

    // Contact
    "contact.title": "Contacte-nos",
    "contact.subtitle":
      "Gostaríamos de ouvir de si. Entre em contacto connosco para reservas, perguntas ou apenas para dizer olá.",
    "contact.visit": "Visite-nos",
    "contact.call": "Telefone",
    "contact.hours": "Horário de Funcionamento",
    "contact.daily": "Diariamente: 15:00 - 23:00",
    "contact.follow": "Siga-nos",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",

    // Footer
    "footer.hours": "Horário de Funcionamento",
    "footer.daily": "Diariamente: 15:00 - 23:00",
    "footer.location": "Localização",
    "footer.contact": "Contacto",
    "footer.follow": "Siga-nos",
    "footer.rights": "Todos os direitos reservados.",
    "footer.quicklinks": "Links Rápidos",
    "footer.contactinfo": "Informações de Contacto",
    "footer.description":
      "Experiencie culinária autêntica paquistanesa e indiana no coração do Porto. Orgulhamo-nos de servir pratos halal de alta qualidade com serviço excecional num ambiente elegante.",
    "footer.rating": "4.9/5 Avaliação dos Clientes",
    "footer.dailyhours": "Horário Diário de Funcionamento",
    "footer.everyday": "15:00 - 23:00 (Todos os Dias)",
    "footer.recommendation": "Reservas recomendadas • Entrada livre bem-vinda",
    "footer.copyright":
      "© 2025 Restaurante Turmeric. Feito com ❤️ por Picky Pixels Studio",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string, fallback: string = key): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || fallback
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
