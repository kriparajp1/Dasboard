import { Card } from "@/components/ui/card"

export function ViewsPerVisitMetric({ value }) {
  return (
    <Card className="p-4">
      <div className="text-sm font-medium">Views per Visit</div>
      <div className="mt-2 text-2xl font-bold text-blue-500">{value}</div>
    </Card>
  )
}

