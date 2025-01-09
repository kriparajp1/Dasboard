import { Card } from "@/components/ui/card"

export function LiveMetric({ value }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Live</span>
        <span className="h-2 w-2 rounded-full bg-green-500" />
      </div>
      <div className="mt-2 text-2xl font-bold text-blue-500">{value}</div>
    </Card>
  )
}

