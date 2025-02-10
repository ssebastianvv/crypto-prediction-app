import { SearchInput } from "../../molecules/home/SearchInput"
import { NavButton } from "../../molecules/home/NavButton"
import { BarChart3, ChevronDown, Globe, Home, LayoutDashboard, LifeBuoy, Settings, Wallet } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="border-r bg-background/50 backdrop-blur">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Wallet className="h-6 w-6" />
        <span className="font-bold">Vaultify</span>
      </div>
      <div className="px-4 py-4">
        <SearchInput />
      </div>
      <nav className="space-y-2 px-2">
        <NavButton icon={LayoutDashboard}>Dashboard</NavButton>
        <NavButton icon={BarChart3}>Statistics & Income</NavButton>
        <NavButton icon={Globe}>Market</NavButton>
        <NavButton icon={Home}>Funding</NavButton>
        <NavButton icon={Wallet}>
          Yield Vaults
          <ChevronDown className="ml-auto h-4 w-4" />
        </NavButton>
        <NavButton icon={LifeBuoy}>Support</NavButton>
        <NavButton icon={Settings}>Settings</NavButton>
      </nav>
    </aside>
  )
}

