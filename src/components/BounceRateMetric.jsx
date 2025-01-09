import { Card } from "@/components/ui/card"

export function BounceRateMetric({ value }) {
  return (
    <Card className="p-4">
      <div className="text-sm font-medium">Bounce Rate</div>
      <div className="mt-2 text-2xl font-bold text-blue-500">{value}</div>
    </Card>
  )
}

