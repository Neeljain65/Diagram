"use client"

import { SignInButton } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const shapes = [
  { type: "rect", color: "#3B82F6" },
  { type: "circle", color: "#10B981" },
  { type: "polygon", color: "#F59E0B" },
  { type: "rect", color: "#EF4444" },
  { type: "circle", color: "#8B5CF6" },
  { type: "polygon", color: "#EC4899" },
]

const ShapeCircle = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-[400px] h-[400px]">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 w-16 h-16"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={
            isLoaded
              ? {
                  x: Math.cos(index * (Math.PI / 3)) * 150,
                  y: Math.sin(index * (Math.PI / 3)) * 150,
                }
              : { x: 0, y: 0 }
          }
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {shape.type === "rect" && <rect x="0" y="0" width="100" height="100" fill={shape.color} />}
              {shape.type === "circle" && <circle cx="50" cy="50" r="50" fill={shape.color} />}
              {shape.type === "polygon" && <polygon points="50 15, 100 100, 0 100" fill={shape.color} />}
            </svg>
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, scale: 0 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Hiro
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-16 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Collaborate in Real-Time with Hiro</h1>
          <p className="text-xl text-gray-600 mb-8">
            Create, share, and collaborate on infinite canvases. Bring your ideas to life with Hiro.
          </p>
          <SignInButton mode="redirect">
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started for Free
          </motion.button>
          </SignInButton>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ShapeCircle />
        </motion.div>
      </div>
    </section>
  )
}

