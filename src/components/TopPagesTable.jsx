import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Maximize2 } from 'lucide-react'

const pages = [
  { path: "/dashboard", visitors: "153K" },
  { path: "/applications", visitors: "83K" },
  { path: "/", visitors: "37.7K" },
  { path: "/login", visitors: "18.1K" },
  { path: "/result", visitors: "4.9K" },
  { path: "/test", visitors: "4.8K" },
  { path: "/pricing", visitors: "4K" },
]

export function TopPagesTable() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Top Pages</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="pages">
            <SelectTrigger className="w-[130px]">
              <SelectValue>Pages</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pages">Pages</SelectItem>
              <SelectItem value="Entry Pages">Entry Pages</SelectItem>
              <SelectItem value="Exit Pages">Exit Pages</SelectItem>
            </SelectContent>
          </Select>
          <button className="p-1 bg-accent rounded-md">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 text-sm text-muted-foreground">
          <div>Page</div>
          <div className="text-right">Visitors</div>
        </div>
        {pages.map((page) => (
          <div key={page.path} className="grid grid-cols-2 text-sm">
            <div>{page.path}</div>
            <div className="text-right">{page.visitors}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

