import ProjectCard from "@/components/cards/ProjectCard"
import { ProjectsConstant } from "@/constants/HomeConstant"
import ProjectCarousel from "@/components/wraps/ProjectCarousel"
import HomeIntroWrap from "@/components/wraps/HomeIntroWrap"
import StackWrap from "@/components/wraps/StackWrap"

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col lg:flex-row w-full ">
        <ProjectCarousel projects={ProjectsConstant} />
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:justify-around">
        <HomeIntroWrap />
        <StackWrap />
      </div>
    </main>
  )
}
