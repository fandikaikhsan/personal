export default function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-none lg:sticky lg:top-0 h-screen flex-col gap-5 w-[20rem] bg-green-300">
      <div className="flex flex-col gap-5 p-5 bg-blue-400">
        <div className="flex gap-4 items-center">
          <div className="h-[4rem] w-[4rem] rounded-full bg-gray-500"></div>
          <div className="">Fandika</div>
        </div>
        <div className="text-left font-light text-sm bg-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut.
          Dignissimos repellat cumque impedit.
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5 bg-red-400">
        <div className="w-full h-[25rem] p-5 bg-gray-400 font-thin text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quam omnis sed
          ipsum, quibusdam beatae consequatur exercitationem commodi eveniet
          assumenda iure. tempore.
        </div>
        <div className="w-full p-5 bg-gray-400 font-thin text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quas.
          Vero libero quia repellat dolores magni voluptates dolorum vitae!
          Animi.
        </div>
      </div>
    </div>
  )
}
