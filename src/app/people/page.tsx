import { FaArrowRight } from "react-icons/fa6"
import Sidebar from "@/components/nav/Sidebar"

import Image from "next/image"

function PeoplePhotoGrid() {
  return (
    <section className="flex gap-5 h-[20rem]">
      <Image
        src="https://picsum.photos/id/1/200/300?grayscale"
        alt="Helping People"
        width={200}
        height={200}
      />
      <Image
        src="https://picsum.photos/id/2/400/300?grayscale"
        alt="Helping People"
        width={400}
        height={200}
      />
      <Image
        src="https://picsum.photos/id/30/400/300?grayscale"
        alt="Helping People"
        width={400}
        height={200}
      />
    </section>
  )
}

export default function PeoplePage() {
  return (
    <section className="relative flex h-screen w-screen overflow-x-hidden">
      {/* left div */}
      <Sidebar />
      <section className="flex flex-col gap-10 w-[60%] mx-auto py-20">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-mono">whats in my mind</div>
          <div className="text-lg font-thin text-justify w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            asperiores eius mollitia magnam deserunt aspernatur dolores odit,
            molestias culpa rerum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-mono text-[2rem]">People</h2>
          <div className="flex flex-col gap-[10rem]">
            <PeoplePhotoGrid />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-thin text-justify w-[80%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              asperiores eius mollitia magnam deserunt aspernatur dolores odit,
              molestias culpa rerum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Minus reiciendis dolores alias ipsa in
              reprehenderit qui recusandae sapiente accusamus beatae?
            </div>
            <div className="text-sm font-thin text-justify w-[80%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              asperiores eius mollitia magnam deserunt aspernatur dolores odit,
              molestias culpa rerum.
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
