"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt" | "ar" | "fr" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
  direction: "ltr" | "rtl";
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
    "reviews.googleTitle": "Google Reviews",
    "reviews.tripadvisorTitle": "TripAdvisor",
    "reviews.view": "View",
    "reviews.excellent": "Excellent",
    "reviews.verified": "Verified",
    "reviews.recommended": "Recommended",
    "reviews.reviewsCount": "Review",
    "reviews.reviewsCountPlural": "Reviews",

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
    "menu.categories.starters": "Starters",
    "menu.categories.grills": "Grills",
    "menu.categories.curryChicken": "Chicken Curry",
    "menu.categories.curryBeef": "Beef Curry",
    "menu.categories.curryLamb": "Lamb Curry",
    "menu.categories.curryFish": "Fish & Shrimp Curry",
    "menu.categories.curryVeg": "Vegetarian Curry",
    "menu.categories.bread": "Bread",
    "menu.categories.rice": "Rice",
    "menu.categories.desserts": "Desserts",
    "menu.categories.drinks": "Drinks",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle":
      "Take a visual journey through our restaurant and discover the ambiance that makes Turmeric special",
    "gallery.cta.title": "Ready to Create Your Own Memories?",
    "gallery.cta.description":
      "Join us for an unforgettable dining experience where every dish tells a story",
    "gallery.cta.button": "Book Your Table",
    "gallery.categories.interior": "Interior",
    "gallery.categories.experience": "Experience",
    "gallery.categories.appetizers": "Appetizers",
    "gallery.categories.mainDishes": "Main Dishes",
    "gallery.categories.grills": "Grills",
    "gallery.categories.beverages": "Beverages",
    "gallery.categories.desserts": "Desserts",

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
    "reservations.hours.time": "14:00 - 22:00",
    language: "en",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We'd love to hear from you. Get in touch with us for reservations, inquiries, or just to say hello.",
    "contact.visit": "Visit Us",
    "contact.call": "Call Us",
    "contact.hours": "Opening Hours",
    "contact.daily": "Daily: 14:00 - 22:00",
    "contact.follow": "Follow Us",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.hours": "Opening Hours",
    "footer.daily": "Daily: 14:00 - 22:00",
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
    "footer.everyday": "14:00 - 22:00 (Every Day)",
    "footer.recommendation": "Reservations recommended • Walk-ins welcome",
    "footer.copyright":
      "© 2025 Turmeric Restaurant. Made with ❤️ by Picky Pixels Studio",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Gallery Items
    "gallery.items.elegantAmbiance.title": "Elegant Ambiance",
    "gallery.items.elegantAmbiance.description":
      "Our beautifully designed restaurant with modern amenities and traditional charm",
    "gallery.items.familyDining.title": "Family Dining Experience",
    "gallery.items.familyDining.description":
      "Enjoy a family meal with our authentic dishes in a warm, welcoming atmosphere",
    "gallery.items.chickenSamosa.title": "Chicken Samosa",
    "gallery.items.chickenSamosa.description":
      "Crispy chicken samosas filled with aromatic spices and fresh herbs",
    "gallery.items.chickenLollypop.title": "Chicken Lollypop",
    "gallery.items.chickenLollypop.description":
      "Crispy and juicy chicken served as a lollypop, a delicious appetizer",
    "gallery.items.chickenKadhai.title": "Chicken Kadhai with Garlic Naan",
    "gallery.items.chickenKadhai.description":
      "Traditional chicken kadhai served with fresh and aromatic garlic naan bread",
    "gallery.items.tandooriFish.title": "Grilled Tandoori Fish",
    "gallery.items.tandooriFish.description":
      "Fresh fish marinated with tandoori spices and grilled to perfection in our traditional oven",
    "gallery.items.onionBhaji.title": "Onion Bhaji",
    "gallery.items.onionBhaji.description":
      "Sliced onions battered and fried with Indian spices, a crispy and flavorful appetizer",
    "gallery.items.mangoLassi.title": "Mango Lassi",
    "gallery.items.mangoLassi.description":
      "Traditional Indian drink made with fresh mango and yogurt, refreshing and nutritious",
    "gallery.items.rasmalaiKheer.title": "Rasmalai and Kheer",
    "gallery.items.rasmalaiKheer.description":
      "Traditional Indian desserts: soft Rasmalai and creamy Kheer to complete your meal",

    // Menu Items - Starters
    "menu.items.soupOfTheDay.title": "Soup of the Day",
    "menu.items.soupOfTheDay.description":
      "Fresh daily soup prepared with seasonal ingredients",
    "menu.items.turmericChickenLollypop.title": "Turmeric Chicken Lollypop",
    "menu.items.turmericChickenLollypop.description":
      "Crispy fried chicken wings, marinated in a blend of savory spices and sautéed in a homemade secret spicy sauce",
    "menu.items.chickenSamosa.title": "Chicken Samosa",
    "menu.items.chickenSamosa.description":
      "Crispy pastry filled with spiced ground chicken and aromatic herbs",
    "menu.items.vegetableSamosa.title": "Vegetable Samosa",
    "menu.items.vegetableSamosa.description":
      "Crispy pastry filled with a spiced mixture of potatoes, green peas and aromatic herbs",
    "menu.items.onionBhaji.title": "Onion Bhaji",
    "menu.items.onionBhaji.description":
      "Crispy, golden-fried onion fritters seasoned with aromatic spices",

    // Menu Items - Grills
    "menu.items.chickenTikka.title": "Chicken Tikka",
    "menu.items.chickenTikka.description":
      "Boneless chicken, marinated in yogurt, spices and grilled until juicy and tender with a hint of smokiness",
    "menu.items.tandooriFish.title": "Tandoori Fish",
    "menu.items.tandooriFish.description":
      "Marinated Dorada fish grilled in a tandoor, featuring smoky flavors and a blend of aromatic spices",
    "menu.items.murghSeekhKebab.title": "Murgh Seekh Kebab",
    "menu.items.murghSeekhKebab.description":
      "Grilled minced chicken kebabs, seasoned with aromatic spices",
    "menu.items.beefSeekhKebab.title": "Beef Seekh Kebab",
    "menu.items.beefSeekhKebab.description":
      "Grilled minced beef kebabs, seasoned with aromatic spices",
    "menu.items.chickenHariyaliTikka.title": "Chicken Hariyali Tikka",
    "menu.items.chickenHariyaliTikka.description":
      "Boneless chicken, marinated in yogurt, mint, coriander and grilled until juicy and tender",
    "menu.items.tandooriChicken.title": "Tandoori Chicken",
    "menu.items.tandooriChicken.description":
      "Chicken marinated in a blend of yogurt and spices, then grilled in a tandoor for a smoky, flavorful finish",

    // Menu Items - Chicken Curry
    "menu.items.butterChicken.title": "Butter Chicken",
    "menu.items.butterChicken.description":
      "Tender chicken in rich butter and tomato sauce",
    "menu.items.chickenTikkaMasala.title": "Chicken Tikka Masala",
    "menu.items.chickenTikkaMasala.description":
      "Grilled chicken in creamy spiced tomato sauce",
    "menu.items.chickenKadhai.title": "Chicken Kadhai",
    "menu.items.chickenKadhai.description":
      "Chicken with bell peppers in spicy tomato sauce",
    "menu.items.chickenCurry.title": "Chicken Curry",
    "menu.items.chickenCurry.description":
      "Traditional chicken curry with aromatic spices",
    "menu.items.chickenKorma.title": "Chicken Korma",
    "menu.items.chickenKorma.description":
      "Mild chicken curry in creamy coconut sauce",
    "menu.items.chickenVindaloo.title": "Chicken Vindaloo",
    "menu.items.chickenVindaloo.description":
      "Spicy chicken curry with vinegar and spices",
    "menu.items.mangoChicken.title": "Mango Chicken",
    "menu.items.mangoChicken.description":
      "Chicken curry with sweet mango flavor",
    "menu.items.chickenMadras.title": "Chicken Madras",
    "menu.items.chickenMadras.description":
      "Spicy South Indian style chicken curry",
    "menu.items.chickenPalak.title": "Chicken Palak",
    "menu.items.chickenPalak.description": "Chicken in creamy spinach sauce",

    // Menu Items - Beef Curry
    "menu.items.beefCurry.title": "Beef Curry",
    "menu.items.beefCurry.description":
      "Slow-cooked beef in traditional curry sauce",
    "menu.items.beefMadras.title": "Beef Madras",
    "menu.items.beefMadras.description":
      "Spicy beef curry with coconut and curry leaves",
    "menu.items.beefVindaloo.title": "Beef Vindaloo",
    "menu.items.beefVindaloo.description":
      "Fiery beef curry with vinegar and spices",

    // Menu Items - Lamb Curry
    "menu.items.lambKadhai.title": "Lamb Kadhai",
    "menu.items.lambKadhai.description":
      "Lamb cooked with bell peppers, onions, and a blend of spices in a rich, flavorful sauce",
    "menu.items.lambCurry.title": "Lamb Curry",
    "menu.items.lambCurry.description":
      "Home style lamb curry cooked with onion, tomato and traditional curry sauce",
    "menu.items.lambKorma.title": "Lamb Korma",
    "menu.items.lambKorma.description":
      "Lamb cooked in a creamy, mildly spiced sauce with a touch of sweetness",

    // Menu Items - Fish & Shrimp Curry
    "menu.items.doradaFishCurry.title": "Dorada Fish Curry",
    "menu.items.doradaFishCurry.description":
      "Dorada fish cooked with onion, tomato and traditional curry sauce",
    "menu.items.prawnMasala.title": "Prawn Masala",
    "menu.items.prawnMasala.description":
      "Prawn cooked in a velvety tomato sauce, infused with aromatic spices and a touch of cream",
    "menu.items.prawnMalaiCurry.title": "Prawn Malai Curry",
    "menu.items.prawnMalaiCurry.description":
      "Tender prawns cooked in a creamy coconut and mildly spiced sauce with a touch of sweetness",

    // Menu Items - Vegetarian Curry
    "menu.items.kadhaiPaneer.title": "Kadhai Paneer",
    "menu.items.kadhaiPaneer.description":
      "Cottage cheese with bell peppers in spicy tomato sauce",
    "menu.items.paneerButterMasala.title": "Paneer Butter Masala",
    "menu.items.paneerButterMasala.description":
      "Cottage cheese in rich butter and tomato sauce",
    "menu.items.palakPaneer.title": "Palak Paneer",
    "menu.items.palakPaneer.description":
      "Cottage cheese in creamy spinach sauce",
    "menu.items.matarPaneer.title": "Matar Paneer",
    "menu.items.matarPaneer.description":
      "Cottage cheese with green peas in curry sauce",
    "menu.items.bindhiMasala.title": "Bindhi Masala",
    "menu.items.bindhiMasala.description": "Okra cooked with onions and spices",
    "menu.items.alooGobi.title": "Aloo Gobi",
    "menu.items.alooGobi.description":
      "Potato and cauliflower curry with spices",
    "menu.items.alooPalak.title": "Aloo Palak",
    "menu.items.alooPalak.description": "Potatoes in creamy spinach sauce",
    "menu.items.vegKorma.title": "Veg Korma",
    "menu.items.vegKorma.description":
      "Mixed vegetables in creamy coconut sauce",
    "menu.items.daalMakhni.title": "Daal Makhni",
    "menu.items.daalMakhni.description":
      "Black lentils in rich butter and cream sauce",
    "menu.items.daalTadka.title": "Daal Tadka",
    "menu.items.daalTadka.description": "Yellow lentils tempered with spices",
    "menu.items.chanaMasala.title": "Chana Masala",
    "menu.items.chanaMasala.description":
      "Chickpeas in spicy tomato and onion sauce",

    // Menu Items - Bread
    "menu.items.plainNaan.title": "Plain Naan",
    "menu.items.plainNaan.description": "Traditional Indian flatbread",
    "menu.items.butterNaan.title": "Butter Naan",
    "menu.items.butterNaan.description": "Naan brushed with butter",
    "menu.items.garlicNaan.title": "Garlic Naan",
    "menu.items.garlicNaan.description": "Naan with garlic and herbs",
    "menu.items.cheeseNaan.title": "Cheese Naan",
    "menu.items.cheeseNaan.description": "Naan stuffed with cheese",
    "menu.items.garlicCheeseNaan.title": "Garlic Cheese Naan",
    "menu.items.garlicCheeseNaan.description": "Naan with garlic and cheese",
    "menu.items.paneerKulcha.title": "Paneer Kulcha",
    "menu.items.paneerKulcha.description":
      "Bread stuffed with spiced cottage cheese",
    "menu.items.alooKulcha.title": "Aloo Kulcha",
    "menu.items.alooKulcha.description": "Bread stuffed with spiced potatoes",
    "menu.items.peshwariNaan.title": "Peshwari Naan",
    "menu.items.peshwariNaan.description":
      "Sweet naan with coconut, raisins and nuts",
    "menu.items.tandooriRoti.title": "Tandoori Roti",
    "menu.items.tandooriRoti.description": "Whole wheat flatbread from tandoor",

    // Menu Items - Rice
    "menu.items.steamRice.title": "Steam Rice",
    "menu.items.steamRice.description": "Plain steamed basmati rice",
    "menu.items.chickenBiryani.title": "Chicken Biryani",
    "menu.items.chickenBiryani.description":
      "Fragrant basmati rice with spiced chicken",
    "menu.items.beefBiryani.title": "Beef Biryani",
    "menu.items.beefBiryani.description":
      "Aromatic rice with tender beef pieces",
    "menu.items.lambBiryani.title": "Lamb Biryani",
    "menu.items.lambBiryani.description":
      "Aromatic rice with tender lamb pieces",
    "menu.items.prawnBiryani.title": "Prawn Biryani",
    "menu.items.prawnBiryani.description":
      "Fragrant rice with succulent prawns",
    "menu.items.vegetableBiryani.title": "Vegetable Biryani",
    "menu.items.vegetableBiryani.description":
      "Mixed vegetables with fragrant basmati rice",
    "menu.items.biryaniRice.title": "Biryani Rice",
    "menu.items.biryaniRice.description": "Spiced basmati rice without meat",
    "menu.items.zeeraRice.title": "Zeera Rice",
    "menu.items.zeeraRice.description": "Basmati rice with cumin seeds",

    // Menu Items - Desserts
    "menu.items.rasmalai.title": "Rasmalai",
    "menu.items.rasmalai.description":
      "Cottage cheese dumplings in sweet milk with cardamom",
    "menu.items.kheer.title": "Kheer",
    "menu.items.kheer.description":
      "Rice pudding with nuts and aromatic spices",

    // Menu Items - Drinks
    "menu.items.mangoLassi.title": "Mango Lassi",
    "menu.items.mangoLassi.description": "Refreshing mango yogurt drink",
    "menu.items.sweetLassi.title": "Sweet Lassi",
    "menu.items.sweetLassi.description": "Traditional sweet yogurt drink",
    "menu.items.namkeenLassi.title": "Namkeen Lassi",
    "menu.items.namkeenLassi.description": "Savory salted yogurt drink",
    "menu.items.freshOrangeJuice.title": "Fresh Orange Juice",
    "menu.items.freshOrangeJuice.description": "Freshly squeezed orange juice",
    "menu.items.freshLemonMint.title": "Fresh Lemon Mint",
    "menu.items.freshLemonMint.description": "Refreshing lemon and mint drink",
    "menu.items.chaai.title": "Chaai",
    "menu.items.chaai.description": "Spiced tea with milk and aromatic herbs",
    "menu.items.cocaCola.title": "Coca Cola",
    "menu.items.cocaCola.description": "Classic refreshing cola",
    "menu.items.cocaColaZero.title": "Coca Cola Zero",
    "menu.items.cocaColaZero.description": "Zero calorie cola",
    "menu.items.fanta.title": "Fanta",
    "menu.items.fanta.description": "Orange flavored soft drink",
    "menu.items.sevenUp.title": "7 UP",
    "menu.items.sevenUp.description": "Lemon-lime flavored soft drink",
    "menu.items.guarana.title": "Guarana",
    "menu.items.guarana.description": "Brazilian guarana soft drink",
    "menu.items.liptonIceTeaMango.title": "Lipton Ice Tea Mango",
    "menu.items.liptonIceTeaMango.description": "Iced tea with mango flavor",
    "menu.items.liptonIceTeaPeach.title": "Lipton Ice Tea Peach",
    "menu.items.liptonIceTeaPeach.description": "Iced tea with peach flavor",
    "menu.items.liptonIceTeaLemon.title": "Lipton Ice Tea Lemon",
    "menu.items.liptonIceTeaLemon.description": "Iced tea with lemon flavor",
    "menu.items.pedrasLimao.title": "Pedras Limao 250ml",
    "menu.items.pedrasLimao.description": "Portuguese lemon sparkling water",
    "menu.items.pedrasSalgadas250.title": "Pedras Salgadas 250ml",
    "menu.items.pedrasSalgadas250.description":
      "Portuguese sparkling mineral water",
    "menu.items.pedrasSalgadas500.title": "Pedras Salgadas 500ml",
    "menu.items.pedrasSalgadas500.description":
      "Portuguese sparkling mineral water",
    "menu.items.water500.title": "Water 500ml",
    "menu.items.water500.description": "Still water",
    "menu.items.water1500.title": "Water 1.5Ltr",
    "menu.items.water1500.description": "Still water large bottle",

    // Additional UI Elements
    "ui.restaurantInformation": "Restaurant Information",
    "ui.reviewsAndRatings": "Reviews & Ratings",
    "ui.travelerReviews": "Traveler reviews",
    "ui.customerExperiences": "Customer experiences",
    "ui.openNow": "Open Now",
    "ui.closedNow": "Closed Now",
    "ui.getDirections": "Get Directions",
    "ui.viewLargerMap": "View larger map",
    "ui.keyboardShortcuts": "Keyboard shortcuts",
    "ui.mapData": "Map Data",
    "ui.terms": "Terms",
    "ui.reportMapError": "Report a map error",
    "ui.madeWith": "Made with",
    "ui.by": "by",
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
    "reviews.googleTitle": "Avaliações Google",
    "reviews.tripadvisorTitle": "TripAdvisor",
    "reviews.view": "Ver",
    "reviews.excellent": "Excelente",
    "reviews.verified": "Verificado",
    "reviews.recommended": "Recomendado",
    "reviews.reviewsCount": "Avaliação",
    "reviews.reviewsCountPlural": "Avaliações",

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
    "menu.categories.starters": "Entradas",
    "menu.categories.grills": "Grelhados",
    "menu.categories.curryChicken": "Caril de Frango",
    "menu.categories.curryBeef": "Caril de Vaca",
    "menu.categories.curryLamb": "Caril de Cordeiro",
    "menu.categories.curryFish": "Caril de Peixe e Camarão",
    "menu.categories.curryVeg": "Caril Vegetariano",
    "menu.categories.bread": "Pão",
    "menu.categories.rice": "Arroz",
    "menu.categories.desserts": "Sobremesas",
    "menu.categories.drinks": "Bebidas",

    // Gallery
    "gallery.title": "Galeria",
    "gallery.subtitle":
      "Faça uma jornada visual através do nosso restaurante e descubra o ambiente que torna o Turmeric especial",
    "gallery.cta.title": "Pronto para Criar as Suas Próprias Memórias?",
    "gallery.cta.description":
      "Junte-se a nós para uma experiência gastronómica inesquecível onde cada prato conta uma história",
    "gallery.cta.button": "Reserve a Sua Mesa",
    "gallery.categories.interior": "Interior",
    "gallery.categories.experience": "Experiência",
    "gallery.categories.appetizers": "Entradas",
    "gallery.categories.mainDishes": "Pratos Principais",
    "gallery.categories.grills": "Grelhados",
    "gallery.categories.beverages": "Bebidas",
    "gallery.categories.desserts": "Sobremesas",

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
    "reservations.hours.time": "14:00 - 22:00",
    language: "pt",

    // Contact
    "contact.title": "Contacte-nos",
    "contact.subtitle":
      "Gostaríamos de ouvir de si. Entre em contacto connosco para reservas, perguntas ou apenas para dizer olá.",
    "contact.visit": "Visite-nos",
    "contact.call": "Telefone",
    "contact.hours": "Horário de Funcionamento",
    "contact.daily": "Diariamente: 14:00 - 22:00",
    "contact.follow": "Siga-nos",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",

    // Footer
    "footer.hours": "Horário de Funcionamento",
    "footer.daily": "Diariamente: 14:00 - 22:00",
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
    "footer.everyday": "14:00 - 22:00 (Todos os Dias)",
    "footer.recommendation": "Reservas recomendadas • Entrada livre bem-vinda",
    "footer.copyright":
      "© 2025 Restaurante Turmeric. Feito com ❤️ por Picky Pixels Studio",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",

    // Gallery Items
    "gallery.items.elegantAmbiance.title": "Elegant Ambiance",
    "gallery.items.elegantAmbiance.description":
      "Our beautifully designed restaurant with modern amenities and traditional charm",
    "gallery.items.familyDining.title": "Family Dining Experience",
    "gallery.items.familyDining.description":
      "Enjoy a family meal with our authentic dishes in a warm, welcoming atmosphere",
    "gallery.items.chickenSamosa.title": "Chicken Samosa",
    "gallery.items.chickenSamosa.description":
      "Crispy chicken samosas filled with aromatic spices and fresh herbs",
    "gallery.items.chickenLollypop.title": "Chicken Lollypop",
    "gallery.items.chickenLollypop.description":
      "Crispy and juicy chicken served as a lollypop, a delicious appetizer",
    "gallery.items.chickenKadhai.title": "Chicken Kadhai with Garlic Naan",
    "gallery.items.chickenKadhai.description":
      "Traditional chicken kadhai served with fresh and aromatic garlic naan bread",
    "gallery.items.tandooriFish.title": "Grilled Tandoori Fish",
    "gallery.items.tandooriFish.description":
      "Fresh fish marinated with tandoori spices and grilled to perfection in our traditional oven",
    "gallery.items.onionBhaji.title": "Onion Bhaji",
    "gallery.items.onionBhaji.description":
      "Sliced onions battered and fried with Indian spices, a crispy and flavorful appetizer",
    "gallery.items.mangoLassi.title": "Mango Lassi",
    "gallery.items.mangoLassi.description":
      "Traditional Indian drink made with fresh mango and yogurt, refreshing and nutritious",
    "gallery.items.rasmalaiKheer.title": "Rasmalai and Kheer",
    "gallery.items.rasmalaiKheer.description":
      "Traditional Indian desserts: soft Rasmalai and creamy Kheer to complete your meal",

    // Menu Items - Starters
    "menu.items.soupOfTheDay.title": "Soup of the Day",
    "menu.items.soupOfTheDay.description":
      "Fresh daily soup prepared with seasonal ingredients",
    "menu.items.turmericChickenLollypop.title": "Turmeric Chicken Lollypop",
    "menu.items.turmericChickenLollypop.description":
      "Crispy fried chicken wings, marinated in a blend of savory spices and sautéed in a homemade secret spicy sauce",
    "menu.items.chickenSamosa.title": "Chicken Samosa",
    "menu.items.chickenSamosa.description":
      "Crispy pastry filled with spiced ground chicken and aromatic herbs",
    "menu.items.vegetableSamosa.title": "Vegetable Samosa",
    "menu.items.vegetableSamosa.description":
      "Crispy pastry filled with a spiced mixture of potatoes, green peas and aromatic herbs",
    "menu.items.onionBhaji.title": "Onion Bhaji",
    "menu.items.onionBhaji.description":
      "Crispy, golden-fried onion fritters seasoned with aromatic spices",

    // Menu Items - Grills
    "menu.items.chickenTikka.title": "Chicken Tikka",
    "menu.items.chickenTikka.description":
      "Boneless chicken, marinated in yogurt, spices and grilled until juicy and tender with a hint of smokiness",
    "menu.items.tandooriFish.title": "Tandoori Fish",
    "menu.items.tandooriFish.description":
      "Marinated Dorada fish grilled in a tandoor, featuring smoky flavors and a blend of aromatic spices",
    "menu.items.murghSeekhKebab.title": "Murgh Seekh Kebab",
    "menu.items.murghSeekhKebab.description":
      "Grilled minced chicken kebabs, seasoned with aromatic spices",
    "menu.items.beefSeekhKebab.title": "Beef Seekh Kebab",
    "menu.items.beefSeekhKebab.description":
      "Grilled minced beef kebabs, seasoned with aromatic spices",
    "menu.items.chickenHariyaliTikka.title": "Chicken Hariyali Tikka",
    "menu.items.chickenHariyaliTikka.description":
      "Boneless chicken, marinated in yogurt, mint, coriander and grilled until juicy and tender",
    "menu.items.tandooriChicken.title": "Tandoori Chicken",
    "menu.items.tandooriChicken.description":
      "Chicken marinated in a blend of yogurt and spices, then grilled in a tandoor for a smoky, flavorful finish",

    // Menu Items - Chicken Curry
    "menu.items.butterChicken.title": "Butter Chicken",
    "menu.items.butterChicken.description":
      "Tender chicken in rich butter and tomato sauce",
    "menu.items.chickenTikkaMasala.title": "Chicken Tikka Masala",
    "menu.items.chickenTikkaMasala.description":
      "Grilled chicken in creamy spiced tomato sauce",
    "menu.items.chickenKadhai.title": "Chicken Kadhai",
    "menu.items.chickenKadhai.description":
      "Chicken with bell peppers in spicy tomato sauce",
    "menu.items.chickenCurry.title": "Chicken Curry",
    "menu.items.chickenCurry.description":
      "Traditional chicken curry with aromatic spices",
    "menu.items.chickenKorma.title": "Chicken Korma",
    "menu.items.chickenKorma.description":
      "Mild chicken curry in creamy coconut sauce",
    "menu.items.chickenVindaloo.title": "Chicken Vindaloo",
    "menu.items.chickenVindaloo.description":
      "Spicy chicken curry with vinegar and spices",
    "menu.items.mangoChicken.title": "Mango Chicken",
    "menu.items.mangoChicken.description":
      "Chicken curry with sweet mango flavor",
    "menu.items.chickenMadras.title": "Chicken Madras",
    "menu.items.chickenMadras.description":
      "Spicy South Indian style chicken curry",
    "menu.items.chickenPalak.title": "Chicken Palak",
    "menu.items.chickenPalak.description": "Chicken in creamy spinach sauce",

    // Menu Items - Beef Curry
    "menu.items.beefCurry.title": "Beef Curry",
    "menu.items.beefCurry.description":
      "Slow-cooked beef in traditional curry sauce",
    "menu.items.beefMadras.title": "Beef Madras",
    "menu.items.beefMadras.description":
      "Spicy beef curry with coconut and curry leaves",
    "menu.items.beefVindaloo.title": "Beef Vindaloo",
    "menu.items.beefVindaloo.description":
      "Fiery beef curry with vinegar and spices",

    // Menu Items - Lamb Curry
    "menu.items.lambKadhai.title": "Lamb Kadhai",
    "menu.items.lambKadhai.description":
      "Lamb cooked with bell peppers, onions, and a blend of spices in a rich, flavorful sauce",
    "menu.items.lambCurry.title": "Lamb Curry",
    "menu.items.lambCurry.description":
      "Home style lamb curry cooked with onion, tomato and traditional curry sauce",
    "menu.items.lambKorma.title": "Lamb Korma",
    "menu.items.lambKorma.description":
      "Lamb cooked in a creamy, mildly spiced sauce with a touch of sweetness",

    // Menu Items - Fish & Shrimp Curry
    "menu.items.doradaFishCurry.title": "Dorada Fish Curry",
    "menu.items.doradaFishCurry.description":
      "Dorada fish cooked with onion, tomato and traditional curry sauce",
    "menu.items.prawnMasala.title": "Prawn Masala",
    "menu.items.prawnMasala.description":
      "Prawn cooked in a velvety tomato sauce, infused with aromatic spices and a touch of cream",
    "menu.items.prawnMalaiCurry.title": "Prawn Malai Curry",
    "menu.items.prawnMalaiCurry.description":
      "Tender prawns cooked in a creamy coconut and mildly spiced sauce with a touch of sweetness",

    // Menu Items - Vegetarian Curry
    "menu.items.kadhaiPaneer.title": "Kadhai Paneer",
    "menu.items.kadhaiPaneer.description":
      "Cottage cheese with bell peppers in spicy tomato sauce",
    "menu.items.paneerButterMasala.title": "Paneer Butter Masala",
    "menu.items.paneerButterMasala.description":
      "Cottage cheese in rich butter and tomato sauce",
    "menu.items.palakPaneer.title": "Palak Paneer",
    "menu.items.palakPaneer.description":
      "Cottage cheese in creamy spinach sauce",
    "menu.items.matarPaneer.title": "Matar Paneer",
    "menu.items.matarPaneer.description":
      "Cottage cheese with green peas in curry sauce",
    "menu.items.bindhiMasala.title": "Bindhi Masala",
    "menu.items.bindhiMasala.description": "Okra cooked with onions and spices",
    "menu.items.alooGobi.title": "Aloo Gobi",
    "menu.items.alooGobi.description":
      "Potato and cauliflower curry with spices",
    "menu.items.alooPalak.title": "Aloo Palak",
    "menu.items.alooPalak.description": "Potatoes in creamy spinach sauce",
    "menu.items.vegKorma.title": "Veg Korma",
    "menu.items.vegKorma.description":
      "Mixed vegetables in creamy coconut sauce",
    "menu.items.daalMakhni.title": "Daal Makhni",
    "menu.items.daalMakhni.description":
      "Black lentils in rich butter and cream sauce",
    "menu.items.daalTadka.title": "Daal Tadka",
    "menu.items.daalTadka.description": "Yellow lentils tempered with spices",
    "menu.items.chanaMasala.title": "Chana Masala",
    "menu.items.chanaMasala.description":
      "Chickpeas in spicy tomato and onion sauce",

    // Menu Items - Bread
    "menu.items.plainNaan.title": "Plain Naan",
    "menu.items.plainNaan.description": "Traditional Indian flatbread",
    "menu.items.butterNaan.title": "Butter Naan",
    "menu.items.butterNaan.description": "Naan brushed with butter",
    "menu.items.garlicNaan.title": "Garlic Naan",
    "menu.items.garlicNaan.description": "Naan with garlic and herbs",
    "menu.items.cheeseNaan.title": "Cheese Naan",
    "menu.items.cheeseNaan.description": "Naan stuffed with cheese",
    "menu.items.garlicCheeseNaan.title": "Garlic Cheese Naan",
    "menu.items.garlicCheeseNaan.description": "Naan with garlic and cheese",
    "menu.items.paneerKulcha.title": "Paneer Kulcha",
    "menu.items.paneerKulcha.description":
      "Bread stuffed with spiced cottage cheese",
    "menu.items.alooKulcha.title": "Aloo Kulcha",
    "menu.items.alooKulcha.description": "Bread stuffed with spiced potatoes",
    "menu.items.peshwariNaan.title": "Peshwari Naan",
    "menu.items.peshwariNaan.description":
      "Sweet naan with coconut, raisins and nuts",
    "menu.items.tandooriRoti.title": "Tandoori Roti",
    "menu.items.tandooriRoti.description": "Whole wheat flatbread from tandoor",

    // Menu Items - Rice
    "menu.items.steamRice.title": "Steam Rice",
    "menu.items.steamRice.description": "Plain steamed basmati rice",
    "menu.items.chickenBiryani.title": "Chicken Biryani",
    "menu.items.chickenBiryani.description":
      "Fragrant basmati rice with spiced chicken",
    "menu.items.beefBiryani.title": "Beef Biryani",
    "menu.items.beefBiryani.description":
      "Aromatic rice with tender beef pieces",
    "menu.items.lambBiryani.title": "Lamb Biryani",
    "menu.items.lambBiryani.description":
      "Aromatic rice with tender lamb pieces",
    "menu.items.prawnBiryani.title": "Prawn Biryani",
    "menu.items.prawnBiryani.description":
      "Fragrant rice with succulent prawns",
    "menu.items.vegetableBiryani.title": "Vegetable Biryani",
    "menu.items.vegetableBiryani.description":
      "Mixed vegetables with fragrant basmati rice",
    "menu.items.biryaniRice.title": "Biryani Rice",
    "menu.items.biryaniRice.description": "Spiced basmati rice without meat",
    "menu.items.zeeraRice.title": "Zeera Rice",
    "menu.items.zeeraRice.description": "Basmati rice with cumin seeds",

    // Menu Items - Desserts
    "menu.items.rasmalai.title": "Rasmalai",
    "menu.items.rasmalai.description":
      "Cottage cheese dumplings in sweet milk with cardamom",
    "menu.items.kheer.title": "Kheer",
    "menu.items.kheer.description":
      "Rice pudding with nuts and aromatic spices",

    // Menu Items - Drinks
    "menu.items.mangoLassi.title": "Mango Lassi",
    "menu.items.mangoLassi.description": "Refreshing mango yogurt drink",
    "menu.items.sweetLassi.title": "Sweet Lassi",
    "menu.items.sweetLassi.description": "Traditional sweet yogurt drink",
    "menu.items.namkeenLassi.title": "Namkeen Lassi",
    "menu.items.namkeenLassi.description": "Savory salted yogurt drink",
    "menu.items.freshOrangeJuice.title": "Fresh Orange Juice",
    "menu.items.freshOrangeJuice.description": "Freshly squeezed orange juice",
    "menu.items.freshLemonMint.title": "Fresh Lemon Mint",
    "menu.items.freshLemonMint.description": "Refreshing lemon and mint drink",
    "menu.items.chaai.title": "Chaai",
    "menu.items.chaai.description": "Spiced tea with milk and aromatic herbs",
    "menu.items.cocaCola.title": "Coca Cola",
    "menu.items.cocaCola.description": "Classic refreshing cola",
    "menu.items.cocaColaZero.title": "Coca Cola Zero",
    "menu.items.cocaColaZero.description": "Zero calorie cola",
    "menu.items.fanta.title": "Fanta",
    "menu.items.fanta.description": "Orange flavored soft drink",
    "menu.items.sevenUp.title": "7 UP",
    "menu.items.sevenUp.description": "Lemon-lime flavored soft drink",
    "menu.items.guarana.title": "Guarana",
    "menu.items.guarana.description": "Brazilian guarana soft drink",
    "menu.items.liptonIceTeaMango.title": "Lipton Ice Tea Mango",
    "menu.items.liptonIceTeaMango.description": "Iced tea with mango flavor",
    "menu.items.liptonIceTeaPeach.title": "Lipton Ice Tea Peach",
    "menu.items.liptonIceTeaPeach.description": "Iced tea with peach flavor",
    "menu.items.liptonIceTeaLemon.title": "Lipton Ice Tea Lemon",
    "menu.items.liptonIceTeaLemon.description": "Iced tea with lemon flavor",
    "menu.items.pedrasLimao.title": "Pedras Limao 250ml",
    "menu.items.pedrasLimao.description": "Portuguese lemon sparkling water",
    "menu.items.pedrasSalgadas250.title": "Pedras Salgadas 250ml",
    "menu.items.pedrasSalgadas250.description":
      "Portuguese sparkling mineral water",
    "menu.items.pedrasSalgadas500.title": "Pedras Salgadas 500ml",
    "menu.items.pedrasSalgadas500.description":
      "Portuguese sparkling mineral water",
    "menu.items.water500.title": "Water 500ml",
    "menu.items.water500.description": "Still water",
    "menu.items.water1500.title": "Water 1.5Ltr",
    "menu.items.water1500.description": "Still water large bottle",

    // Additional UI Elements
    "ui.restaurantInformation": "Restaurant Information",
    "ui.reviewsAndRatings": "Reviews & Ratings",
    "ui.travelerReviews": "Traveler reviews",
    "ui.customerExperiences": "Customer experiences",
    "ui.openNow": "Open Now",
    "ui.closedNow": "Closed Now",
    "ui.getDirections": "Get Directions",
    "ui.viewLargerMap": "View larger map",
    "ui.keyboardShortcuts": "Keyboard shortcuts",
    "ui.mapData": "Map Data",
    "ui.terms": "Terms",
    "ui.reportMapError": "Report a map error",
    "ui.madeWith": "Made with",
    "ui.by": "by",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.menu": "القائمة",
    "nav.gallery": "المعرض",
    "nav.reservations": "الحجوزات",
    "nav.contact": "اتصل بنا",

    // Hero
    "hero.title": "مأكولات باكستانية وهندية أصيلة",
    "hero.subtitle":
      "استمتع بأفضل مطعم حلال في بورتو مع النكهات التقليدية والمكونات المميزة والجو الأنيق.",
    "hero.cta.menu": "عرض القائمة",
    "hero.cta.reserve": "حجز طاولة",

    // Reviews
    "reviews.title": "ماذا يقول ضيوفنا",
    "reviews.subtitle":
      "استمتع بالنكهات الأصيلة التي أكسبتنا اعتراف عشاق الطعام في جميع أنحاء بورتو",
    "reviews.google": "تقييمات جوجل",
    "reviews.tripadvisor": "تقييمات تريب أدفايزر",
    "reviews.googleTitle": "تقييمات جوجل",
    "reviews.tripadvisorTitle": "تريب أدفايزر",
    "reviews.view": "عرض",
    "reviews.excellent": "ممتاز",
    "reviews.verified": "موثق",
    "reviews.recommended": "موصى به",
    "reviews.reviewsCount": "تقييم",
    "reviews.reviewsCountPlural": "تقييمات",

    // About
    "about.title": "قصتنا",
    "about.subtitle":
      "في تورمرك، نقدم النكهات الأصيلة للمأكولات الباكستانية والهندية إلى بورتو، ونجمع بين الوصفات التقليدية وتجربة الطعام الفاخرة. كل طبق يحكي قصة التراث والجودة والشغف بالتميز.",
    "about.feature1.title": "طعام بجودة مميزة",
    "about.feature1.desc":
      "نحصل على أفضل المكونات والتوابل الأصيلة لإنشاء أطباق باكستانية وهندية استثنائية تحتفل بالنكهات التقليدية.",
    "about.feature2.title": "موظفون محترفون وودودون",
    "about.feature2.desc":
      "فريقنا ذو الخبرة يجمع بين الضيافة الدافئة والخدمة المحترفة، مما يضمن شعور كل ضيف بالترحيب والتقدير.",
    "about.feature3.title": "حلال 100% معتمد",
    "about.feature3.desc":
      "كل مكون وطبق يتم إعداده بعناية وفقاً لمعايير الحلال، مما يوفر راحة البال دون المساس بالجودة.",
    "about.feature4.title": "الاهتمام بالتفاصيل",
    "about.feature4.desc":
      "من العرض الأنيق إلى الخدمة الشخصية، نؤمن أن الفخامة تكمن في التفاصيل. كل جانب من تجربتك يتم تصميمه بعناية.",
    "about.why.title": "ما الذي يجعل تورمرك مميزاً",
    "about.why.recipe.title": "وصفات أصيلة",
    "about.why.recipe.desc":
      "تم تمريرها عبر الأجيال، تحافظ وصفاتنا على الجوهر الحقيقي للمأكولات الباكستانية والهندية.",
    "about.why.ingredients.title": "مكونات طازجة",
    "about.why.ingredients.desc":
      "نحصل على مكونات مميزة وطازجة يومياً لضمان تلبية كل طبق لمعاييرنا العالية.",
    "about.why.ambiance.title": "جو أنيق",
    "about.why.ambiance.desc":
      "مطعمنا يجمع بين السحر التقليدي والفخامة الحديثة لتجربة طعام لا تُنسى.",

    // Atmosphere
    "atmosphere.title": "جو مطعمنا",
    "atmosphere.subtitle":
      "خطو إلى عالم حيث تلتقي الطبيعة بالثقافة، مما يخلق الخلفية المثالية لتجارب الطعام التي لا تُنسى",
    "atmosphere.feature1.title": "جو طبيعي",
    "atmosphere.feature1.desc":
      "استمتع بالطعام محاطاً بعناصر نباتية جميلة تخلق جو هادئ ومرحب.",
    "atmosphere.feature2.title": "صديق للعائلة",
    "atmosphere.feature2.desc":
      "مساحة دافئة ومرحبة مثالية للاجتماعات العائلية والعشاء الرومانسي والاحتفالات الخاصة.",
    "atmosphere.feature3.title": "تصميم أنيق",
    "atmosphere.feature3.desc":
      "داخلية مصممة بعناية تجمع بين الثقافة الباكستانية التقليدية والأناقة البرتغالية الحديثة.",
    "atmosphere.feature4.title": "مساحة مجتمعية",
    "atmosphere.feature4.desc":
      "أكثر من مجرد مطعم - مكان للاجتماع حيث تلتقي الثقافات وتتكون الصداقات حول الطعام الأصيل.",
    "atmosphere.highlight.title": "تجربة طعام فريدة",
    "atmosphere.highlight.desc":
      "في تورمرك، نؤمن أن الطعام هو أكثر من مجرد طعام. إنه عن خلق روابط والاحتفال بالثقافة والاستمتاع باللحظات الثمينة في الحياة في مساحة تشعر وكأنها المنزل.",
    "atmosphere.stats.years": "سنوات من التميز",
    "atmosphere.stats.customers": "عملاء راضون",
    "atmosphere.stats.halal": "شهادة الحلال",

    // Menu
    "menu.title": "قائمتنا",
    "menu.subtitle":
      "اكتشف المأكولات الباكستانية والهندية الأصيلة المصنوعة بالحب والمكونات المميزة والوصفات التقليدية التي تم تمريرها عبر الأجيال",
    "menu.halal": "حلال 100%",
    "menu.fresh": "طازج يومياً",
    "menu.popular": "شائع",
    "menu.cta.title": "مستعد لتجربة النكهات الأصيلة؟",
    "menu.cta.desc":
      "احجز طاولتك الآن ودعنا نأخذك في رحلة طعام عبر باكستان والهند، حيث يتم إعداد كل طبق بمكونات طازجة عالية الجودة ووصفات تقليدية.",
    "menu.cta.button": "احجز طاولتك",
    "menu.categories.starters": "المقبلات",
    "menu.categories.grills": "المشويات",
    "menu.categories.curryChicken": "كاري الدجاج",
    "menu.categories.curryBeef": "كاري اللحم البقري",
    "menu.categories.curryLamb": "كاري الضأن",
    "menu.categories.curryFish": "كاري السمك والروبيان",
    "menu.categories.curryVeg": "كاري نباتي",
    "menu.categories.bread": "الخبز",
    "menu.categories.rice": "الأرز",
    "menu.categories.desserts": "الحلويات",
    "menu.categories.drinks": "المشروبات",

    // Gallery
    "gallery.title": "المعرض",
    "gallery.subtitle":
      "خذ رحلة بصرية عبر مطعمنا واكتشف الجو الذي يجعل تورمرك مميزاً",
    "gallery.cta.title": "مستعد لخلق ذكرياتك الخاصة؟",
    "gallery.cta.description":
      "انضم إلينا لتجربة طعام لا تُنسى حيث يحكي كل طبق قصة",
    "gallery.cta.button": "احجز طاولتك",
    "gallery.categories.interior": "الداخلية",
    "gallery.categories.experience": "التجربة",
    "gallery.categories.appetizers": "المقبلات",
    "gallery.categories.mainDishes": "الأطباق الرئيسية",
    "gallery.categories.grills": "المشويات",
    "gallery.categories.beverages": "المشروبات",
    "gallery.categories.desserts": "الحلويات",

    // Reservations
    "reservations.title": "الحجوزات",
    "reservations.subtitle":
      "احجز طاولتك لتجربة طعام لا تُنسى مع المأكولات الباكستانية والهندية الأصيلة",
    "reservations.form.title": "احجز طاولة",
    "reservations.form.subtitle": "احجز طاولتك ودعنا نخلق لك تجربة لا تُنسى",
    "reservations.form.name": "الاسم الكامل *",
    "reservations.form.email": "عنوان البريد الإلكتروني *",
    "reservations.form.phone": "رقم الهاتف *",
    "reservations.form.date": "التاريخ *",
    "reservations.form.time": "الوقت *",
    "reservations.form.guests": "الضيوف *",
    "reservations.form.requests": "طلبات خاصة (اختياري)",
    "reservations.form.submit": "احجز طاولة",
    "reservations.form.confirmation":
      "* سنؤكد حجزك خلال 24 ساعة عبر الهاتف أو البريد الإلكتروني",
    "reservations.form.success.title": "تم إرسال الحجز!",
    "reservations.form.success.message":
      "شكراً لاختيارك تورمرك. سنتواصل معك خلال 24 ساعة لتأكيد حجزك.",
    "reservations.form.placeholder.name": "أدخل اسمك الكامل",
    "reservations.form.placeholder.phone": "+351 XXX XXX XXX",
    "reservations.form.placeholder.email": "بريدك.الإلكتروني@مثال.com",
    "reservations.form.placeholder.time": "اختر الوقت",
    "reservations.form.placeholder.guests": "العدد",
    "reservations.form.placeholder.requests":
      "أي متطلبات غذائية خاصة، ملاحظات احتفال، أو تفضيلات الجلوس...",
    "reservations.form.guest.singular": "ضيف",
    "reservations.form.guest.plural": "ضيوف",
    "reservations.hours.title": "ساعات العمل",
    "reservations.hours.note":
      "ملاحظة: نوصي بالحجز مسبقاً، خاصة لتناول الطعام في عطلة نهاية الأسبوع.",
    "reservations.hours.days.thursday": "الخميس",
    "reservations.hours.days.friday": "الجمعة",
    "reservations.hours.days.saturday": "السبت",
    "reservations.hours.days.sunday": "الأحد",
    "reservations.hours.days.monday": "الاثنين",
    "reservations.hours.days.tuesday": "الثلاثاء",
    "reservations.hours.days.wednesday": "الأربعاء",
    "reservations.hours.time": "14:00 - 22:00",
    language: "ar",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle":
      "نود أن نسمع منك. تواصل معنا للحجوزات أو الاستفسارات أو فقط لتحية.",
    "contact.visit": "زرنا",
    "contact.call": "اتصل بنا",
    "contact.hours": "ساعات العمل",
    "contact.daily": "يومياً: 14:00 - 22:00",
    "contact.follow": "تابعنا",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",

    // Footer
    "footer.hours": "ساعات العمل",
    "footer.daily": "يومياً: 14:00 - 22:00",
    "footer.location": "الموقع",
    "footer.contact": "اتصل بنا",
    "footer.follow": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.quicklinks": "روابط سريعة",
    "footer.contactinfo": "معلومات الاتصال",
    "footer.description":
      "استمتع بالمأكولات الباكستانية والهندية الأصيلة في قلب بورتو. نفخر بتقديم أطباق حلال عالية الجودة مع خدمة استثنائية في جو أنيق.",
    "footer.rating": "4.9/5 تقييم العملاء",
    "footer.dailyhours": "ساعات العمل اليومية",
    "footer.everyday": "14:00 - 22:00 (كل يوم)",
    "footer.recommendation": "الحجوزات موصى بها • الدخول بدون حجز مرحب به",
    "footer.copyright": "© 2025 مطعم تورمرك. صنع بـ ❤️ من استوديو بيكي بيكسيلز",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",

    // Gallery Items
    "gallery.items.elegantAmbiance.title": "الجو الأنيق",
    "gallery.items.elegantAmbiance.description":
      "مطعمنا المصمم بشكل جميل مع وسائل الراحة الحديثة والسحر التقليدي",
    "gallery.items.familyDining.title": "تجربة الطعام العائلي",
    "gallery.items.familyDining.description":
      "استمتع بوجبة عائلية مع أطباقنا الأصيلة في جو دافئ ومرحب",
    "gallery.items.chickenSamosa.title": "ساموسا الدجاج",
    "gallery.items.chickenSamosa.description":
      "ساموسا دجاج مقرمش محشو بالتوابل العطرية والأعشاب الطازجة",
    "gallery.items.chickenLollypop.title": "دجاج لولي بوب",
    "gallery.items.chickenLollypop.description":
      "دجاج مقرمش وعصير يقدم كلولي بوب، مقبلات لذيذة",
    "gallery.items.chickenKadhai.title": "دجاج كدهي مع نان الثوم",
    "gallery.items.chickenKadhai.description":
      "دجاج كدهي تقليدي يقدم مع خبز نان الثوم الطازج والعطري",
    "gallery.items.tandooriFish.title": "سمك تندوري مشوي",
    "gallery.items.tandooriFish.description":
      "سمك طازج منقوع بتوابل التندوري ومشوي إلى الكمال في فرننا التقليدي",
    "gallery.items.onionBhaji.title": "باجي البصل",
    "gallery.items.onionBhaji.description":
      "بصل مقطع ومغطى بالعجين ومقلي مع التوابل الهندية، مقبلات مقرمشة ولذيذة",
    "gallery.items.mangoLassi.title": "مانجو لاسي",
    "gallery.items.mangoLassi.description": "مشروب مانجو زبادي منعش",
    "gallery.items.rasmalaiKheer.title": "رسمالاي وخير",
    "gallery.items.rasmalaiKheer.description":
      "حلويات هندية تقليدية: رسمالاي ناعم وخير كريمي لإكمال وجبتك",

    // Menu Items - Starters
    "menu.items.soupOfTheDay.title": "حساء اليوم",
    "menu.items.soupOfTheDay.description": "حساء طازج يومي محضر بمكونات موسمية",
    "menu.items.turmericChickenLollypop.title": "دجاج لولي بوب بالكركم",
    "menu.items.turmericChickenLollypop.description":
      "أجنحة دجاج مقرمشة مقلية، منقوعة في مزيج من التوابل اللذيذة ومقلية في صلصة حارة سرية منزلية",
    "menu.items.chickenSamosa.title": "ساموسا الدجاج",
    "menu.items.chickenSamosa.description":
      "عجينة مقرمشة محشوة بدجاج مطحون متبل وأعشاب عطرية",
    "menu.items.vegetableSamosa.title": "ساموسا نباتي",
    "menu.items.vegetableSamosa.description":
      "عجينة مقرمشة محشوة بمزيج متبل من البطاطس والبازلاء الخضراء والأعشاب العطرية",
    "menu.items.onionBhaji.title": "باجي البصل",
    "menu.items.onionBhaji.description":
      "فطائر بصل مقرمشة ومذهبة، متبلة بالتوابل العطرية",

    // Menu Items - Grills
    "menu.items.chickenTikka.title": "تيكا الدجاج",
    "menu.items.chickenTikka.description":
      "دجاج بدون عظم، منقوع في الزبادي والتوابل ومشوي حتى يصبح عصيرياً وطرياً مع لمسة من النكهة المدخنة",
    "menu.items.tandooriFish.title": "سمك تندوري",
    "menu.items.tandooriFish.description":
      "سمك دورادا منقوع ومشوي في التندور، يتميز بنكهات مدخنة ومزيج من التوابل العطرية",
    "menu.items.murghSeekhKebab.title": "كاباب مورغ سيك",
    "menu.items.murghSeekhKebab.description":
      "كاباب دجاج مفروم مشوي، متبل بالتوابل العطرية",
    "menu.items.beefSeekhKebab.title": "كاباب لحم بقري سيك",
    "menu.items.beefSeekhKebab.description":
      "كاباب لحم بقري مفروم مشوي، متبل بالتوابل العطرية",
    "menu.items.chickenHariyaliTikka.title": "تيكا الدجاج هاريالي",
    "menu.items.chickenHariyaliTikka.description":
      "دجاج بدون عظم، منقوع في الزبادي والنعناع والكزبرة ومشوي حتى يصبح عصيرياً وطرياً",
    "menu.items.tandooriChicken.title": "دجاج تندوري",
    "menu.items.tandooriChicken.description":
      "دجاج منقوع في مزيج من الزبادي والتوابل، ثم مشوي في التندور للحصول على نكهة مدخنة ولذيذة",

    // Menu Items - Chicken Curry
    "menu.items.butterChicken.title": "دجاج بالزبدة",
    "menu.items.butterChicken.description": "دجاج طري في صلصة زبدة وطماطم غنية",
    "menu.items.chickenTikkaMasala.title": "تيكا ماسالا الدجاج",
    "menu.items.chickenTikkaMasala.description":
      "دجاج مشوي في صلصة طماطم كريمية متبلة",
    "menu.items.chickenKadhai.title": "كدهي الدجاج",
    "menu.items.chickenKadhai.description":
      "دجاج مع فلفل حلو في صلصة طماطم حارة",
    "menu.items.chickenCurry.title": "كاري الدجاج",
    "menu.items.chickenCurry.description": "كاري دجاج تقليدي مع توابل عطرية",
    "menu.items.chickenKorma.title": "كورما الدجاج",
    "menu.items.chickenKorma.description":
      "كاري دجاج خفيف في صلصة جوز هند كريمية",
    "menu.items.chickenVindaloo.title": "فيندالو الدجاج",
    "menu.items.chickenVindaloo.description": "كاري دجاج حار مع خل وتوابل",
    "menu.items.mangoChicken.title": "دجاج بالمانجو",
    "menu.items.mangoChicken.description": "كاري دجاج مع نكهة مانجو حلوة",
    "menu.items.chickenMadras.title": "مدراس الدجاج",
    "menu.items.chickenMadras.description":
      "كاري دجاج حار على الطريقة الجنوبية الهندية",
    "menu.items.chickenPalak.title": "دجاج بالسبانخ",
    "menu.items.chickenPalak.description": "دجاج في صلصة سبانخ كريمية",

    // Menu Items - Beef Curry
    "menu.items.beefCurry.title": "كاري اللحم البقري",
    "menu.items.beefCurry.description":
      "لحم بقري مطهو ببطء في صلصة كاري تقليدية",
    "menu.items.beefMadras.title": "مدراس اللحم البقري",
    "menu.items.beefMadras.description":
      "كاري لحم بقري حار مع جوز هند وأوراق كاري",
    "menu.items.beefVindaloo.title": "فيندالو اللحم البقري",
    "menu.items.beefVindaloo.description": "كاري لحم بقري ناري مع خل وتوابل",

    // Menu Items - Lamb Curry
    "menu.items.lambKadhai.title": "كدهي الضأن",
    "menu.items.lambKadhai.description":
      "ضأن مطهو مع فلفل حلو وبصل ومزيج من التوابل في صلصة غنية ولذيذة",
    "menu.items.lambCurry.title": "كاري الضأن",
    "menu.items.lambCurry.description":
      "كاري ضأن على الطريقة المنزلية، مطهو مع بصل وطماطم وصلصة كاري تقليدية",
    "menu.items.lambKorma.title": "كورما الضأن",
    "menu.items.lambKorma.description":
      "ضأن مطهو في صلصة كريمية خفيفة التوابل مع لمسة من الحلاوة",

    // Menu Items - Fish & Shrimp Curry
    "menu.items.doradaFishCurry.title": "كاري سمك دورادا",
    "menu.items.doradaFishCurry.description":
      "سمك دورادا مطهو مع بصل وطماطم وصلصة كاري تقليدية",
    "menu.items.prawnMasala.title": "ماسالا الروبيان",
    "menu.items.prawnMasala.description":
      "روبيان مطهو في صلصة طماطم ناعمة، معطر بالتوابل العطرية وملس من الكريمة",
    "menu.items.prawnMalaiCurry.title": "كاري مالاي الروبيان",
    "menu.items.prawnMalaiCurry.description":
      "روبيان طري مطهو في صلصة جوز هند كريمية خفيفة التوابل مع لمسة من الحلاوة",

    // Menu Items - Vegetarian Curry
    "menu.items.kadhaiPaneer.title": "كدهي بانير",
    "menu.items.kadhaiPaneer.description":
      "جبنة طازجة مع فلفل حلو في صلصة طماطم حارة",
    "menu.items.paneerButterMasala.title": "بانير بتر ماسالا",
    "menu.items.paneerButterMasala.description":
      "جبنة طازجة في صلصة زبدة وطماطم غنية",
    "menu.items.palakPaneer.title": "بالاك بانير",
    "menu.items.palakPaneer.description": "جبنة طازجة في صلصة سبانخ كريمية",
    "menu.items.matarPaneer.title": "ماتار بانير",
    "menu.items.matarPaneer.description":
      "جبنة طازجة مع بازلاء خضراء في صلصة كاري",
    "menu.items.bindhiMasala.title": "بيندي ماسالا",
    "menu.items.bindhiMasala.description": "بامية مطهوة مع بصل وتوابل",
    "menu.items.alooGobi.title": "آلو غوبي",
    "menu.items.alooGobi.description": "كاري بطاطس وقرنبيط مع توابل",
    "menu.items.alooPalak.title": "آلو بالاك",
    "menu.items.alooPalak.description": "بطاطس في صلصة سبانخ كريمية",
    "menu.items.vegKorma.title": "كورما نباتي",
    "menu.items.vegKorma.description": "خضروات مختلطة في صلصة جوز هند كريمية",
    "menu.items.daalMakhni.title": "دال ماخني",
    "menu.items.daalMakhni.description": "عدس أسود في صلصة زبدة وكريمة غنية",
    "menu.items.daalTadka.title": "دال تادكا",
    "menu.items.daalTadka.description": "عدس أصفر متبل بالتوابل",
    "menu.items.chanaMasala.title": "تشانا ماسالا",
    "menu.items.chanaMasala.description": "حمص في صلصة طماطم وبصل حارة",

    // Menu Items - Bread
    "menu.items.plainNaan.title": "نان عادي",
    "menu.items.plainNaan.description": "خبز هندي مسطح تقليدي",
    "menu.items.butterNaan.title": "نان بالزبدة",
    "menu.items.butterNaan.description": "نان مدهون بالزبدة",
    "menu.items.garlicNaan.title": "نان بالثوم",
    "menu.items.garlicNaan.description": "نان مع ثوم وأعشاب",
    "menu.items.cheeseNaan.title": "نان بالجبنة",
    "menu.items.cheeseNaan.description": "نان محشو بالجبنة",
    "menu.items.garlicCheeseNaan.title": "نان بالثوم والجبنة",
    "menu.items.garlicCheeseNaan.description": "نان مع ثوم وجبنة",
    "menu.items.paneerKulcha.title": "كولتشا بانير",
    "menu.items.paneerKulcha.description": "خبز محشو بجبنة طازجة متبلة",
    "menu.items.alooKulcha.title": "كولتشا آلو",
    "menu.items.alooKulcha.description": "خبز محشو ببطاطس متبلة",
    "menu.items.peshwariNaan.title": "نان بشواري",
    "menu.items.peshwariNaan.description": "نان حلو مع جوز هند وزبيب ومكسرات",
    "menu.items.tandooriRoti.title": "روتي تندوري",
    "menu.items.tandooriRoti.description": "خبز قمح كامل مسطح من التندور",

    // Menu Items - Rice
    "menu.items.steamRice.title": "أرز مطبوخ",
    "menu.items.steamRice.description": "أرز بسمتي مطبوخ بسيط",
    "menu.items.chickenBiryani.title": "برياني الدجاج",
    "menu.items.chickenBiryani.description": "أرز بسمتي عطري مع دجاج متبل",
    "menu.items.beefBiryani.title": "برياني اللحم البقري",
    "menu.items.beefBiryani.description": "أرز عطري مع قطع لحم بقري طرية",
    "menu.items.lambBiryani.title": "برياني الضأن",
    "menu.items.lambBiryani.description": "أرز عطري مع قطع ضأن طرية",
    "menu.items.prawnBiryani.title": "برياني الروبيان",
    "menu.items.prawnBiryani.description": "أرز عطري مع روبيان عصيري",
    "menu.items.vegetableBiryani.title": "برياني نباتي",
    "menu.items.vegetableBiryani.description":
      "خضروات مختلطة مع أرز بسمتي عطري",
    "menu.items.biryaniRice.title": "أرز برياني",
    "menu.items.biryaniRice.description": "أرز بسمتي متبل بدون لحوم",
    "menu.items.zeeraRice.title": "أرز زيرا",
    "menu.items.zeeraRice.description": "أرز بسمتي مع بذور كمون",

    // Menu Items - Desserts
    "menu.items.rasmalai.title": "رسمالاي",
    "menu.items.rasmalai.description": "كرات جبنة طازجة في حليب حلو مع هيل",
    "menu.items.kheer.title": "خير",
    "menu.items.kheer.description": "بودينغ أرز مع مكسرات وتوابل عطرية",

    // Menu Items - Drinks
    "menu.items.mangoLassi.title": "مانجو لاسي",
    "menu.items.mangoLassi.description": "مشروب مانجو زبادي منعش",
    "menu.items.sweetLassi.title": "لاسي حلو",
    "menu.items.sweetLassi.description": "مشروب زبادي حلو تقليدي",
    "menu.items.namkeenLassi.title": "لاسي مالح",
    "menu.items.namkeenLassi.description": "مشروب زبادي مالح",
    "menu.items.freshOrangeJuice.title": "عصير برتقال طازج",
    "menu.items.freshOrangeJuice.description": "عصير برتقال معصور طازج",
    "menu.items.freshLemonMint.title": "ليمون ونعناع طازج",
    "menu.items.freshLemonMint.description": "مشروب ليمون ونعناع منعش",
    "menu.items.chaai.title": "شاي",
    "menu.items.chaai.description": "شاي متبل مع حليب وأعشاب عطرية",
    "menu.items.cocaCola.title": "كوكا كولا",
    "menu.items.cocaCola.description": "كولا منعشة كلاسيكية",
    "menu.items.cocaColaZero.title": "كوكا كولا زيرو",
    "menu.items.cocaColaZero.description": "كولا بدون سعرات حرارية",
    "menu.items.fanta.title": "فانتا",
    "menu.items.fanta.description": "مشروب غازي بنكهة البرتقال",
    "menu.items.sevenUp.title": "7 أب",
    "menu.items.sevenUp.description": "مشروب غازي بنكهة الليمون-الليم",
    "menu.items.guarana.title": "غوارانا",
    "menu.items.guarana.description": "مشروب غازي برازيلي غوارانا",
    "menu.items.liptonIceTeaMango.title": "شاي ليبتون مثلج بنكهة المانجو",
    "menu.items.liptonIceTeaMango.description": "شاي مثلج بنكهة المانجو",
    "menu.items.liptonIceTeaPeach.title": "شاي ليبتون مثلج بنكهة الخوخ",
    "menu.items.liptonIceTeaPeach.description": "شاي مثلج بنكهة الخوخ",
    "menu.items.liptonIceTeaLemon.title": "شاي ليبتون مثلج بنكهة الليمون",
    "menu.items.liptonIceTeaLemon.description": "شاي مثلج بنكهة الليمون",
    "menu.items.pedrasLimao.title": "بيدراس ليماو 250مل",
    "menu.items.pedrasLimao.description": "مياه غازية برتغالية بنكهة الليمون",
    "menu.items.pedrasSalgadas250.title": "مياه معدنية غازية برتغالية 250مل",
    "menu.items.pedrasSalgadas250.description": "مياه معدنية غازية برتغالية",
    "menu.items.pedrasSalgadas500.title": "مياه معدنية غازية برتغالية 500مل",
    "menu.items.pedrasSalgadas500.description": "مياه معدنية غازية برتغالية",
    "menu.items.water500.title": "ماء 500مل",
    "menu.items.water500.description": "ماء عادي",
    "menu.items.water1500.title": "ماء 1.5لتر",
    "menu.items.water1500.description": "ماء عادي زجاجة كبيرة",

    // Additional UI Elements
    "ui.restaurantInformation": "معلومات المطعم",
    "ui.reviewsAndRatings": "التقييمات والمراجعات",
    "ui.travelerReviews": "مراجعات المسافرين",
    "ui.customerExperiences": "تجارب العملاء",
    "ui.openNow": "مفتوح الآن",
    "ui.closedNow": "مغلق الآن",
    "ui.getDirections": "احصل على الاتجاهات",
    "ui.viewLargerMap": "عرض خريطة أكبر",
    "ui.keyboardShortcuts": "اختصارات لوحة المفاتيح",
    "ui.mapData": "بيانات الخريطة",
    "ui.terms": "الشروط",
    "ui.reportMapError": "الإبلاغ عن خطأ في الخريطة",
    "ui.madeWith": "صنع بواسطة",
    "ui.by": "بواسطة",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.menu": "Menu",
    "nav.gallery": "Galerie",
    "nav.reservations": "Réservations",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Cuisine Pakistanaise et Indienne Authentique",
    "hero.subtitle":
      "Découvrez le meilleur restaurant halal de Porto avec des saveurs traditionnelles, des ingrédients premium et une atmosphère élégante.",
    "hero.cta.menu": "Voir le Menu",
    "hero.cta.reserve": "Réserver une Table",

    // Reviews
    "reviews.title": "Ce que disent nos clients",
    "reviews.subtitle":
      "Découvrez les saveurs authentiques qui nous ont valu la reconnaissance des amateurs de gastronomie dans tout Porto",
    "reviews.google": "Avis Google",
    "reviews.tripadvisor": "Avis TripAdvisor",
    "reviews.googleTitle": "Avis Google",
    "reviews.tripadvisorTitle": "TripAdvisor",
    "reviews.view": "Voir",
    "reviews.excellent": "Excellent",
    "reviews.verified": "Vérifié",
    "reviews.recommended": "Recommandé",
    "reviews.reviewsCount": "Avis",
    "reviews.reviewsCountPlural": "Avis",

    // About
    "about.title": "Notre Histoire",
    "about.subtitle":
      "Chez Turmeric, nous apportons les saveurs authentiques de la cuisine pakistanaise et indienne à Porto, en combinant des recettes traditionnelles avec une expérience gastronomique de luxe. Chaque plat raconte une histoire de patrimoine, de qualité et de passion pour l'excellence.",
    "about.feature1.title": "Nourriture de Qualité Premium",
    "about.feature1.desc":
      "Nous nous approvisionnons en ingrédients et épices authentiques de première qualité pour créer des plats pakistanais et indiens exceptionnels qui célèbrent les saveurs traditionnelles.",
    "about.feature2.title": "Personnel Professionnel et Amical",
    "about.feature2.desc":
      "Notre équipe expérimentée combine une hospitalité chaleureuse avec un service professionnel, garantissant que chaque client se sente accueilli et valorisé.",
    "about.feature3.title": "100% Certifié Halal",
    "about.feature3.desc":
      "Chaque ingrédient et plat est soigneusement préparé selon les normes halal, offrant la tranquillité d'esprit sans compromettre la qualité.",
    "about.feature4.title": "Attention aux Détails",
    "about.feature4.desc":
      "De la présentation élégante au service personnalisé, nous croyons que le luxe réside dans les détails. Chaque aspect de votre expérience est soigneusement conçu.",
    "about.why.title": "Ce qui rend Turmeric Spécial",
    "about.why.recipe.title": "Recettes Authentiques",
    "about.why.recipe.desc":
      "Transmises de génération en génération, nos recettes maintiennent la véritable essence de la cuisine pakistanaise et indienne.",
    "about.why.ingredients.title": "Ingrédients Frais",
    "about.why.ingredients.desc":
      "Nous nous approvisionnons en ingrédients premium et frais quotidiennement pour garantir que chaque plat répond à nos hauts standards.",
    "about.why.ambiance.title": "Ambiance Élégante",
    "about.why.ambiance.desc":
      "Notre restaurant combine le charme traditionnel avec le luxe moderne pour une expérience gastronomique inoubliable.",

    // Atmosphere
    "atmosphere.title": "Notre Ambiance",
    "atmosphere.subtitle":
      "Entrez dans un monde où la nature rencontre la culture, créant le décor parfait pour des expériences gastronomiques mémorables",
    "atmosphere.feature1.title": "Ambiance Naturelle",
    "atmosphere.feature1.desc":
      "Profitez d'un repas entouré de beaux éléments botaniques qui créent une atmosphère sereine et accueillante.",
    "atmosphere.feature2.title": "Familial",
    "atmosphere.feature2.desc":
      "Un espace chaleureux et accueillant parfait pour les réunions de famille, les dîners romantiques et les célébrations spéciales.",
    "atmosphere.feature3.title": "Design Élégant",
    "atmosphere.feature3.desc":
      "Des intérieurs soigneusement conçus qui mélangent la culture traditionnelle pakistanaise avec l'élégance portugaise moderne.",
    "atmosphere.feature4.title": "Espace Communautaire",
    "atmosphere.feature4.desc":
      "Plus qu'un restaurant - un lieu de rencontre où les cultures se rencontrent et les amitiés se forment autour de la cuisine authentique.",
    "atmosphere.highlight.title": "Une Expérience Gastronomique Unique",
    "atmosphere.highlight.desc":
      "Chez Turmeric, nous croyons que dîner est plus que de la nourriture. Il s'agit de créer des connexions, de célébrer la culture et de profiter des moments précieux de la vie dans un espace qui se sent comme chez soi.",
    "atmosphere.stats.years": "Années d'Excellence",
    "atmosphere.stats.customers": "Clients Satisfaits",
    "atmosphere.stats.halal": "Certification Halal",

    // Menu
    "menu.title": "Notre Menu",
    "menu.subtitle":
      "Découvrez la cuisine pakistanaise et indienne authentique élaborée avec amour, des ingrédients premium et des recettes traditionnelles transmises de génération en génération",
    "menu.halal": "100% Halal",
    "menu.fresh": "Frais Quotidiennement",
    "menu.popular": "Populaire",
    "menu.cta.title": "Prêt à Découvrir des Saveurs Authentiques ?",
    "menu.cta.desc":
      "Réservez votre table maintenant et laissez-nous vous emmener en voyage culinaire à travers le Pakistan et l'Inde, où chaque plat est préparé avec des ingrédients frais et de haute qualité et des recettes traditionnelles.",
    "menu.cta.button": "Réserver Votre Table",
    "menu.categories.starters": "Entrées",
    "menu.categories.grills": "Grillades",
    "menu.categories.curryChicken": "Curry de Poulet",
    "menu.categories.curryBeef": "Curry de Bœuf",
    "menu.categories.curryLamb": "Curry d'Agneau",
    "menu.categories.curryFish": "Curry de Poisson et Crevettes",
    "menu.categories.curryVeg": "Curry Végétarien",
    "menu.categories.bread": "Pain",
    "menu.categories.rice": "Riz",
    "menu.categories.desserts": "Desserts",
    "menu.categories.drinks": "Boissons",

    // Gallery
    "gallery.title": "Galerie",
    "gallery.subtitle":
      "Faites un voyage visuel à travers notre restaurant et découvrez l'ambiance qui rend Turmeric spécial",
    "gallery.cta.title": "Prêt à Créer Vos Propres Souvenirs ?",
    "gallery.cta.description":
      "Rejoignez-nous pour une expérience gastronomique inoubliable où chaque plat raconte une histoire",
    "gallery.cta.button": "Réserver une Table",
    "gallery.categories.interior": "Intérieur",
    "gallery.categories.experience": "Expérience",
    "gallery.categories.appetizers": "Entrées",
    "gallery.categories.mainDishes": "Plats Principaux",
    "gallery.categories.grills": "Grillades",
    "gallery.categories.beverages": "Boissons",
    "gallery.categories.desserts": "Desserts",

    // Reservations
    "reservations.title": "Réservations",
    "reservations.subtitle":
      "Réservez votre table pour une expérience gastronomique inoubliable avec la cuisine pakistanaise et indienne authentique",
    "reservations.form.title": "Faire une Réservation",
    "reservations.form.subtitle":
      "Réservez votre table et laissez-nous créer une expérience mémorable pour vous",
    "reservations.form.name": "Nom Complet *",
    "reservations.form.email": "Adresse Email *",
    "reservations.form.phone": "Numéro de Téléphone *",
    "reservations.form.date": "Date *",
    "reservations.form.time": "Heure *",
    "reservations.form.guests": "Personnes *",
    "reservations.form.requests": "Demandes Spéciales (Optionnel)",
    "reservations.form.submit": "Réserver Table",
    "reservations.form.confirmation":
      "* Nous confirmerons votre réservation dans les 24 heures par téléphone ou email",
    "reservations.form.success.title": "Réservation Envoyée !",
    "reservations.form.success.message":
      "Merci d'avoir choisi Turmeric. Nous vous contacterons dans les 24 heures pour confirmer votre réservation.",
    "reservations.form.placeholder.name": "Entrez votre nom complet",
    "reservations.form.placeholder.phone": "+351 XXX XXX XXX",
    "reservations.form.placeholder.email": "votre.email@exemple.com",
    "reservations.form.placeholder.time": "Sélectionner l'heure",
    "reservations.form.placeholder.guests": "Nombre",
    "reservations.form.placeholder.requests":
      "Toute exigence alimentaire spéciale, note de célébration ou préférence de siège...",
    "reservations.form.guest.singular": "Personne",
    "reservations.form.guest.plural": "Personnes",
    "reservations.hours.title": "Heures d'Ouverture",
    "reservations.hours.note":
      "Note : Nous recommandons de faire des réservations à l'avance, surtout pour les dîners de week-end.",
    "reservations.hours.days.thursday": "Jeudi",
    "reservations.hours.days.friday": "Vendredi",
    "reservations.hours.days.saturday": "Samedi",
    "reservations.hours.days.sunday": "Dimanche",
    "reservations.hours.days.monday": "Lundi",
    "reservations.hours.days.tuesday": "Mardi",
    "reservations.hours.days.wednesday": "Mercredi",
    "reservations.hours.time": "14:00 - 22:00",
    language: "fr",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Nous aimerions avoir de vos nouvelles. Contactez-nous pour les réservations, les demandes ou simplement pour dire bonjour.",
    "contact.visit": "Visitez-nous",
    "contact.call": "Appelez-nous",
    "contact.hours": "Heures d'Ouverture",
    "contact.daily": "Quotidiennement : 14:00 - 22:00",
    "contact.follow": "Suivez-nous",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer Message",

    // Footer
    "footer.hours": "Heures d'Ouverture",
    "footer.daily": "Quotidiennement : 14:00 - 22:00",
    "footer.location": "Localisation",
    "footer.contact": "Contact",
    "footer.follow": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.quicklinks": "Liens Rapides",
    "footer.contactinfo": "Informations de Contact",
    "footer.description":
      "Découvrez la cuisine pakistanaise et indienne authentique au cœur de Porto. Nous sommes fiers de servir des plats halal de haute qualité avec un service exceptionnel dans une atmosphère élégante.",
    "footer.rating": "4.9/5 Évaluation des Clients",
    "footer.dailyhours": "Heures d'Ouverture Quotidiennes",
    "footer.everyday": "14:00 - 22:00 (Tous les Jours)",
    "footer.recommendation":
      "Réservations recommandées • Entrée libre bienvenue",
    "footer.copyright":
      "© 2025 Restaurant Turmeric. Fait avec ❤️ par Picky Pixels Studio",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions de Service",

    // Gallery Items
    "gallery.items.elegantAmbiance.title": "Ambiance Élégante",
    "gallery.items.elegantAmbiance.description":
      "Notre restaurant magnifiquement conçu avec des équipements modernes et un charme traditionnel",
    "gallery.items.familyDining.title": "Expérience de Dîner Familial",
    "gallery.items.familyDining.description":
      "Profitez d'un repas familial avec nos plats authentiques dans une atmosphère chaleureuse et accueillante",
    "gallery.items.chickenSamosa.title": "Samosa au Poulet",
    "gallery.items.chickenSamosa.description":
      "Samosas croustillants au poulet farcis d'épices aromatiques et d'herbes fraîches",
    "gallery.items.chickenLollypop.title": "Poulet Lollypop",
    "gallery.items.chickenLollypop.description":
      "Poulet croustillant et juteux servi en lollypop, un délicieux apéritif",
    "gallery.items.chickenKadhai.title": "Poulet Kadhai avec Naan à l'Ail",
    "gallery.items.chickenKadhai.description":
      "Poulet kadhai traditionnel servi avec du pain naan à l'ail frais et aromatique",
    "gallery.items.tandooriFish.title": "Poisson Tandoori Grillé",
    "gallery.items.tandooriFish.description":
      "Poisson frais mariné aux épices tandoori et grillé à la perfection dans notre four traditionnel",
    "gallery.items.onionBhaji.title": "Bhaji à l'Oignon",
    "gallery.items.onionBhaji.description":
      "Oignons tranchés enrobés de pâte et frits aux épices indiennes, un apéritif croustillant et savoureux",
    "gallery.items.mangoLassi.title": "Lassi à la Mangue",
    "gallery.items.mangoLassi.description":
      "Boisson indienne traditionnelle à base de mangue fraîche et de yaourt, rafraîchissante et nutritive",
    "gallery.items.rasmalaiKheer.title": "Rasmalai et Kheer",
    "gallery.items.rasmalaiKheer.description":
      "Desserts indiens traditionnels : Rasmalai doux et Kheer crémeux pour compléter votre repas",

    // Menu Items - Starters
    "menu.items.soupOfTheDay.title": "Soupe du Jour",
    "menu.items.soupOfTheDay.description":
      "Soupe fraîche quotidienne préparée avec des ingrédients de saison",
    "menu.items.turmericChickenLollypop.title": "Poulet Lollypop au Curcuma",
    "menu.items.turmericChickenLollypop.description":
      "Ailes de poulet croustillantes frites, marinées dans un mélange d'épices savoureuses et sautées dans une sauce épicée secrète maison",
    "menu.items.chickenSamosa.title": "Samosa au Poulet",
    "menu.items.chickenSamosa.description":
      "Pâte croustillante farcie de poulet haché épicé et d'herbes aromatiques",
    "menu.items.vegetableSamosa.title": "Samosa aux Légumes",
    "menu.items.vegetableSamosa.description":
      "Pâte croustillante farcie d'un mélange épicé de pommes de terre, pois verts et herbes aromatiques",
    "menu.items.onionBhaji.title": "Bhaji à l'Oignon",
    "menu.items.onionBhaji.description":
      "Beignets d'oignon croustillants et dorés, assaisonnés d'épices aromatiques",

    // Menu Items - Grills
    "menu.items.chickenTikka.title": "Poulet Tikka",
    "menu.items.chickenTikka.description":
      "Poulet désossé, mariné dans du yaourt et des épices et grillé jusqu'à ce qu'il soit juteux et tendre avec une touche de fumée",
    "menu.items.tandooriFish.title": "Poisson Tandoori",
    "menu.items.tandooriFish.description":
      "Poisson Dorada mariné grillé dans un tandoor, avec des saveurs fumées et un mélange d'épices aromatiques",
    "menu.items.murghSeekhKebab.title": "Murgh Seekh Kebab",
    "menu.items.murghSeekhKebab.description":
      "Kebabs de poulet haché grillés, assaisonnés d'épices aromatiques",
    "menu.items.beefSeekhKebab.title": "Bœuf Seekh Kebab",
    "menu.items.beefSeekhKebab.description":
      "Kebabs de bœuf haché grillés, assaisonnés d'épices aromatiques",
    "menu.items.chickenHariyaliTikka.title": "Poulet Hariyali Tikka",
    "menu.items.chickenHariyaliTikka.description":
      "Poulet désossé, mariné dans du yaourt, de la menthe et de la coriandre et grillé jusqu'à ce qu'il soit juteux et tendre",
    "menu.items.tandooriChicken.title": "Poulet Tandoori",
    "menu.items.tandooriChicken.description":
      "Poulet mariné dans un mélange de yaourt et d'épices, puis grillé dans un tandoor pour une finition fumée et savoureuse",

    // Menu Items - Chicken Curry
    "menu.items.butterChicken.title": "Poulet au Beurre",
    "menu.items.butterChicken.description":
      "Poulet tendre dans une sauce riche au beurre et à la tomate",
    "menu.items.chickenTikkaMasala.title": "Poulet Tikka Masala",
    "menu.items.chickenTikkaMasala.description":
      "Poulet grillé dans une sauce crémeuse à la tomate épicée",
    "menu.items.chickenKadhai.title": "Poulet Kadhai",
    "menu.items.chickenKadhai.description":
      "Poulet avec poivrons dans une sauce tomate épicée",
    "menu.items.chickenCurry.title": "Curry de Poulet",
    "menu.items.chickenCurry.description":
      "Curry de poulet traditionnel aux épices aromatiques",
    "menu.items.chickenKorma.title": "Poulet Korma",
    "menu.items.chickenKorma.description":
      "Curry de poulet doux dans une sauce crémeuse à la noix de coco",
    "menu.items.chickenVindaloo.title": "Poulet Vindaloo",
    "menu.items.chickenVindaloo.description":
      "Curry de poulet épicé au vinaigre et aux épices",
    "menu.items.mangoChicken.title": "Poulet à la Mangue",
    "menu.items.mangoChicken.description":
      "Curry de poulet avec saveur douce de mangue",
    "menu.items.chickenMadras.title": "Poulet Madras",
    "menu.items.chickenMadras.description":
      "Curry de poulet épicé style sud-indien",
    "menu.items.chickenPalak.title": "Poulet Palak",
    "menu.items.chickenPalak.description":
      "Poulet dans une sauce crémeuse aux épinards",

    // Menu Items - Beef Curry
    "menu.items.beefCurry.title": "Curry de Bœuf",
    "menu.items.beefCurry.description":
      "Bœuf mijoté dans une sauce curry traditionnelle",
    "menu.items.beefMadras.title": "Bœuf Madras",
    "menu.items.beefMadras.description":
      "Curry de bœuf épicé à la noix de coco et aux feuilles de curry",
    "menu.items.beefVindaloo.title": "Bœuf Vindaloo",
    "menu.items.beefVindaloo.description":
      "Curry de bœuf brûlant au vinaigre et aux épices",

    // Menu Items - Lamb Curry
    "menu.items.lambKadhai.title": "Agneau Kadhai",
    "menu.items.lambKadhai.description":
      "Agneau cuit avec poivrons, oignons et un mélange d'épices dans une sauce riche et savoureuse",
    "menu.items.lambCurry.title": "Curry d'Agneau",
    "menu.items.lambCurry.description":
      "Curry d'agneau style maison cuit avec oignon, tomate et sauce curry traditionnelle",
    "menu.items.lambKorma.title": "Agneau Korma",
    "menu.items.lambKorma.description":
      "Agneau cuit dans une sauce crémeuse, légèrement épicée avec une touche de douceur",

    // Menu Items - Fish & Shrimp Curry
    "menu.items.doradaFishCurry.title": "Curry de Poisson Dorada",
    "menu.items.doradaFishCurry.description":
      "Poisson dorada cuit avec oignon, tomate et sauce curry traditionnelle",
    "menu.items.prawnMasala.title": "Crevettes Masala",
    "menu.items.prawnMasala.description":
      "Crevettes cuites dans une sauce tomate veloutée, infusée d'épices aromatiques et une touche de crème",
    "menu.items.prawnMalaiCurry.title": "Curry de Crevettes Malai",
    "menu.items.prawnMalaiCurry.description":
      "Crevettes tendres cuites dans une sauce crémeuse à la noix de coco légèrement épicée avec une touche de douceur",

    // Menu Items - Vegetarian Curry
    "menu.items.kadhaiPaneer.title": "Kadhai Paneer",
    "menu.items.kadhaiPaneer.description":
      "Fromage cottage avec poivrons dans une sauce tomate épicée",
    "menu.items.paneerButterMasala.title": "Paneer Butter Masala",
    "menu.items.paneerButterMasala.description":
      "Fromage cottage dans une sauce riche au beurre et à la tomate",
    "menu.items.palakPaneer.title": "Palak Paneer",
    "menu.items.palakPaneer.description":
      "Fromage cottage dans une sauce crémeuse aux épinards",
    "menu.items.matarPaneer.title": "Matar Paneer",
    "menu.items.matarPaneer.description":
      "Fromage cottage avec pois verts dans une sauce curry",
    "menu.items.bindhiMasala.title": "Bindhi Masala",
    "menu.items.bindhiMasala.description": "Gombo cuit avec oignons et épices",
    "menu.items.alooGobi.title": "Aloo Gobi",
    "menu.items.alooGobi.description":
      "Curry de pommes de terre et chou-fleur aux épices",
    "menu.items.alooPalak.title": "Aloo Palak",
    "menu.items.alooPalak.description":
      "Pommes de terre dans une sauce crémeuse aux épinards",
    "menu.items.vegKorma.title": "Korma Végétarien",
    "menu.items.vegKorma.description":
      "Légumes mélangés dans une sauce crémeuse à la noix de coco",
    "menu.items.daalMakhni.title": "Daal Makhni",
    "menu.items.daalMakhni.description":
      "Lentilles noires dans une sauce riche au beurre et à la crème",
    "menu.items.daalTadka.title": "Daal Tadka",
    "menu.items.daalTadka.description": "Lentilles jaunes tempérées aux épices",
    "menu.items.chanaMasala.title": "Chana Masala",
    "menu.items.chanaMasala.description":
      "Pois chiches dans une sauce tomate et oignon épicée",

    // Menu Items - Bread
    "menu.items.plainNaan.title": "Naan Nature",
    "menu.items.plainNaan.description": "Pain plat indien traditionnel",
    "menu.items.butterNaan.title": "Naan au Beurre",
    "menu.items.butterNaan.description": "Naan badigeonné de beurre",
    "menu.items.garlicNaan.title": "Naan à l'Ail",
    "menu.items.garlicNaan.description": "Naan à l'ail et aux herbes",
    "menu.items.cheeseNaan.title": "Naan au Fromage",
    "menu.items.cheeseNaan.description": "Naan farci au fromage",
    "menu.items.garlicCheeseNaan.title": "Naan à l'Ail et Fromage",
    "menu.items.garlicCheeseNaan.description": "Naan à l'ail et au fromage",
    "menu.items.paneerKulcha.title": "Paneer Kulcha",
    "menu.items.paneerKulcha.description":
      "Pain farci de fromage cottage épicé",
    "menu.items.alooKulcha.title": "Aloo Kulcha",
    "menu.items.alooKulcha.description":
      "Pain farci de pommes de terre épicées",
    "menu.items.peshwariNaan.title": "Naan Peshwari",
    "menu.items.peshwariNaan.description":
      "Naan sucré à la noix de coco, raisins secs et noix",
    "menu.items.tandooriRoti.title": "Roti Tandoori",
    "menu.items.tandooriRoti.description": "Pain plat de blé entier du tandoor",

    // Menu Items - Rice
    "menu.items.steamRice.title": "Riz à la Vapeur",
    "menu.items.steamRice.description": "Riz basmati cuit à la vapeur nature",
    "menu.items.chickenBiryani.title": "Biryani au Poulet",
    "menu.items.chickenBiryani.description":
      "Riz basmati parfumé au poulet épicé",
    "menu.items.beefBiryani.title": "Biryani au Bœuf",
    "menu.items.beefBiryani.description":
      "Riz aromatique avec morceaux de bœuf tendres",
    "menu.items.lambBiryani.title": "Biryani à l'Agneau",
    "menu.items.lambBiryani.description":
      "Riz aromatique avec morceaux d'agneau tendres",
    "menu.items.prawnBiryani.title": "Biryani aux Crevettes",
    "menu.items.prawnBiryani.description":
      "Riz parfumé aux crevettes succulentes",
    "menu.items.vegetableBiryani.title": "Biryani aux Légumes",
    "menu.items.vegetableBiryani.description":
      "Légumes mélangés avec du riz basmati parfumé",
    "menu.items.biryaniRice.title": "Riz Biryani",
    "menu.items.biryaniRice.description": "Riz basmati épicé sans viande",
    "menu.items.zeeraRice.title": "Riz Zeera",
    "menu.items.zeeraRice.description": "Riz basmati aux graines de cumin",

    // Menu Items - Desserts
    "menu.items.rasmalai.title": "Rasmalai",
    "menu.items.rasmalai.description":
      "Boulettes de fromage cottage dans du lait sucré à la cardamome",
    "menu.items.kheer.title": "Kheer",
    "menu.items.kheer.description":
      "Riz au lait avec noix et épices aromatiques",

    // Menu Items - Drinks
    "menu.items.mangoLassi.title": "Lassi à la Mangue",
    "menu.items.mangoLassi.description":
      "Boisson rafraîchissante au yaourt et à la mangue",
    "menu.items.sweetLassi.title": "Lassi Sucré",
    "menu.items.sweetLassi.description":
      "Boisson traditionnelle au yaourt sucré",
    "menu.items.namkeenLassi.title": "Lassi Salé",
    "menu.items.namkeenLassi.description": "Boisson au yaourt salé savoureux",
    "menu.items.freshOrangeJuice.title": "Jus d'Orange Frais",
    "menu.items.freshOrangeJuice.description":
      "Jus d'orange fraîchement pressé",
    "menu.items.freshLemonMint.title": "Citron et Menthe Frais",
    "menu.items.freshLemonMint.description":
      "Boisson rafraîchissante au citron et à la menthe",
    "menu.items.chaai.title": "Chaai",
    "menu.items.chaai.description":
      "Thé épicé au lait et aux herbes aromatiques",
    "menu.items.cocaCola.title": "Coca Cola",
    "menu.items.cocaCola.description": "Cola rafraîchissant classique",
    "menu.items.cocaColaZero.title": "Coca Cola Zero",
    "menu.items.cocaColaZero.description": "Cola sans calories",
    "menu.items.fanta.title": "Fanta",
    "menu.items.fanta.description": "Boisson gazeuse à saveur d'orange",
    "menu.items.sevenUp.title": "7 UP",
    "menu.items.sevenUp.description": "Boisson gazeuse à saveur citron-lime",
    "menu.items.guarana.title": "Guarana",
    "menu.items.guarana.description": "Boisson gazeuse brésilienne guarana",
    "menu.items.liptonIceTeaMango.title": "Thé Glacé Lipton Mangue",
    "menu.items.liptonIceTeaMango.description": "Thé glacé à saveur mangue",
    "menu.items.liptonIceTeaPeach.title": "Thé Glacé Lipton Pêche",
    "menu.items.liptonIceTeaPeach.description": "Thé glacé à saveur pêche",
    "menu.items.liptonIceTeaLemon.title": "Thé Glacé Lipton Citron",
    "menu.items.liptonIceTeaLemon.description": "Thé glacé à saveur citron",
    "menu.items.pedrasLimao.title": "Pedras Limão 250ml",
    "menu.items.pedrasLimao.description": "Eau pétillante portugaise au citron",
    "menu.items.pedrasSalgadas250.title": "Pedras Salgadas 250ml",
    "menu.items.pedrasSalgadas250.description":
      "Eau minérale pétillante portugaise",
    "menu.items.pedrasSalgadas500.title": "Pedras Salgadas 500ml",
    "menu.items.pedrasSalgadas500.description":
      "Eau minérale pétillante portugaise",
    "menu.items.water500.title": "Eau 500ml",
    "menu.items.water500.description": "Eau plate",
    "menu.items.water1500.title": "Eau 1.5L",
    "menu.items.water1500.description": "Eau plate grande bouteille",

    // Additional UI Elements
    "ui.restaurantInformation": "Informations du Restaurant",
    "ui.reviewsAndRatings": "Avis et Évaluations",
    "ui.travelerReviews": "Avis des voyageurs",
    "ui.customerExperiences": "Expériences des clients",
    "ui.openNow": "Ouvert Maintenant",
    "ui.closedNow": "Fermé Maintenant",
    "ui.getDirections": "Obtenir l'Itinéraire",
    "ui.viewLargerMap": "Voir la carte plus grande",
    "ui.keyboardShortcuts": "Raccourcis clavier",
    "ui.mapData": "Données de la carte",
    "ui.terms": "Conditions",
    "ui.reportMapError": "Signaler une erreur de carte",
    "ui.madeWith": "Fait avec",
    "ui.by": "par",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.menu": "Menú",
    "nav.gallery": "Galería",
    "nav.reservations": "Reservas",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Cocina Auténtica Pakistaní e India",
    "hero.subtitle":
      "Experimenta el mejor restaurante halal en Oporto con sabores tradicionales, ingredientes premium y ambiente elegante.",
    "hero.cta.menu": "Ver Menú",
    "hero.cta.reserve": "Reservar Mesa",

    // Reviews
    "reviews.title": "Lo Que Dicen Nuestros Clientes",
    "reviews.subtitle":
      "Experimenta los sabores auténticos que nos han valido el reconocimiento de los amantes de la gastronomía en todo Oporto",
    "reviews.google": "Reseñas de Google",
    "reviews.tripadvisor": "Reseñas de TripAdvisor",
    "reviews.googleTitle": "Reseñas de Google",
    "reviews.tripadvisorTitle": "TripAdvisor",
    "reviews.view": "Ver",
    "reviews.excellent": "Excelente",
    "reviews.verified": "Verificado",
    "reviews.recommended": "Recomendado",
    "reviews.reviewsCount": "Reseña",
    "reviews.reviewsCountPlural": "Reseñas",

    // About
    "about.title": "Nuestra Historia",
    "about.subtitle":
      "En Turmeric, llevamos los sabores auténticos de la cocina pakistaní e india a Oporto, combinando recetas tradicionales con una experiencia gastronómica de lujo. Cada plato cuenta una historia de herencia, calidad y pasión por la excelencia.",
    "about.feature1.title": "Comida de Calidad Premium",
    "about.feature1.desc":
      "Obtenemos los mejores ingredientes y especias auténticas para crear platos excepcionales pakistaníes e indios que celebran los sabores tradicionales.",
    "about.feature2.title": "Personal Profesional y Amigable",
    "about.feature2.desc":
      "Nuestro equipo experimentado combina hospitalidad cálida con servicio profesional, garantizando que cada huésped se sienta bienvenido y valorado.",
    "about.feature3.title": "100% Certificado Halal",
    "about.feature3.desc":
      "Cada ingrediente y plato se prepara cuidadosamente según los estándares halal, proporcionando tranquilidad sin comprometer la calidad.",
    "about.feature4.title": "Atención al Detalle",
    "about.feature4.desc":
      "Desde la presentación elegante hasta el servicio personalizado, creemos que el lujo está en los detalles. Cada aspecto de tu experiencia se elabora cuidadosamente.",
    "about.why.title": "Lo Que Hace Especial a Turmeric",
    "about.why.recipe.title": "Recetas Auténticas",
    "about.why.recipe.desc":
      "Transmitidas a través de generaciones, nuestras recetas mantienen la verdadera esencia de la cocina pakistaní e india.",
    "about.why.ingredients.title": "Ingredientes Frescos",
    "about.why.ingredients.desc":
      "Obtenemos ingredientes premium y frescos diariamente para garantizar que cada plato cumpla con nuestros altos estándares.",
    "about.why.ambiance.title": "Ambiente Elegante",
    "about.why.ambiance.desc":
      "Nuestro restaurante combina el encanto tradicional con el lujo moderno para una experiencia gastronómica inolvidable.",

    // Atmosphere
    "atmosphere.title": "Nuestro Ambiente",
    "atmosphere.subtitle":
      "Adéntrate en un mundo donde la naturaleza se encuentra con la cultura, creando el escenario perfecto para experiencias gastronómicas memorables",
    "atmosphere.feature1.title": "Ambiente Natural",
    "atmosphere.feature1.desc":
      "Disfruta de una comida rodeado de hermosos elementos botánicos que crean una atmósfera serena y acogedora.",
    "atmosphere.feature2.title": "Ambiente Familiar",
    "atmosphere.feature2.desc":
      "Un espacio cálido y acogedor perfecto para reuniones familiares, cenas románticas y celebraciones especiales.",
    "atmosphere.feature3.title": "Diseño Elegante",
    "atmosphere.feature3.desc":
      "Interiores cuidadosamente diseñados que combinan la cultura tradicional pakistaní con la elegancia portuguesa moderna.",
    "atmosphere.feature4.title": "Espacio Comunitario",
    "atmosphere.feature4.desc":
      "Más que un restaurante - un lugar de encuentro donde las culturas se encuentran y las amistades se forman alrededor de la cocina auténtica.",
    "atmosphere.highlight.title": "Una Experiencia Gastronómica Única",
    "atmosphere.highlight.desc":
      "En Turmeric, creemos que cenar es más que solo comida. Se trata de crear conexiones, celebrar la cultura y disfrutar de los momentos preciosos de la vida en un espacio que se siente como en casa.",
    "atmosphere.stats.years": "Años de Excelencia",
    "atmosphere.stats.customers": "Clientes Satisfechos",
    "atmosphere.stats.halal": "Certificación Halal",

    // Menu
    "menu.title": "Nuestro Menú",
    "menu.subtitle":
      "Descubre la cocina auténtica pakistaní e india elaborada con amor, ingredientes premium y recetas tradicionales transmitidas a través de generaciones",
    "menu.halal": "100% Halal",
    "menu.fresh": "Fresco Diariamente",
    "menu.popular": "Popular",
    "menu.cta.title": "¿Listo para Experimentar Sabores Auténticos?",
    "menu.cta.desc":
      "Reserva tu mesa ahora y déjanos llevarte en un viaje culinario a través de Pakistán e India, donde cada plato se prepara con ingredientes frescos y de alta calidad y recetas tradicionales.",
    "menu.cta.button": "Reserva Tu Mesa",
    "menu.categories.starters": "Entrantes",
    "menu.categories.grills": "Parrilla",
    "menu.categories.curryChicken": "Curry de Pollo",
    "menu.categories.curryBeef": "Curry de Ternera",
    "menu.categories.curryLamb": "Curry de Cordero",
    "menu.categories.curryFish": "Curry de Pescado y Gambas",
    "menu.categories.curryVeg": "Curry Vegetariano",
    "menu.categories.bread": "Pan",
    "menu.categories.rice": "Arroz",
    "menu.categories.desserts": "Postres",
    "menu.categories.drinks": "Bebidas",

    // Gallery
    "gallery.title": "Galería",
    "gallery.subtitle":
      "Haz un viaje visual a través de nuestro restaurante y descubre el ambiente que hace especial a Turmeric",
    "gallery.cta.title": "¿Listo para Crear Tus Propios Recuerdos?",
    "gallery.cta.description":
      "Únete a nosotros para una experiencia gastronómica inolvidable donde cada plato cuenta una historia",
    "gallery.cta.button": "Reserva Tu Mesa",
    "gallery.categories.interior": "Interior",
    "gallery.categories.experience": "Experiencia",
    "gallery.categories.appetizers": "Entrantes",
    "gallery.categories.mainDishes": "Platos Principales",
    "gallery.categories.grills": "Parrilla",
    "gallery.categories.beverages": "Bebidas",
    "gallery.categories.desserts": "Postres",

    // Reservations
    "reservations.title": "Reservas",
    "reservations.subtitle":
      "Reserva tu mesa para una experiencia gastronómica inolvidable con cocina auténtica pakistaní e india",
    "reservations.form.title": "Hacer una Reserva",
    "reservations.form.subtitle":
      "Reserva tu mesa y déjanos crear una experiencia memorable para ti",
    "reservations.form.name": "Nombre Completo *",
    "reservations.form.email": "Dirección de Email *",
    "reservations.form.phone": "Número de Teléfono *",
    "reservations.form.date": "Fecha *",
    "reservations.form.time": "Hora *",
    "reservations.form.guests": "Personas *",
    "reservations.form.requests": "Peticiones Especiales (Opcional)",
    "reservations.form.submit": "Reservar Mesa",
    "reservations.form.confirmation":
      "* Confirmaremos tu reserva en 24 horas por teléfono o email",
    "reservations.form.success.title": "¡Reserva Enviada!",
    "reservations.form.success.message":
      "Gracias por elegir Turmeric. Nos pondremos en contacto contigo en 24 horas para confirmar tu reserva.",
    "reservations.form.placeholder.name": "Introduce tu nombre completo",
    "reservations.form.placeholder.phone": "+351 XXX XXX XXX",
    "reservations.form.placeholder.email": "tu.email@ejemplo.com",
    "reservations.form.placeholder.time": "Seleccionar hora",
    "reservations.form.placeholder.guests": "Número",
    "reservations.form.placeholder.requests":
      "Cualquier requisito dietético especial, notas de celebración o preferencias de asiento...",
    "reservations.form.guest.singular": "Persona",
    "reservations.form.guest.plural": "Personas",
    "reservations.hours.title": "Horario de Funcionamiento",
    "reservations.hours.note":
      "Nota: Recomendamos hacer reservas con anticipación, especialmente para cenas de fin de semana.",
    "reservations.hours.days.thursday": "Jueves",
    "reservations.hours.days.friday": "Viernes",
    "reservations.hours.days.saturday": "Sábado",
    "reservations.hours.days.sunday": "Domingo",
    "reservations.hours.days.monday": "Lunes",
    "reservations.hours.days.tuesday": "Martes",
    "reservations.hours.days.wednesday": "Miércoles",
    "reservations.hours.time": "14:00 - 22:00",
    language: "es",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle":
      "Nos encantaría saber de ti. Ponte en contacto con nosotros para reservas, consultas o simplemente para saludar.",
    "contact.visit": "Visítanos",
    "contact.call": "Llámanos",
    "contact.hours": "Horario de Funcionamiento",
    "contact.daily": "Diariamente: 14:00 - 22:00",
    "contact.follow": "Síguenos",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",

    // Footer
    "footer.hours": "Horario de Funcionamiento",
    "footer.daily": "Diariamente: 14:00 - 22:00",
    "footer.location": "Ubicación",
    "footer.contact": "Contacto",
    "footer.follow": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.quicklinks": "Enlaces Rápidos",
    "footer.contactinfo": "Información de Contacto",
    "footer.description":
      "Experimenta la cocina auténtica pakistaní e india en el corazón de Oporto. Nos enorgullece servir platos halal de alta calidad con servicio excepcional en un ambiente elegante.",
    "footer.rating": "4.9/5 Valoración de Clientes",
    "footer.dailyhours": "Horario Diario de Funcionamiento",
    "footer.everyday": "14:00 - 22:00 (Todos los Días)",
    "footer.recommendation": "Reservas recomendadas • Entrada libre bienvenida",
    "footer.copyright":
      "© 2025 Restaurante Turmeric. Hecho con ❤️ por Picky Pixels Studio",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",

    // Gallery Items
    "gallery.items.elegantAmbiance.title": "Ambiente Elegante",
    "gallery.items.elegantAmbiance.description":
      "Nuestro restaurante bellamente diseñado con comodidades modernas y encanto tradicional",
    "gallery.items.familyDining.title": "Experiencia de Comida Familiar",
    "gallery.items.familyDining.description":
      "Disfruta de una comida familiar con nuestros platos auténticos en un ambiente cálido y acogedor",
    "gallery.items.chickenSamosa.title": "Samosa de Pollo",
    "gallery.items.chickenSamosa.description":
      "Samosas crujientes de pollo rellenos de especias aromáticas y hierbas frescas",
    "gallery.items.chickenLollypop.title": "Pollo Lollypop",
    "gallery.items.chickenLollypop.description":
      "Pollo crujiente y jugoso servido como lollypop, un delicioso entrante",
    "gallery.items.chickenKadhai.title": "Pollo Kadhai con Naan de Ajo",
    "gallery.items.chickenKadhai.description":
      "Pollo kadhai tradicional servido con pan naan de ajo fresco y aromático",
    "gallery.items.tandooriFish.title": "Pescado Tandoori a la Parrilla",
    "gallery.items.tandooriFish.description":
      "Pescado fresco marinado con especias tandoori y asado a la perfección en nuestro horno tradicional",
    "gallery.items.onionBhaji.title": "Bhaji de Cebolla",
    "gallery.items.onionBhaji.description":
      "Cebollas en rodajas rebozadas y fritas con especias indias, un entrante crujiente y sabroso",
    "gallery.items.mangoLassi.title": "Lassi de Mango",
    "gallery.items.mangoLassi.description":
      "Bebida india tradicional hecha con mango fresco y yogur, refrescante y nutritiva",
    "gallery.items.rasmalaiKheer.title": "Rasmalai y Kheer",
    "gallery.items.rasmalaiKheer.description":
      "Postres indios tradicionales: Rasmalai suave y Kheer cremoso para completar tu comida",

    // Menu Items - Starters
    "menu.items.soupOfTheDay.title": "Sopa del Día",
    "menu.items.soupOfTheDay.description":
      "Sopa fresca diaria preparada con ingredientes de temporada",
    "menu.items.turmericChickenLollypop.title": "Pollo Lollypop de Cúrcuma",
    "menu.items.turmericChickenLollypop.description":
      "Alas de pollo crujientes fritas, marinadas en una mezcla de especias sabrosas y salteadas en una salsa picante secreta casera",
    "menu.items.chickenSamosa.title": "Samosa de Pollo",
    "menu.items.chickenSamosa.description":
      "Masa crujiente rellena de pollo picado especiado y hierbas aromáticas",
    "menu.items.vegetableSamosa.title": "Samosa de Verduras",
    "menu.items.vegetableSamosa.description":
      "Masa crujiente rellena de una mezcla especiada de patatas, guisantes verdes y hierbas aromáticas",
    "menu.items.onionBhaji.title": "Bhaji de Cebolla",
    "menu.items.onionBhaji.description":
      "Frituras de cebolla crujientes y doradas, sazonadas con especias aromáticas",

    // Menu Items - Grills
    "menu.items.chickenTikka.title": "Pollo Tikka",
    "menu.items.chickenTikka.description":
      "Pollo sin hueso, marinado en yogur y especias y asado hasta que esté jugoso y tierno con un toque de ahumado",
    "menu.items.tandooriFish.title": "Pescado Tandoori",
    "menu.items.tandooriFish.description":
      "Pescado Dorada marinado asado en un tandoor, con sabores ahumados y una mezcla de especias aromáticas",
    "menu.items.murghSeekhKebab.title": "Murgh Seekh Kebab",
    "menu.items.murghSeekhKebab.description":
      "Kebabs de pollo picado asados, sazonados con especias aromáticas",
    "menu.items.beefSeekhKebab.title": "Ternera Seekh Kebab",
    "menu.items.beefSeekhKebab.description":
      "Kebabs de ternera picada asados, sazonados con especias aromáticas",
    "menu.items.chickenHariyaliTikka.title": "Pollo Hariyali Tikka",
    "menu.items.chickenHariyaliTikka.description":
      "Pollo sin hueso, marinado en yogur, menta y cilantro y asado hasta que esté jugoso y tierno",
    "menu.items.tandooriChicken.title": "Pollo Tandoori",
    "menu.items.tandooriChicken.description":
      "Pollo marinado en una mezcla de yogur y especias, luego asado en un tandoor para un acabado ahumado y sabroso",

    // Menu Items - Chicken Curry
    "menu.items.butterChicken.title": "Pollo con Mantequilla",
    "menu.items.butterChicken.description":
      "Pollo tierno en salsa rica de mantequilla y tomate",
    "menu.items.chickenTikkaMasala.title": "Pollo Tikka Masala",
    "menu.items.chickenTikkaMasala.description":
      "Pollo asado en salsa cremosa de tomate especiada",
    "menu.items.chickenKadhai.title": "Pollo Kadhai",
    "menu.items.chickenKadhai.description":
      "Pollo con pimientos en salsa de tomate picante",
    "menu.items.chickenCurry.title": "Curry de Pollo",
    "menu.items.chickenCurry.description":
      "Curry de pollo tradicional con especias aromáticas",
    "menu.items.chickenKorma.title": "Pollo Korma",
    "menu.items.chickenKorma.description":
      "Curry de pollo suave en salsa cremosa de coco",
    "menu.items.chickenVindaloo.title": "Pollo Vindaloo",
    "menu.items.chickenVindaloo.description":
      "Curry de pollo picante con vinagre y especias",
    "menu.items.mangoChicken.title": "Pollo con Mango",
    "menu.items.mangoChicken.description":
      "Curry de pollo con sabor dulce de mango",
    "menu.items.chickenMadras.title": "Pollo Madras",
    "menu.items.chickenMadras.description":
      "Curry de pollo picante estilo sur de la India",
    "menu.items.chickenPalak.title": "Pollo Palak",
    "menu.items.chickenPalak.description":
      "Pollo en salsa cremosa de espinacas",

    // Menu Items - Beef Curry
    "menu.items.beefCurry.title": "Curry de Ternera",
    "menu.items.beefCurry.description":
      "Ternera cocinada lentamente en salsa de curry tradicional",
    "menu.items.beefMadras.title": "Ternera Madras",
    "menu.items.beefMadras.description":
      "Curry de ternera picante con coco y hojas de curry",
    "menu.items.beefVindaloo.title": "Ternera Vindaloo",
    "menu.items.beefVindaloo.description":
      "Curry de ternera ardiente con vinagre y especias",

    // Menu Items - Lamb Curry
    "menu.items.lambKadhai.title": "Cordero Kadhai",
    "menu.items.lambKadhai.description":
      "Cordero cocinado con pimientos, cebollas y una mezcla de especias en una salsa rica y sabrosa",
    "menu.items.lambCurry.title": "Curry de Cordero",
    "menu.items.lambCurry.description":
      "Curry de cordero estilo casero, cocinado con cebolla, tomate y salsa de curry tradicional",
    "menu.items.lambKorma.title": "Cordero Korma",
    "menu.items.lambKorma.description":
      "Cordero cocinado en una salsa cremosa ligeramente especiada con un toque de dulzura",

    // Menu Items - Fish & Shrimp Curry
    "menu.items.doradaFishCurry.title": "Curry de Pescado Dorada",
    "menu.items.doradaFishCurry.description":
      "Pescado dorada cocinado con cebolla, tomate y salsa de curry tradicional",
    "menu.items.prawnMasala.title": "Gambas Masala",
    "menu.items.prawnMasala.description":
      "Gambas cocinadas en una salsa de tomate sedosa, infundida con especias aromáticas y un toque de crema",
    "menu.items.prawnMalaiCurry.title": "Curry de Gambas Malai",
    "menu.items.prawnMalaiCurry.description":
      "Gambas tiernas cocinadas en una salsa cremosa de coco ligeramente especiada con un toque de dulzura",

    // Menu Items - Vegetarian Curry
    "menu.items.kadhaiPaneer.title": "Kadhai Paneer",
    "menu.items.kadhaiPaneer.description":
      "Queso cottage con pimientos en salsa de tomate picante",
    "menu.items.paneerButterMasala.title": "Paneer Butter Masala",
    "menu.items.paneerButterMasala.description":
      "Queso cottage en salsa rica de mantequilla y tomate",
    "menu.items.palakPaneer.title": "Palak Paneer",
    "menu.items.palakPaneer.description":
      "Queso cottage en salsa cremosa de espinacas",
    "menu.items.matarPaneer.title": "Matar Paneer",
    "menu.items.matarPaneer.description":
      "Queso cottage con guisantes verdes en salsa de curry",
    "menu.items.bindhiMasala.title": "Bindhi Masala",
    "menu.items.bindhiMasala.description":
      "Okra cocinada con cebollas y especias",
    "menu.items.alooGobi.title": "Aloo Gobi",
    "menu.items.alooGobi.description":
      "Curry de patatas y coliflor con especias",
    "menu.items.alooPalak.title": "Aloo Palak",
    "menu.items.alooPalak.description": "Patatas en salsa cremosa de espinacas",
    "menu.items.vegKorma.title": "Korma Vegetariano",
    "menu.items.vegKorma.description":
      "Verduras mixtas en salsa cremosa de coco",
    "menu.items.daalMakhni.title": "Daal Makhni",
    "menu.items.daalMakhni.description":
      "Lentejas negras en salsa rica de mantequilla y crema",
    "menu.items.daalTadka.title": "Daal Tadka",
    "menu.items.daalTadka.description":
      "Lentejas amarillas templadas con especias",
    "menu.items.chanaMasala.title": "Chana Masala",
    "menu.items.chanaMasala.description":
      "Garbanzos en salsa picante de tomate y cebolla",

    // Menu Items - Bread
    "menu.items.plainNaan.title": "Naan Natural",
    "menu.items.plainNaan.description": "Pan plano indio tradicional",
    "menu.items.butterNaan.title": "Naan con Mantequilla",
    "menu.items.butterNaan.description": "Naan untado con mantequilla",
    "menu.items.garlicNaan.title": "Naan de Ajo",
    "menu.items.garlicNaan.description": "Naan con ajo y hierbas",
    "menu.items.cheeseNaan.title": "Naan de Queso",
    "menu.items.cheeseNaan.description": "Naan relleno de queso",
    "menu.items.garlicCheeseNaan.title": "Naan de Ajo y Queso",
    "menu.items.garlicCheeseNaan.description": "Naan con ajo y queso",
    "menu.items.paneerKulcha.title": "Paneer Kulcha",
    "menu.items.paneerKulcha.description":
      "Pan relleno de queso cottage especiado",
    "menu.items.alooKulcha.title": "Aloo Kulcha",
    "menu.items.alooKulcha.description": "Pan relleno de patatas especiadas",
    "menu.items.peshwariNaan.title": "Naan Peshwari",
    "menu.items.peshwariNaan.description":
      "Naan dulce con coco, pasas y frutos secos",
    "menu.items.tandooriRoti.title": "Roti Tandoori",
    "menu.items.tandooriRoti.description":
      "Pan plano de trigo integral del tandoor",

    // Menu Items - Rice
    "menu.items.steamRice.title": "Arroz al Vapor",
    "menu.items.steamRice.description": "Arroz basmati cocido al vapor natural",
    "menu.items.chickenBiryani.title": "Biryani de Pollo",
    "menu.items.chickenBiryani.description":
      "Arroz basmati fragante con pollo especiado",
    "menu.items.beefBiryani.title": "Biryani de Ternera",
    "menu.items.beefBiryani.description":
      "Arroz aromático con trozos tiernos de ternera",
    "menu.items.lambBiryani.title": "Biryani de Cordero",
    "menu.items.lambBiryani.description":
      "Arroz aromático con trozos tiernos de cordero",
    "menu.items.prawnBiryani.title": "Biryani de Gambas",
    "menu.items.prawnBiryani.description": "Arroz fragante con gambas jugosas",
    "menu.items.vegetableBiryani.title": "Biryani Vegetariano",
    "menu.items.vegetableBiryani.description":
      "Verduras mixtas con arroz basmati fragante",
    "menu.items.biryaniRice.title": "Arroz Biryani",
    "menu.items.biryaniRice.description": "Arroz basmati especiado sin carne",
    "menu.items.zeeraRice.title": "Arroz Zeera",
    "menu.items.zeeraRice.description": "Arroz basmati con semillas de comino",

    // Menu Items - Desserts
    "menu.items.rasmalai.title": "Rasmalai",
    "menu.items.rasmalai.description":
      "Albóndigas de queso cottage en leche dulce con cardamomo",
    "menu.items.kheer.title": "Kheer",
    "menu.items.kheer.description":
      "Pudín de arroz con frutos secos y especias aromáticas",

    // Menu Items - Drinks
    "menu.items.mangoLassi.title": "Lassi de Mango",
    "menu.items.mangoLassi.description": "Bebida refrescante de yogur y mango",
    "menu.items.sweetLassi.title": "Lassi Dulce",
    "menu.items.sweetLassi.description": "Bebida tradicional de yogur dulce",
    "menu.items.namkeenLassi.title": "Lassi Salado",
    "menu.items.namkeenLassi.description": "Bebida de yogur salado sabrosa",
    "menu.items.freshOrangeJuice.title": "Zumo de Naranja Fresco",
    "menu.items.freshOrangeJuice.description":
      "Zumo de naranja recién exprimido",
    "menu.items.freshLemonMint.title": "Limón y Menta Frescos",
    "menu.items.freshLemonMint.description":
      "Bebida refrescante de limón y menta",
    "menu.items.chaai.title": "Chaai",
    "menu.items.chaai.description":
      "Té especiado con leche y hierbas aromáticas",
    "menu.items.cocaCola.title": "Coca Cola",
    "menu.items.cocaCola.description": "Cola refrescante clásica",
    "menu.items.cocaColaZero.title": "Coca Cola Zero",
    "menu.items.cocaColaZero.description": "Cola sin calorías",
    "menu.items.fanta.title": "Fanta",
    "menu.items.fanta.description": "Refresco con sabor a naranja",
    "menu.items.sevenUp.title": "7 UP",
    "menu.items.sevenUp.description": "Refresco con sabor a limón-lima",
    "menu.items.guarana.title": "Guaraná",
    "menu.items.guarana.description": "Refresco brasileño de guaraná",
    "menu.items.liptonIceTeaMango.title": "Té Helado Lipton Mango",
    "menu.items.liptonIceTeaMango.description": "Té helado con sabor a mango",
    "menu.items.liptonIceTeaPeach.title": "Té Helado Lipton Melocotón",
    "menu.items.liptonIceTeaPeach.description":
      "Té helado con sabor a melocotón",
    "menu.items.liptonIceTeaLemon.title": "Té Helado Lipton Limón",
    "menu.items.liptonIceTeaLemon.description": "Té helado con sabor a limón",
    "menu.items.pedrasLimao.title": "Pedras Limão 250ml",
    "menu.items.pedrasLimao.description":
      "Agua con gas portuguesa con sabor a limón",
    "menu.items.pedrasSalgadas250.title": "Pedras Salgadas 250ml",
    "menu.items.pedrasSalgadas250.description":
      "Agua mineral con gas portuguesa",
    "menu.items.pedrasSalgadas500.title": "Pedras Salgadas 500ml",
    "menu.items.pedrasSalgadas500.description":
      "Agua mineral con gas portuguesa",
    "menu.items.water500.title": "Agua 500ml",
    "menu.items.water500.description": "Agua sin gas",
    "menu.items.water1500.title": "Agua 1.5L",
    "menu.items.water1500.description": "Agua sin gas botella grande",

    // Additional UI Elements
    "ui.restaurantInformation": "Información del Restaurante",
    "ui.reviewsAndRatings": "Reseñas y Valoraciones",
    "ui.travelerReviews": "Reseñas de viajeros",
    "ui.customerExperiences": "Experiencias de clientes",
    "ui.openNow": "Abierto Ahora",
    "ui.closedNow": "Cerrado Ahora",
    "ui.getDirections": "Obtener Direcciones",
    "ui.viewLargerMap": "Ver mapa más grande",
    "ui.keyboardShortcuts": "Atajos de teclado",
    "ui.mapData": "Datos del mapa",
    "ui.terms": "Términos",
    "ui.reportMapError": "Reportar un error del mapa",
    "ui.madeWith": "Hecho con",
    "ui.by": "por",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const direction = language === "ar" ? "rtl" : "ltr";

  const t = (key: string, fallback: string = key): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || fallback
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
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
