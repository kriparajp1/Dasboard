import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Maximize2, Monitor, Smartphone, Tablet } from 'lucide-react'

const devices = [
  { type: "Desktop", icon: Monitor, visitors: "153k", percentage: "68.6%" },
  { type: "Mobile", icon: Smartphone, visitors: "68.7k", percentage: "30.7%" },
  { type: "Tablet", icon: Tablet, visitors: "1k", percentage: "0.5%" },
  { type: "(not set)", icon: null, visitors: "73", percentage: "0%" },
]

export function DevicesTable() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Devices</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="device">
            <SelectTrigger className="w-[130px]">
              <SelectValue>Device</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Browser">Browser</SelectItem>
              <SelectItem value="Os">Os</SelectItem>
              <SelectItem value="device">Device</SelectItem>
            </SelectContent>
          </Select>
          <button className="p-1 bg-accent rounded-md">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 text-sm text-muted-foreground">
          <div>Type</div>
          <div className="text-right">Visitors</div>
          <div className="text-right">%</div>
        </div>
        {devices.map((device) => (
          <div key={device.type} className="grid grid-cols-3 text-sm">
            <div className="flex items-center gap-2">
              {device.icon && <device.icon className="h-4 w-4" />}
              {device.type}
            </div>
            <div className="text-right">{device.visitors}</div>
            <div className="text-right">{device.percentage}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

