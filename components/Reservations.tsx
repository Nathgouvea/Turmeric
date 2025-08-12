'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })

  const operatingHours = [
    { day: 'Thursday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Friday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Saturday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Sunday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Monday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Tuesday', hours: '15:00 - 23:00', isOpen: true },
    { day: 'Wednesday', hours: '15:00 - 23:00', isOpen: true }
  ]

  const timeSlots = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="reservations" className="py-20 bg-white">
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
            Reservations
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Book your table for an unforgettable dining experience with authentic Pakistani and Indian cuisine
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-primary-gold text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">
                  Make a Reservation
                </CardTitle>
                <p className="opacity-90 p-[0px] pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  Reserve your table and let us create a memorable experience for you
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+351 XXX XXX XXX"
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          required
                          className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Guests *</Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold">
                            <SelectValue placeholder="Number" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Special Requests (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Any special dietary requirements, celebration notes, or seating preferences..."
                        rows={4}
                        className="border-gray-300 focus:border-primary-gold focus:ring-primary-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-gold hover:bg-yellow-600 text-white py-3 text-lg font-medium"
                      size="lg"
                    >
                      Book Table
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * We'll confirm your reservation within 2 hours via phone or email
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Reservation Submitted!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for choosing Turmeric. We'll contact you within 2 hours to confirm your reservation.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
                  <Clock className="w-6 h-6" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-800">
                        {schedule.day}
                      </span>
                      <span className={`font-semibold ${schedule.isOpen ? 'text-green-600' : 'text-red-500'}`}>
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-gold/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We recommend making reservations in advance, especially for weekend dining.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reservations