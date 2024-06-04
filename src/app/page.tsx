"use client"

import Sidebar from "@/components/nav/Sidebar"
import { useEffect, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import DummyContent from "@/components/dummy/HomeContentDummy"

function ContentContainer() {
  const refMain = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refMain,
    // start when the element is 100% in view
    offset: [0.3, "end"],
  })

  const width = useTransform(scrollYProgress, [0, 1], ["2.5rem", "100vw"])
  const height = useTransform(scrollYProgress, [0, 1], ["2.5rem", "100vh"])

  const pinkWidth = useTransform(scrollYProgress, [0, 0.33], ["100vw", "0vw"])
  const greenWidth = useTransform(scrollYProgress, [0.4, 0.6], ["0vw", "100vw"])
  const redWidth = useTransform(scrollYProgress, [0.6, 0.8], ["0vw", "100vw"])
  const yellowWidth = useTransform(scrollYProgress, [0.8, 1], ["0vw", "100vw"])

  return (
    <section className="relative flex overflow-hidden">
      <div ref={refMain} className=" h-[300rem]">
        <div className="relative flex flex-col gap-5 p-10 w-full min-h-screen bg-pink-300">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative h-screen"
          >
            <h1 className="text-[12rem] font-bold">Tech, Design, and Fun</h1>
            <div className="absolute text-lg right-10 bottom-[10rem]">
              Scroll down to see more
            </div>
          </motion.div>

          <DummyContent />
        </div>
      </div>
      <div className="absolute flex flex-col lg:flex-row bottom-0 lg:top-0 right-0 h-[2.5rem] lg:h-full">
        <motion.div
          transition={{ duration: 2 }}
          style={{
            top: 0,
            right: 0,
            padding: "30px",
            backgroundColor: "green",
            width: greenWidth,
          }}
          className="hidden lg:block min-h-[2.5rem] lg:min-h-0 lg:min-w-[2.5rem] lg:h-full origin-bottom lg:origin-right"
        >
          Work
        </motion.div>
        <motion.div
          transition={{ duration: 2 }}
          style={{
            top: 0,
            right: 0,
            padding: "30px",
            backgroundColor: "green",
            width: "2.5rem",
            height: height,
          }}
          className="lg:hidden min-h-[2.5rem] lg:min-h-0 lg:min-w-[2.5rem] lg:h-full origin-bottom lg:origin-right"
        >
          Work
        </motion.div>
        <motion.div
          transition={{ duration: 2 }}
          style={{
            top: 0,
            right: 0,
            padding: "30px",
            backgroundColor: "red",
            width: redWidth,
          }}
          className="hidden lg:block min-h-[2.5rem] lg:min-h-0 lg:min-w-[2.5rem] lg:h-full origin-bottom lg:origin-right"
        >
          Experiment
        </motion.div>
        {/* <div className="px-2 bg-red-500 min-h-[2.5rem] lg:min-h-0 lg:h-full">
          Spike
        </div> */}
        <motion.div
          transition={{ duration: 2 }}
          style={{
            top: 0,
            right: 0,
            padding: "30px",
            backgroundColor: "yellow",
            width: yellowWidth,
          }}
          className="hidden lg:block min-h-[2.5rem] lg:min-h-0 lg:min-w-[2.5rem] lg:h-full origin-bottom lg:origin-right"
        >
          Spike
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen sticky top-0 ">
        <Sidebar />
      </div>
      <div className="flex-1 bg-yellow-300">
        <ContentContainer />
      </div>
    </div>
  )
}
