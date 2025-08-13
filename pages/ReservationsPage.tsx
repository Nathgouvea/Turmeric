'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock, Phone, MapPin, Calendar, Users, Mail, MessageCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { useLanguage } from '../contexts/LanguageContext'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import OpeningStatus from '../components/OpeningStatus'

const ReservationsPage = () => {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xwpqajpp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error - you might want to show an error message
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30'
  ]

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Restaurant Table Setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-great-vibes text-5xl md:text-7xl text-primary-gold mb-6">
              {t('reservations.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t('reservations.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-gray-800 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-gold mr-3" />
                    {t('reservations.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {t('language') === 'pt' ? 'Reserva Enviada!' : 'Reservation Sent!'}
                      </h3>
                      <p className="text-gray-600">
                        {t('language') === 'pt' 
                          ? 'Obrigado pela sua reserva. Entraremos em contacto em breve para confirmar.' 
                          : 'Thank you for your reservation. We will contact you shortly to confirm.'
                        }
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 bg-primary-gold hover:bg-yellow-600"
                      >
                        {t('language') === 'pt' ? 'Nova Reserva' : 'New Reservation'}
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name">{t('reservations.form.name')}</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-1"
                          placeholder={t('reservations.form.name')}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email">{t('reservations.form.email')}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-1"
                          placeholder={t('reservations.form.email')}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone">{t('reservations.form.phone')}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="mt-1"
                          placeholder={t('reservations.form.phone')}
                        />
                      </div>

                      {/* Date and Time */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">{t('reservations.form.date')}</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            required
                            className="mt-1"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">{t('reservations.form.time')}</Label>
                          <Select name="time" required>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder={t('reservations.form.time')} />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Number of Guests */}
                      <div>
                        <Label htmlFor="guests">{t('reservations.form.guests')}</Label>
                        <Select name="guests" required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder={t('reservations.form.guests')} />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((number) => (
                              <SelectItem key={number} value={number}>
                                {number} {number === '1' ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <Label htmlFor="requests">{t('reservations.form.requests')}</Label>
                        <Textarea
                          id="requests"
                          name="requests"
                          className="mt-1"
                          placeholder={t('reservations.form.requests')}
                          rows={3}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-3 text-lg"
                      >
                        {isSubmitting 
                          ? (t('language') === 'pt' ? 'Enviando...' : 'Submitting...') 
                          : t('reservations.form.submit')
                        }
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Opening Hours */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary-gold mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">{t('reservations.hours')}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">{t('reservations.daily')}</p>
                  <OpeningStatus />
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-primary-gold mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">{t('reservations.phone')}</h3>
                  </div>
                  <a 
                    href="tel:+351222086926" 
                    className="text-primary-gold hover:text-yellow-600 text-lg font-medium transition-colors"
                  >
                    +351 22 208 6926
                  </a>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-primary-gold mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">{t('contact.visit')}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    R. Formosa 429<br />
                    4000-253 Porto, Portugal
                  </p>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-primary-gold/10 to-green-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary-gold mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {t('language') === 'pt' ? 'Informação Importante' : 'Important Information'}
                    </h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• {t('language') === 'pt' ? 'Confirmamos a sua reserva em 2 horas via telefone ou email' : 'We\'ll confirm your reservation within 2 hours via phone or email'}</li>
                    <li>• {t('language') === 'pt' ? '100% Comida Halal Certificada' : '100% Certified Halal Food'}</li>
                    <li>• {t('language') === 'pt' ? 'Ingredientes Frescos Diariamente' : 'Fresh Ingredients Daily'}</li>
                    <li>• {t('language') === 'pt' ? 'Ambiente Familiar Acolhedor' : 'Family Friendly Environment'}</li>
                    <li>• {t('language') === 'pt' ? 'Estacionamento Disponível Nas Proximidades' : 'Parking Available Nearby'}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReservationsPage