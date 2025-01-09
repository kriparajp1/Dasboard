import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Maximize2 } from 'lucide-react'

const channels = [
  { name: "Direct", visitors: "195K" },
  { name: "Organic Search", visitors: "19.7K" },
  { name: "Referral", visitors: "8.2K" },
  { name: "Organic Social", visitors: "3K" },
  { name: "Email", visitors: "165" },
  { name: "Organic Video", visitors: "55" },
  { name: "Affiliates", visitors: "1" },
]

export function TopChannelsTable() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Top Channels</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="channels">
            <SelectTrigger className="w-[130px]">
              <SelectValue>Channels</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="channels">Channels</SelectItem>
              <SelectItem value="Sources">Sources</SelectItem>
              <SelectItem value="Campaigns">Campaigns</SelectItem>
            </SelectContent>
          </Select>
          <button className="p-1 bg-accent rounded-md">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 text-sm text-muted-foreground">
          <div>Channel</div>
          <div className="text-right">Visitors</div>
        </div>
        {channels.map((channel) => (
          <div key={channel.name} className="grid grid-cols-2 text-sm">
            <div>{channel.name}</div>
            <div className="text-right">{channel.visitors}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

