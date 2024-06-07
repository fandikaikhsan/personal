import { FaArrowRight } from "react-icons/fa6"
import Sidebar from "@/components/nav/Sidebar"

import Image from "next/image"

function PeoplePhotoGrid() {
  return (
    <section className="flex gap-5 h-[20rem]">
      <Image
        src="https://picsum.photos/id/22/200/300?grayscale"
        alt="Helping People"
        width={200}
        height={200}
      />
      <Image
        src="https://picsum.photos/id/23/400/300?grayscale"
        alt="Helping People"
        width={400}
        height={200}
      />
      <Image
        src="https://picsum.photos/id/36/400/300?grayscale"
        alt="Helping People"
        width={400}
        height={200}
      />
    </section>
  )
}

function DetailEducationAbout() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-mono">education</h3>
      <div className="flex-grow border-t-2 border-white"></div>
      <div className="flex font-mono text-sm justify-between">
        <h4>Bandung Institute of Technology</h4>
        <p>2024</p>
      </div>
      <div className="flex font-mono text-sm justify-between">
        <h4>Apple Developer Academy</h4>
        <p>2021</p>
      </div>
    </div>
  )
}

function DetailExperienceAbout() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-mono">experiences</h3>
      <div className="flex-grow border-t-2 border-white"></div>
      <div className="flex font-mono text-sm justify-between">
        <h4>Bandung Institute of Technology</h4>
        <p>2024</p>
      </div>
      <div className="flex font-mono text-sm justify-between">
        <h4>Apple Developer Academy</h4>
        <p>2021</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-10 w-[60%] mx-auto py-20">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-[2rem]">About</h2>
        <div className="text-base font-mono text-justify w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          asperiores eius mollitia magnam deserunt aspernatur dolores odit,
          molestias culpa rerum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit.
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-[10rem]">
          <PeoplePhotoGrid />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-base font-mono text-justify w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            asperiores eius mollitia magnam deserunt aspernatur dolores odit,
            molestias culpa rerum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Minus reiciendis dolores alias ipsa in
            reprehenderit qui recusandae sapiente accusamus beatae?
          </div>
          <div className="text-sm font-mono text-justify w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            asperiores eius mollitia magnam deserunt aspernatur dolores odit,
            molestias culpa rerum.
          </div>
        </div>
      </div>
      <DetailEducationAbout />
      <DetailExperienceAbout />
    </section>
  )
}
