"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Collaboration() {
  return (
    <section id="collaboration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Real-Time Collaboration</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              src="/collaboration.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg"
            
              // alt="Real-time collaboration demo"
              width={600}
              height={400}
             
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work Together, Anywhere</h3>
            <p className="text-gray-600 mb-6">
              Experience seamless collaboration with real-time updates. See your team's changes instantly, no matter
              where they are in the world.
            </p>
            <ul className="space-y-4">
              {["Live cursors", "Instant updates"].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

