export default function StackCard() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 bg-[#CCCCCC] text-white p-3 lg:p-8 max-w-[40rem]">
      <h1 className="text-xl lg:text-[2.5rem] font-bold uppercase">
        Front End
      </h1>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center lg:mt-5">
        <p className="text-[0.6rem] lg:text-xs text-center lg:text-left uppercase">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          repudiandae at non eveniet voluptate quod facere quasi veritatis.
        </p>
        <div className="flex flex-shrink-0 h-fit gap-2">
          <img
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="html"
          />
          <img
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="css"
          />
          <img
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt="js"
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}
