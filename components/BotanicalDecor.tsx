'use client'

import { motion } from 'motion/react'

interface BotanicalDecorProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const BotanicalDecor = ({ position = 'top-left', size = 'md', className = '' }: BotanicalDecorProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  }

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${className} pointer-events-none opacity-20`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-green-600"
        fill="currentColor"
      >
        {/* Decorative botanical elements */}
        <path
          d="M20,80 Q30,70 40,75 Q50,80 60,70 Q70,60 80,65 Q85,70 90,65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M15,85 Q25,75 35,80 Q45,85 55,75 Q65,65 75,70 Q80,75 85,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        
        {/* Leaves */}
        <ellipse cx="25" cy="75" rx="4" ry="8" transform="rotate(-30 25 75)" opacity="0.6" />
        <ellipse cx="35" cy="72" rx="3" ry="6" transform="rotate(20 35 72)" opacity="0.5" />
        <ellipse cx="45" cy="78" rx="5" ry="9" transform="rotate(-10 45 78)" opacity="0.7" />
        <ellipse cx="55" cy="70" rx="4" ry="7" transform="rotate(40 55 70)" opacity="0.6" />
        <ellipse cx="65" cy="73" rx="3" ry="6" transform="rotate(-20 65 73)" opacity="0.5" />
        <ellipse cx="75" cy="68" rx="4" ry="8" transform="rotate(10 75 68)" opacity="0.6" />
        
        {/* Small decorative dots */}
        <circle cx="30" cy="82" r="1" opacity="0.4" />
        <circle cx="50" cy="85" r="1" opacity="0.4" />
        <circle cx="70" cy="75" r="1" opacity="0.4" />
      </svg>
    </motion.div>
  )
}

export default BotanicalDecor