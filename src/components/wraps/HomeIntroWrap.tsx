"use client"

export default function HomeIntroWrap() {
  return (
    <div className="flex flex-col flex-shrink-0 items-end w-[80%] md:w-[50%] lg:w-[40%] text-end px-10 gap-5 mt-10">
      <h1 className="text-[3rem] lg:text-[6rem] font-thin leading-[4rem] lg:leading-[6rem] uppercase">
        Fandika
      </h1>
      <h2 className="w-full text-sm font-thin">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel
        est accusantium sint doloremque similique magni pariatur praesentium
        commodi debitis? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptate vel est accusantium sint doloremque similique magni
        pariatur praesentium commodi debitis?
      </h2>

      <button
        className="flex gap-3 items-center justify-center w-[10rem] h-[3rem] bg-gray-900 bg-opacity-75 hover:bg-yellow-400 transition-all ease-linear duration-300"
        onClick={() => {
          window.open("mailto:fandika.ikhsan@gmail.com")
        }}
      >
        Contact Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
          />
        </svg>
      </button>
    </div>
  )
}
