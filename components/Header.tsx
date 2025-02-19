"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SignUpButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Hiro
          </Link>
        </motion.div>
        <motion.ul
          className="flex space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li>
            <Link href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
          </li>
          <li>
            <Link href="#collaboration" className="text-gray-600 hover:text-blue-600">
              Collaboration
            </Link>
          </li>
          
          <li>
            <SignUpButton />
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}

