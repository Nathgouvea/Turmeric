'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { Button } from './ui/button'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center space-x-2 border-2 border-gray-200 hover:border-primary-gold hover:text-primary-gold transition-all duration-300 bg-white/90 backdrop-blur-sm"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">
          {language === 'en' ? 'PT' : 'EN'}
        </span>
      </Button>
    </motion.div>
  )
}

export default LanguageSwitcher