"use client"

import { motion } from "framer-motion"
import { Square, Circle, Triangle } from "lucide-react"

const features = [
  {
    icon: Square,
    title: "Multiple Organizations",
    description: "Create and manage multiple organizations for different projects or teams.",
  },
  {
    icon: Circle,
    title: "Infinite Boards",
    description: "Design on limitless canvases with our infinite board feature.",
  },
  {
    icon: Triangle,
    title: "Rich Canvas Elements",
    description: "Add shapes, text, images, and more to bring your ideas to life.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

