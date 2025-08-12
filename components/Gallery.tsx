'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import restaurantInterior from 'figma:asset/2c99c53c0f50e5cf9182c5c3ce02df9316d71fd2.png'
import curryDish from 'figma:asset/4a4d01f71012b316635e9f7536939459e56d9896.png'
import grilledFish from 'figma:asset/10d817702c2b0356be960e78888c4623bba36f00.png'
import diningTable from 'figma:asset/a221ffbc6bfa9ded791962afa1ecd0aa25bd5fc9.png'
import spicyChicken from 'figma:asset/4577f7d3b5ba863677bf6bb020d31755981622fc.png'
import tandooriPlatter from 'figma:asset/d5045f0357bc07ceb5879cdbc7836337a33d9a5a.png'
import { useLanguage } from '../contexts/LanguageContext'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { t } = useLanguage()

  const galleryItems = [
    {
      src: restaurantInterior,
      title: t('language') === 'pt' ? 'Espaço Elegante' : 'Elegant Dining Space',
      description: t('language') === 'pt' 
        ? 'Experiencie o jantar de luxo no nosso restaurante lindamente projetado com comodidades modernas e charme tradicional.'
        : 'Experience luxury dining in our beautifully designed restaurant with modern amenities and traditional charm.',
      category: t('language') === 'pt' ? 'Interior' : 'Interior'
    },
    {
      src: diningTable,
      title: t('language') === 'pt' ? 'Mesa Familiar' : 'Family Dining Experience',
      description: t('language') === 'pt'
        ? 'Desfrute de uma refeição em família com os nossos pratos autênticos num ambiente acolhedor.'
        : 'Enjoy a family meal with our authentic dishes in a warm, welcoming atmosphere.',
      category: t('language') === 'pt' ? 'Experiência' : 'Experience'
    },
    {
      src: spicyChicken,
      title: t('language') === 'pt' ? 'Frango Tandoori' : 'Tandoori Chicken Wings',
      description: t('language') === 'pt'
        ? 'Asas de frango marinadas com especiarias tradicionais e grelhadas na perfeição.'
        : 'Chicken wings marinated with traditional spices and grilled to perfection.',
      category: t('language') === 'pt' ? 'Tandoori' : 'Tandoori'
    },
    {
      src: tandooriPlatter,
      title: t('language') === 'pt' ? 'Prato Misto' : 'Mixed Grill Platter',
      description: t('language') === 'pt'
        ? 'Uma seleção dos nossos melhores pratos grelhados com legumes frescos e molhos especiais.'
        : 'A selection of our finest grilled dishes with fresh vegetables and special sauces.',
      category: t('language') === 'pt' ? 'Grelhados' : 'Grills'
    },
    {
      src: curryDish,
      title: t('language') === 'pt' ? 'Caril Especial' : 'Signature Curry',
      description: t('language') === 'pt'
        ? 'O nosso caril especial do chef com especiarias ricas e aromáticas e um equilíbrio perfeito de sabores.'
        : 'Our chef\'s special curry with rich, aromatic spices and a perfect balance of flavors.',
      category: t('language') === 'pt' ? 'Caril' : 'Curry'
    },
    {
      src: grilledFish,
      title: t('language') === 'pt' ? 'Peixe Especial' : 'Grilled Fish Special',
      description: t('language') === 'pt'
        ? 'Peixe fresco marinado com especiarias tradicionais e grelhado na perfeição, servido com vegetais frescos.'
        : 'Fresh fish marinated with traditional spices and grilled to perfection, served with fresh vegetables.',
      category: t('language') === 'pt' ? 'Peixe' : 'Fish'
    },
    // Additional placeholder images from Unsplash
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t('language') === 'pt' ? 'Biryani Autêntico' : 'Authentic Biryani',
      description: t('language') === 'pt'
        ? 'Arroz basmati perfumado em camadas com carne tenra e especiarias aromáticas, uma verdadeira obra-prima.'
        : 'Fragrant basmati rice layered with tender meat and aromatic spices, a true masterpiece.',
      category: 'Biryani'
    },
    {
      src: 'https://images.unsplash.com/photo-1563379091339-03246963d293?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t('language') === 'pt' ? 'Naan Fresco' : 'Fresh Naan Bread',
      description: t('language') === 'pt'
        ? 'Pão naan macio e fofo cozido fresco no nosso forno tandoor, perfeito com qualquer caril.'
        : 'Soft, fluffy naan bread baked fresh in our tandoor oven, perfect with any curry.',
      category: t('language') === 'pt' ? 'Pão' : 'Bread'
    },
    {
      src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t('language') === 'pt' ? 'Sobremesas Deliciosas' : 'Delectable Desserts',
      description: t('language') === 'pt'
        ? 'Doces tradicionais indianos e sobremesas para completar a sua experiência gastronómica.'
        : 'Traditional Indian sweets and desserts to complete your dining experience.',
      category: t('language') === 'pt' ? 'Sobremesas' : 'Desserts'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-primary-gold mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-gold transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-primary-gold text-white px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for expanded image view */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery item"
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary-gold rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {t('language') === 'pt' ? 'Pronto para Criar as Suas Próprias Memórias?' : 'Ready to Create Your Own Memories?'}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('language') === 'pt' 
              ? 'Junte-se a nós para uma experiência gastronómica inesquecível onde cada prato conta uma história'
              : 'Join us for an unforgettable dining experience where every dish tells a story'
            }
          </p>
          <motion.button
            className="bg-white text-primary-gold px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector('#reservations')?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            {t('language') === 'pt' ? 'Reserve a Sua Mesa' : 'Book Your Table'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery