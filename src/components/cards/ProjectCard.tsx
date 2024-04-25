export default function ProjectCard({
  image,
  title,
  short_desc,
}: {
  image: string
  title: string
  short_desc: string
}) {
  return (
    <div className="flex flex-col gap-5 justify-center text-center w-[18rem] p-5">
      <img src={image} alt={title} />
      <div className="">
        <h2 className="font-bold uppercase">{title}</h2>
        <p className="text-xs uppercase">{short_desc}</p>
      </div>
    </div>
  )
}
