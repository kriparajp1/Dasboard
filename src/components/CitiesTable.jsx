import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Maximize2 } from 'lucide-react'

const cities = [
  { name: "Berlin", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7466994-6051620.png", visitors: "4k" },
  { name: "Paris", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7467112-6051610.png", visitors: "3.5k" },
  { name: "Amsterdam", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7467098-6051596.png", visitors: "3k" },
  { name: "Oslo", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7466990-6051616.png", visitors: "2.7k" },
  { name: "Vienna", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7467077-6051576.png", visitors: "2.5k" },
  { name: "Munich", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7467078-6051577.png", visitors: "1.8k" },
  { name: "Stockholm", flag: "https://cdn.iconscout.com/icon/premium/png-256-thumb/flags-7467116-6051614.png", visitors: "1.7k" },
]

export function CitiesTable() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Cities</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="cities">
            <SelectTrigger className="w-[130px]">
              <SelectValue>Cities</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cities">Cities</SelectItem>
              <SelectItem value="Map">Map</SelectItem>
              <SelectItem value="Countries">Countries</SelectItem>
              <SelectItem value="Regions">Regions</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>
          <button className="p-1 bg-accent rounded-md">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 text-sm text-muted-foreground">
          <div>City</div>
          <div className="text-right">Visitors</div>
        </div>
        {cities.map((city) => (
          <div key={city.name} className="grid grid-cols-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-base"><img className="w-5" src={city.flag} alt="" /></span>
              {city.name}
            </div>
            <div className="text-right">{city.visitors}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

