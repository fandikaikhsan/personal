import StackCard from "@/components/cards/StackCard"

export default function StackWrap() {
  return (
    <div className="flex flex-col w-full gap-5 justify-center text-center p-5 lg:p-10">
      <div className="flex flex-col gap-5 overflow-scroll items-center lg:justify-start text-center">
        <StackCard />
        <StackCard />
        <StackCard />
      </div>
    </div>
  )
}
