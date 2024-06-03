import Sidebar from "@/components/nav/Sidebar"

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-red-300">Main</div>
    </div>
  )
}
