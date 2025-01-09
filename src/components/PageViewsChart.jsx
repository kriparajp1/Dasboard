

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2 } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Dec 2, 2024", views: 2000, people: 1000 },
  { date: "Dec 6, 2024", views: 4000, people: 2000 },
  { date: "Dec 10, 2024", views: 1800, people: 900 },
  { date: "Dec 14, 2024", views: 1800, people: 1100 },
  { date: "Dec 18, 2024", views: 2400, people: 1400 },
  { date: "Dec 22, 2024", views: 1800, people: 1000 },
]

export function PageViewsChart() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Page views</h2>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Maximize2 className="h-4 w-4" />
          <span className="sr-only">Expand</span>
        </Button>
      </div>
      <div className="h-[px] w-full">
        <ChartContainer
          config={{
            views: {
              label: "Views",
              color: "hsl(var(--chart-1))",
            },
            people: {
              label: "People",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(59, 130, 246)" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="rgb(59, 130, 246)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })
                }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="rgb(59, 130, 246)"
                fillOpacity={1}
                fill="url(#colorViews)"
                strokeWidth={2}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (!active || !payload) return null
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-lg">
                      <div className="text-sm">
                        {new Date(payload[0]?.payload?.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="text-sm text-blue-500">
                        {payload[0]?.payload?.people}K People
                      </div>
                      <div className="text-sm text-blue-500">
                        {payload[0]?.payload?.views}K Views
                      </div>
                    </div>
                  )
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Card>
  )
}

