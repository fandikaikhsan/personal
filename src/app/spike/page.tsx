"use client"

import Sidebar from "@/components/nav/Sidebar"
// import "./styles.css"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

function Item() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  return (
    <section className="h-screen flex justify-center items-center">
      <div
        ref={ref}
        className="w-48 h-72 border-2 border-dotted border-red-500 bg-green-100 relative"
      >
        <figure className=" top-0 w-20 h-20 m-0 p-0">
          <svg
            id="progress"
            width="75"
            height="75"
            viewBox="0 0 100 100"
            className="-translate-x-24 -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-gray-500 opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-500"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  )
}

// export default function Home() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 bg-red-300">Main</div>
//     </div>
//   )
// }
