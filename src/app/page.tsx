import ProjectCard from "@/components/cards/ProjectCard"
import { ProjectsConstant } from "@/constants/HomeConstant"
import ProjectCarousel from "@/components/wraps/ProjectCarousel"
import HomeIntroWrap from "@/components/wraps/HomeIntroWrap"

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-full">
        <ProjectCarousel projects={ProjectsConstant} />
      </div>
      <HomeIntroWrap />
      <div className="h-[70rem]">""</div>
    </main>
  )
}
