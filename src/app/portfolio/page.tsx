"use client"

import Sidebar from "@/components/nav/Sidebar"
import { useEffect, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function PortfolioPage() {
  const refMain = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refMain,
    offset: [0, "end"],
  })

  const greenWidth = useTransform(scrollYProgress, [0.3, 1], ["5rem", "100%"])

  return (
    <section className="relative flex h-screen w-screen overflow-x-clip">
      {/* left div */}
      <Sidebar />

      {/* right div */}
      <section
        ref={refMain}
        className="relative flex-grow h-[180rem] bg-blue-500"
      >
        {/* first */}
        {/* <motion.div className="bg-red-500 sticky bottom-0 h-[100rem] flex flex-col justify-between">
          <div>content 1</div>
          <div>content 2</div>
        </motion.div> */}

        {/* next tab */}
        <motion.div
          className="h-full fixed right-40 top-0 bg-green-500 origin-bottom lg:origin-right"
          style={{
            width: "auto",
          }}
          transition={{ duration: 2 }}
        >
          Work
        </motion.div>

        <motion.div
          className="h-full fixed right-20 top-0 bg-yellow-500 origin-bottom lg:origin-right"
          style={{
            width: "5rem",
          }}
          transition={{ duration: 2 }}
        >
          Experiment
        </motion.div>

        <motion.div
          className="h-full fixed right-0 top-0 bg-purple-500 origin-bottom lg:origin-right"
          style={{
            width: "5rem",
          }}
          transition={{ duration: 2 }}
        >
          People
        </motion.div>
      </section>
    </section>
  )
}
