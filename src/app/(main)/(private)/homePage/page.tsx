
import { Sidebar } from "@/components/organisms/home/Sidebar"
import { DashboardTemplate } from "@/components/template/home/DashboardTemplate"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <DashboardTemplate />
      </div>
    </div>
  )
}

