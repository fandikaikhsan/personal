import ProjectCard from "@/components/cards/ProjectCard"

type Project = {
  image: string
  title: string
  short_desc: string
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col w-full gap-5 justify-center text-center p-5">
      <div className="flex flex-row overflow-scroll justify-start text-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            short_desc={project.short_desc}
          />
        ))}
      </div>
    </div>
  )
}
