import ProjectCard from "@/components/cards/ProjectCard"
import { ProjectsConstant } from "@/constants/HomeConstant"
import ProjectCarousel from "@/components/wraps/ProjectCarousel"

export default function Home() {
  return (
    // <main>
    <div className="w-full">
      <ProjectCarousel projects={ProjectsConstant} />
    </div>
    // </main>
  )
}
