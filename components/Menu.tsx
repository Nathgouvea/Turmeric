'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Leaf, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import BotanicalDecor from './BotanicalDecor'
import { useLanguage } from '../contexts/LanguageContext'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters')
  const { t, language } = useLanguage()

  const menuCategories = [
    { id: 'starters', name: language === 'en' ? 'Starters' : 'Entradas', icon: '🥗' },
    { id: 'grills', name: language === 'en' ? 'Grills' : 'Grelhados', icon: '🔥' },
    { id: 'curry-chicken', name: language === 'en' ? 'Chicken Curry' : 'Caril de Frango', icon: '🍗' },
    { id: 'curry-beef', name: language === 'en' ? 'Beef Curry' : 'Caril de Vaca', icon: '🥩' },
    { id: 'curry-lamb', name: language === 'en' ? 'Lamb Curry' : 'Caril de Cordeiro', icon: '🐑' },
    { id: 'curry-fish', name: language === 'en' ? 'Fish & Shrimp Curry' : 'Caril de Peixe e Camarão', icon: '🐟' },
    { id: 'curry-veg', name: language === 'en' ? 'Vegetarian Curry' : 'Caril Vegetariano', icon: '🥬' },
    { id: 'bread', name: language === 'en' ? 'Bread' : 'Pão', icon: '🥖' },
    { id: 'rice', name: language === 'en' ? 'Rice' : 'Arroz', icon: '🍚' },
    { id: 'desserts', name: language === 'en' ? 'Desserts' : 'Sobremesas', icon: '🍰' },
    { id: 'drinks', name: language === 'en' ? 'Drinks' : 'Bebidas', icon: '🥤' }
  ]

  const menuItems = {
    starters: [
      { 
        name: 'Soup of the Day', 
        namePortuguese: 'Sopa do Dia',
        price: '€3.5', 
        description: language === 'en' ? 'Fresh daily soup prepared with seasonal ingredients' : 'Sopa fresca diária preparada com ingredientes sazonais'
      },
      { 
        name: 'Turmeric Chicken Lollypop', 
        namePortuguese: 'Chicken Lollypop Turmeric',
        price: '€6', 
        description: language === 'en' 
          ? 'Crispy fried chicken wings, marinated in a blend of savory spices and sautéed in a homemade secret spicy sauce.'
          : 'Asas de frango fritas crocantes, marinadas numa mistura de especiarias saborosas e salteadas num molho picante secreto caseiro.',
        popular: true
      },
      { 
        name: 'Chicken Samosa', 
        namePortuguese: 'Samosa de Frango',
        price: '€3', 
        description: language === 'en'
          ? 'Crispy pastry filled with spiced ground chicken and aromatic herbs.'
          : 'Massa crocante recheada com frango moído temperado e ervas aromáticas.'
      },
      { 
        name: 'Vegetable Samosa', 
        namePortuguese: 'Samosa Vegetariana',
        price: '€2.5', 
        description: language === 'en'
          ? 'Crispy pastry filled with a spiced mixture of potatoes, green peas and aromatic herbs.'
          : 'Massa crocante recheada com uma mistura temperada de batatas, ervilhas e ervas aromáticas.'
      },
      { 
        name: 'Onion Bhaji', 
        price: '€4', 
        description: language === 'en'
          ? 'Crispy, golden-fried onion fritters seasoned with aromatic spices.'
          : 'Frituras de cebola crocantes e douradas, temperadas com especiarias aromáticas.'
      }
    ],
    grills: [
      { 
        name: 'Chicken Tikka', 
        namePortuguese: 'Tikka de Frango',
        price: '€13', 
        description: language === 'en' 
          ? 'Boneless chicken, marinated in yogurt, spices and grilled until juicy and tender with a hint of smokiness.'
          : 'Frango desossado, marinado em iogurte e especiarias, grelhado até ficar suculento e tenro com um toque de sabor fumado.',
        popular: true
      },
      { 
        name: 'Tandoori Fish', 
        namePortuguese: 'Peixe Tandoori',
        price: '€14', 
        description: language === 'en'
          ? 'Marinated Dorada fish grilled in a tandoor, featuring smoky flavors and a blend of aromatic spices.'
          : 'Peixe Dorada marinado e grelhado no tandoor, com sabores fumados e uma mistura de especiarias aromáticas.'
      },
      { 
        name: 'Murgh Seekh Kebab', 
        price: '€13', 
        description: language === 'en'
          ? 'Grilled minced chicken kebabs, seasoned with aromatic spices.'
          : 'Kebabs de frango picado grelhados, temperados com especiarias aromáticas.'
      },
      { 
        name: 'Beef Seekh Kebab', 
        namePortuguese: 'Seekh Kebab de Vaca',
        price: '€14.5', 
        description: language === 'en'
          ? 'Grilled minced beef kebabs, seasoned with aromatic spices.'
          : 'Kebabs de vaca picada grelhados, temperados com especiarias aromáticas.'
      },
      { 
        name: 'Chicken Hariyali Tikka', 
        price: '€13', 
        description: language === 'en'
          ? 'Boneless chicken, marinated in yogurt, mint, coriander and grilled until juicy and tender.'
          : 'Frango desossado, marinado em iogurte, hortelã e coentros, grelhado até ficar suculento e tenro.'
      },
      { 
        name: 'Tandoori Chicken', 
        namePortuguese: 'Frango Tandoori',
        price: '€14.5', 
        description: language === 'en'
          ? 'Chicken marinated in a blend of yogurt and spices, then grilled in a tandoor for a smoky, flavorful finish.'
          : 'Frango marinado numa mistura de iogurte e especiarias, depois grelhado no tandoor para um acabamento fumado e saboroso.'
      }
    ],
    'curry-chicken': [
      { 
        name: 'Butter Chicken', 
        namePortuguese: 'Frango na Manteiga',
        price: '€13.5', 
        description: language === 'en' ? 'Tender chicken in rich butter and tomato sauce' : 'Frango tenro em molho rico de manteiga e tomate',
        popular: true
      },
      { 
        name: 'Chicken Tikka Masala', 
        price: '€13.5', 
        description: language === 'en' ? 'Grilled chicken in creamy spiced tomato sauce' : 'Frango grelhado em molho cremoso de tomate temperado'
      },
      { 
        name: 'Chicken Kadhai', 
        namePortuguese: 'Kadhai de Frango',
        price: '€13.5', 
        description: language === 'en' ? 'Chicken with bell peppers in spicy tomato sauce' : 'Frango com pimentos em molho picante de tomate'
      },
      { 
        name: 'Chicken Curry', 
        namePortuguese: 'Caril de Frango',
        price: '€13.5', 
        description: language === 'en' ? 'Traditional chicken curry with aromatic spices' : 'Caril de frango tradicional com especiarias aromáticas'
      },
      { 
        name: 'Chicken Korma', 
        namePortuguese: 'Korma de Frango',
        price: '€13.5', 
        description: language === 'en' ? 'Mild chicken curry in creamy coconut sauce' : 'Caril suave de frango em molho cremoso de coco'
      },
      { 
        name: 'Chicken Vindaloo', 
        price: '€13.5', 
        description: language === 'en' ? 'Spicy chicken curry with vinegar and spices' : 'Caril picante de frango com vinagre e especiarias'
      },
      { 
        name: 'Mango Chicken', 
        namePortuguese: 'Frango com Manga',
        price: '€13.5', 
        description: language === 'en' ? 'Chicken curry with sweet mango flavor' : 'Caril de frango com sabor doce de manga'
      },
      { 
        name: 'Chicken Madras', 
        price: '€13.5', 
        description: language === 'en' ? 'Spicy South Indian style chicken curry' : 'Caril picante de frango estilo sul-indiano'
      },
      { 
        name: 'Chicken Palak', 
        namePortuguese: 'Frango com Espinafres',
        price: '€14', 
        description: language === 'en' ? 'Chicken in creamy spinach sauce' : 'Frango em molho cremoso de espinafres'
      }
    ],
    'curry-beef': [
      { 
        name: 'Beef Curry', 
        namePortuguese: 'Caril de Vaca',
        price: '€14', 
        description: language === 'en' ? 'Slow-cooked beef in traditional curry sauce' : 'Vaca cozinhada lentamente em molho de caril tradicional'
      },
      { 
        name: 'Beef Madras', 
        price: '€14.5', 
        description: language === 'en' ? 'Spicy beef curry with coconut and curry leaves' : 'Caril picante de vaca com coco e folhas de caril'
      },
      { 
        name: 'Beef Vindaloo', 
        price: '€15', 
        description: language === 'en' ? 'Fiery beef curry with vinegar and spices' : 'Caril ardente de vaca com vinagre e especiarias'
      }
    ],
    'curry-lamb': [
      { 
        name: 'Lamb Kadhai', 
        namePortuguese: 'Kadhai de Cordeiro',
        price: '€15', 
        description: language === 'en'
          ? 'Lamb cooked with bell peppers, onions, and a blend of spices in a rich, flavorful sauce.'
          : 'Cordeiro cozido com pimentos, cebolas e uma mistura de especiarias num molho rico e saboroso.'
      },
      { 
        name: 'Lamb Curry', 
        namePortuguese: 'Caril de Cordeiro',
        price: '€15', 
        description: language === 'en'
          ? 'Home style lamb curry cooked with onion, tomato and traditional curry sauce.'
          : 'Caril de cordeiro à moda caseira, cozinhado com cebola, tomate e molho de caril tradicional.'
      },
      { 
        name: 'Lamb Korma', 
        namePortuguese: 'Korma de Cordeiro',
        price: '€15', 
        description: language === 'en'
          ? 'Lamb cooked in a creamy, mildly spiced sauce with a touch of sweetness.'
          : 'Cordeiro cozido num molho cremoso, levemente temperado com um toque de doçura.'
      }
    ],
    'curry-fish': [
      { 
        name: 'Dorada Fish Curry', 
        namePortuguese: 'Caril de Dorada',
        price: '€15', 
        description: language === 'en'
          ? 'Dorada fish cooked with onion, tomato and traditional curry sauce.'
          : 'Dorada cozido com cebola, tomate e molho de caril tradicional.'
      },
      { 
        name: 'Prawn Masala', 
        namePortuguese: 'Masala de Camarão',
        price: '€13.5', 
        description: language === 'en'
          ? 'Prawn cooked in a velvety tomato sauce, infused with aromatic spices and a touch of cream.'
          : 'Camarão cozido num molho de tomate aveludado, infundido com especiarias aromáticas e um toque de creme.'
      },
      { 
        name: 'Prawn Malai Curry', 
        namePortuguese: 'Caril Malai de Camarão',
        price: '€13.5', 
        description: language === 'en'
          ? 'Tender prawns cooked in a creamy coconut and mildly spiced sauce with a touch of sweetness.'
          : 'Camarões tenros cozidos num molho cremoso de coco e levemente temperado, com um toque de doçura.'
      }
    ],
    'curry-veg': [
      { 
        name: 'Kadhai Paneer', 
        price: '€13', 
        description: language === 'en' ? 'Cottage cheese with bell peppers in spicy tomato sauce' : 'Queijo fresco com pimentos em molho picante de tomate'
      },
      { 
        name: 'Paneer Butter Masala', 
        price: '€13', 
        description: language === 'en' ? 'Cottage cheese in rich butter and tomato sauce' : 'Queijo fresco em molho rico de manteiga e tomate'
      },
      { 
        name: 'Palak Paneer', 
        price: '€13', 
        description: language === 'en' ? 'Cottage cheese in creamy spinach sauce' : 'Queijo fresco em molho cremoso de espinafres'
      },
      { 
        name: 'Matar Paneer', 
        price: '€13', 
        description: language === 'en' ? 'Cottage cheese with green peas in curry sauce' : 'Queijo fresco com ervilhas em molho de caril'
      },
      { 
        name: 'Bindhi Masala', 
        price: '€13', 
        description: language === 'en' ? 'Okra cooked with onions and spices' : 'Quiabo cozido com cebolas e especiarias'
      },
      { 
        name: 'Aloo Gobi', 
        price: '€13', 
        description: language === 'en' ? 'Potato and cauliflower curry with spices' : 'Caril de batata e couve-flor com especiarias'
      },
      { 
        name: 'Aloo Palak', 
        price: '€13', 
        description: language === 'en' ? 'Potatoes in creamy spinach sauce' : 'Batatas em molho cremoso de espinafres'
      },
      { 
        name: 'Veg Korma', 
        namePortuguese: 'Korma Vegetariano',
        price: '€13', 
        description: language === 'en' ? 'Mixed vegetables in creamy coconut sauce' : 'Vegetais mistos em molho cremoso de coco'
      },
      { 
        name: 'Daal Makhni', 
        price: '€12.5', 
        description: language === 'en' ? 'Black lentils in rich butter and cream sauce' : 'Lentilhas pretas em molho rico de manteiga e creme'
      },
      { 
        name: 'Daal Tadka', 
        price: '€12.5', 
        description: language === 'en' ? 'Yellow lentils tempered with spices' : 'Lentilhas amarelas temperadas com especiarias'
      },
      { 
        name: 'Chana Masala', 
        price: '€12.5', 
        description: language === 'en' ? 'Chickpeas in spicy tomato and onion sauce' : 'Grão-de-bico em molho picante de tomate e cebola'
      }
    ],
    bread: [
      { 
        name: 'Plain Naan', 
        namePortuguese: 'Naan Simples',
        price: '€2.5', 
        description: language === 'en' ? 'Traditional Indian flatbread' : 'Pão achatado indiano tradicional'
      },
      { 
        name: 'Butter Naan', 
        namePortuguese: 'Naan com Manteiga',
        price: '€2.5', 
        description: language === 'en' ? 'Naan brushed with butter' : 'Naan pincelado com manteiga'
      },
      { 
        name: 'Garlic Naan', 
        namePortuguese: 'Naan de Alho',
        price: '€3.5', 
        description: language === 'en' ? 'Naan with garlic and herbs' : 'Naan com alho e ervas'
      },
      { 
        name: 'Cheese Naan', 
        namePortuguese: 'Naan de Queijo',
        price: '€3.5', 
        description: language === 'en' ? 'Naan stuffed with cheese' : 'Naan recheado com queijo'
      },
      { 
        name: 'Garlic Cheese Naan', 
        namePortuguese: 'Naan de Alho e Queijo',
        price: '€4', 
        description: language === 'en' ? 'Naan with garlic and cheese' : 'Naan com alho e queijo'
      },
      { 
        name: 'Paneer Kulcha', 
        price: '€4', 
        description: language === 'en' ? 'Bread stuffed with spiced cottage cheese' : 'Pão recheado com queijo fresco temperado'
      },
      { 
        name: 'Aloo Kulcha', 
        price: '€4', 
        description: language === 'en' ? 'Bread stuffed with spiced potatoes' : 'Pão recheado com batatas temperadas'
      },
      { 
        name: 'Peshwari Naan', 
        price: '€4.5', 
        description: language === 'en' ? 'Sweet naan with coconut, raisins and nuts' : 'Naan doce com coco, passas e nozes'
      },
      { 
        name: 'Tandoori Roti', 
        price: '€3', 
        description: language === 'en' ? 'Whole wheat flatbread from tandoor' : 'Pão achatado de trigo integral do tandoor'
      }
    ],
    rice: [
      { 
        name: 'Steam Rice', 
        namePortuguese: 'Arroz Cozido',
        price: '€4', 
        description: language === 'en' ? 'Plain steamed basmati rice' : 'Arroz basmati cozido simples'
      },
      { 
        name: 'Chicken Biryani', 
        namePortuguese: 'Biryani de Frango',
        price: '€13', 
        description: language === 'en' ? 'Fragrant basmati rice with spiced chicken' : 'Arroz basmati aromático com frango temperado', 
        popular: true 
      },
      { 
        name: 'Beef Biryani', 
        namePortuguese: 'Biryani de Vaca',
        price: '€15', 
        description: language === 'en' ? 'Aromatic rice with tender beef pieces' : 'Arroz aromático com pedaços tenros de vaca'
      },
      { 
        name: 'Lamb Biryani', 
        namePortuguese: 'Biryani de Cordeiro',
        price: '€15', 
        description: language === 'en' ? 'Aromatic rice with tender lamb pieces' : 'Arroz aromático com pedaços tenros de cordeiro'
      },
      { 
        name: 'Prawn Biryani', 
        namePortuguese: 'Biryani de Camarão',
        price: '€15', 
        description: language === 'en' ? 'Fragrant rice with succulent prawns' : 'Arroz aromático com camarões suculentos'
      },
      { 
        name: 'Vegetable Biryani', 
        namePortuguese: 'Biryani Vegetariano',
        price: '€12', 
        description: language === 'en' ? 'Mixed vegetables with fragrant basmati rice' : 'Vegetais mistos com arroz basmati aromático'
      },
      { 
        name: 'Biryani Rice', 
        namePortuguese: 'Arroz Biryani',
        price: '€7', 
        description: language === 'en' ? 'Spiced basmati rice without meat' : 'Arroz basmati temperado sem carne'
      },
      { 
        name: 'Zeera Rice', 
        namePortuguese: 'Arroz Zeera',
        price: '€7', 
        description: language === 'en' ? 'Basmati rice with cumin seeds' : 'Arroz basmati com sementes de cominho'
      }
    ],
    desserts: [
      { 
        name: 'Rasmalai', 
        price: '€3.5', 
        description: language === 'en' ? 'Cottage cheese dumplings in sweet milk with cardamom' : 'Bolinhos de queijo fresco em leite doce com cardamomo'
      },
      { 
        name: 'Kheer', 
        price: '€2.5', 
        description: language === 'en' ? 'Rice pudding with nuts and aromatic spices' : 'Pudim de arroz com nozes e especiarias aromáticas'
      }
    ],
    drinks: [
      { 
        name: 'Mango Lassi', 
        price: '€3.5', 
        description: language === 'en' ? 'Refreshing mango yogurt drink' : 'Bebida refrescante de iogurte com manga'
      },
      { 
        name: 'Sweet Lassi', 
        price: '€3.5', 
        description: language === 'en' ? 'Traditional sweet yogurt drink' : 'Bebida tradicional doce de iogurte'
      },
      { 
        name: 'Namkeen Lassi', 
        price: '€3.5', 
        description: language === 'en' ? 'Savory salted yogurt drink' : 'Bebida salgada de iogurte'
      },
      { 
        name: 'Fresh Orange Juice', 
        namePortuguese: 'Sumo de Laranja Fresco',
        price: '€3.5', 
        description: language === 'en' ? 'Freshly squeezed orange juice' : 'Sumo de laranja espremido na hora'
      },
      { 
        name: 'Fresh Lemon Mint', 
        namePortuguese: 'Limão Hortelã Fresco',
        price: '€3.5', 
        description: language === 'en' ? 'Refreshing lemon and mint drink' : 'Bebida refrescante de limão e hortelã'
      },
      { 
        name: 'Chaai', 
        price: '€2.5', 
        description: language === 'en' ? 'Spiced tea with milk and aromatic herbs' : 'Chá temperado com leite e ervas aromáticas'
      },
      { 
        name: 'Coca Cola', 
        price: '€2', 
        description: language === 'en' ? 'Classic refreshing cola' : 'Cola refrescante clássica'
      },
      { 
        name: 'Coca Cola Zero', 
        price: '€2', 
        description: language === 'en' ? 'Zero calorie cola' : 'Cola sem calorias'
      },
      { 
        name: 'Fanta', 
        price: '€2', 
        description: language === 'en' ? 'Orange flavored soft drink' : 'Refrigerante sabor laranja'
      },
      { 
        name: '7 UP', 
        price: '€2', 
        description: language === 'en' ? 'Lemon-lime flavored soft drink' : 'Refrigerante sabor limão-lima'
      },
      { 
        name: 'Guarana', 
        price: '€2', 
        description: language === 'en' ? 'Brazilian guarana soft drink' : 'Refrigerante brasileiro de guaraná'
      },
      { 
        name: 'Lipton Ice Tea Mango', 
        price: '€2', 
        description: language === 'en' ? 'Iced tea with mango flavor' : 'Chá gelado com sabor a manga'
      },
      { 
        name: 'Lipton Ice Tea Peach', 
        price: '€2', 
        description: language === 'en' ? 'Iced tea with peach flavor' : 'Chá gelado com sabor a pêssego'
      },
      { 
        name: 'Lipton Ice Tea Lemon', 
        price: '€2', 
        description: language === 'en' ? 'Iced tea with lemon flavor' : 'Chá gelado com sabor a limão'
      },
      { 
        name: 'Pedras Limao 250ml', 
        price: '€2', 
        description: language === 'en' ? 'Portuguese lemon sparkling water' : 'Água com gás portuguesa sabor limão'
      },
      { 
        name: 'Pedras Salgadas 250ml', 
        price: '€2', 
        description: language === 'en' ? 'Portuguese sparkling mineral water' : 'Água mineral com gás portuguesa'
      },
      { 
        name: 'Pedras Salgadas 500ml', 
        price: '€4', 
        description: language === 'en' ? 'Portuguese sparkling mineral water' : 'Água mineral com gás portuguesa'
      },
      { 
        name: 'Water 500ml', 
        namePortuguese: 'Água 500ml',
        price: '€1.5', 
        description: language === 'en' ? 'Still water' : 'Água sem gás'
      },
      { 
        name: 'Water 1.5Ltr', 
        namePortuguese: 'Água 1.5L',
        price: '€2.5', 
        description: language === 'en' ? 'Still water large bottle' : 'Água sem gás garrafa grande'
      }
    ]
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Botanical Decorations */}
      <BotanicalDecor position="top-left" size="lg" className="opacity-10" />
      <BotanicalDecor position="top-right" size="md" className="opacity-15" />
      <BotanicalDecor position="bottom-left" size="md" className="opacity-10" />
      <BotanicalDecor position="bottom-right" size="lg" className="opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-primary-gold mr-3" />
            <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold">
              {t('menu.title')}
            </h2>
            <Leaf className="w-8 h-8 text-primary-gold ml-3 scale-x-[-1]" />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('menu.subtitle')}
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Badge variant="outline" className="border-green-600 text-green-700">
              <Leaf className="w-3 h-3 mr-1" />
              {t('menu.halal')}
            </Badge>
            <Badge variant="outline" className="border-primary-gold text-primary-gold">
              <Star className="w-3 h-3 mr-1" />
              {t('menu.fresh')}
            </Badge>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-gold hover:bg-yellow-600 text-white shadow-lg scale-105'
                  : 'border-2 border-gray-200 hover:border-primary-gold hover:text-primary-gold bg-white'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle botanical background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M10,90 Q20,80 30,85 Q40,90 50,80 Q60,70 70,75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary-gold"
                    />
                  </svg>
                </div>

                <CardContent className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-800 group-hover:text-primary-gold transition-colors">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <Badge className="bg-primary-gold text-white text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            {t('menu.popular')}
                          </Badge>
                        )}
                      </div>
                      {item.namePortuguese && language === 'pt' && (
                        <p className="text-sm text-gray-500 italic mb-2">{item.namePortuguese}</p>
                      )}
                    </div>
                    <span className="text-xl font-semibold text-primary-gold ml-4">{item.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative leaf accent */}
                  <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Leaf className="w-4 h-4 text-primary-gold" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-primary-gold/10 rounded-xl p-8 border border-green-100">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-primary-gold mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">{t('menu.cta.title')}</h3>
              <Leaf className="w-6 h-6 text-primary-gold ml-2 scale-x-[-1]" />
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('menu.cta.desc')}
            </p>
            <Button
              size="lg"
              className="bg-primary-gold hover:bg-yellow-600 text-white px-8 py-3 shadow-lg"
              onClick={() => {
                document.querySelector('#reservations')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              {t('menu.cta.button')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu