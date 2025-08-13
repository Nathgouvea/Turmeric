'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'
import { useLanguage } from '../contexts/LanguageContext'

const Reviews = () => {
  const { t } = useLanguage()

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-great-vibes text-3xl md:text-4xl text-primary-gold mb-1">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Review Statistics - Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-4"
        >
          {/* Google Reviews Card - Compact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Google Reviews</h3>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-800 mr-1">4.9</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-1">
                  {t('language') === 'pt' ? '2,500+ avaliações' : '2,500+ Reviews'}
                </p>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs"
                  onClick={() => window.open('https://www.google.com/maps/place/Turmeric+%D8%AD%D9%84%D8%A7%D9%84+Restaurant/@41.1496032,-8.6110333,17z/data=!3m1!4b1!4m6!3m5!1s0xd2464e4c99d0a19:0x7d7d0b1a0b1a0b1a!8m2!3d41.1496032!4d-8.6084584!16s%2Fg%2F11y0z0z0z0', '_blank')}
                >
                  {t('language') === 'pt' ? 'Ver' : 'View'}
                  <ExternalLink className="w-2 h-2 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* TripAdvisor Reviews Card - Compact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">TripAdvisor</h3>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-800 mr-1">4.8</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-1">
                  {t('language') === 'pt' ? '250+ avaliações' : '250+ Reviews'}
                </p>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs"
                  onClick={() => window.open('https://www.tripadvisor.com/Restaurant_Review-g189180-d26847222-Reviews-Turmeric_Restaurant-Porto_Porto_District_Northern_Portugal.html', '_blank')}
                >
                  {t('language') === 'pt' ? 'Ver' : 'View'}
                  <ExternalLink className="w-2 h-2 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 mr-1" />
              <span>{t('language') === 'pt' ? 'Excelente' : 'Excellent'}</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
              <span>{t('language') === 'pt' ? 'Verificado' : 'Verified'}</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mr-1"></div>
              <span>{t('language') === 'pt' ? 'Recomendado' : 'Recommended'}</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border border-primary-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border border-primary-gold/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}

export default Reviews