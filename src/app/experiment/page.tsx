import { FaArrowRight } from "react-icons/fa6"
import Sidebar from "@/components/nav/Sidebar"

function ExperimentGrid() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex-grow border-t-2 border-white"></div>
      <div className=" grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 ">
        <div className=" p-10  py-20 bg-cyan-200">1</div>
        <div className=" p-10  py-20 ">1</div>
        <div className=" p-10  py-20 bg-blue-200">1</div>
      </div>
      <div className="flex-grow border-t-2 border-white"></div>
      <div className=" grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 ">
        <div className=" p-10  py-20 ">1</div>
        <div className=" p-10  py-20 bg-green-200">1</div>
        <div className=" p-10  py-20 bg-green-200">1</div>
      </div>
      <div className="flex-grow border-t-2 border-white"></div>
      <div className=" grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 ">
        <div className=" p-10  py-20 bg-cyan-200">1</div>
        <div className=" p-10  py-20 ">1</div>
        <div className=" p-10  py-20 bg-green-200">1</div>
      </div>
      <div className="flex-grow border-t-2 border-white"></div>
      <div className="self-end px-5 flex gap-2 items-center text-white text-xl">
        read more
        <FaArrowRight />
      </div>
    </section>
  )
}

export default function ExperimentPage() {
  return (
    <section className="relative flex h-screen w-screen overflow-x-hidden">
      {/* left div */}
      <Sidebar />
      <section className="flex flex-col gap-10 w-[60%] mx-auto py-20">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-mono">i love learning</div>
          <div className="text-lg font-thin">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            asperiores eius mollitia magnam deserunt aspernatur dolores odit,
            molestias culpa rerum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Minus reiciendis dolores alias ipsa in
            reprehenderit qui recusandae sapiente accusamus beatae?
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-bold text-[2rem]">experiments</h2>
          <div className="flex flex-col gap-[10rem]">
            <ExperimentGrid />
            <ExperimentGrid />
            <ExperimentGrid />
          </div>{" "}
        </div>
      </section>
    </section>
  )
}
