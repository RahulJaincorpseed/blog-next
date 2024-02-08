"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="main-box">
      <Link href="/dashboard">GO to Dashboard</Link>
      <p>Home page</p>
      <button>click me</button>
      <motion.div
        animate={{
          x: 200,
          y: 100,
          scale: 1.2,
        }}
      >
        <div className="my-box"></div>
      </motion.div>
    </div>
  )
}
