import React, { useState } from 'react'
import { Card } from "./components/ui/card"
import { Button } from "./components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Menu, X, Settings ,ChevronLeft, ChevronRight} from 'lucide-react'
import { Sidebar } from './components/sidebar'
import { cn } from "./lib/utils"
import { LiveMetric } from './components/LiveMetric'
import { UniqueVisitorMetric } from './components/UniqueVisitorMetric'
import { ViewsMetric } from './components/ViewsMetric'
import { ViewsPerVisitMetric } from './components/ViewsPerVisitMetric'
import { AvgTimeMetric } from './components/AvgTimeMetric'
import { BounceRateMetric } from './components/BounceRateMetric'
import { VisitDurationMetric } from './components/VisitDurationMetric'
import { TopChannelsTable } from './components/TopChannelsTable'
import { TopPagesTable } from './components/TopPagesTable'
import { CitiesTable } from './components/CitiesTable'
import { DevicesTable } from './components/DevicesTable'
import { PageViewsChart } from './components/PageViewsChart'
import { format , startOfMonth, endOfMonth, addMonths, subMonths} from "date-fns";

export default function AnalyticsDashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [CalIsDropdownOpen, setCalIsDropdownOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10)); // November
  const [nextMonth, setNextMonth] = useState(new Date(2024, 11));
   // State for dropdown

  // 

  const [selectedRange, setSelectedRange] = useState({
    start: new Date(2024, 10, 27),
    end: new Date(2024, 11, 26),
  });

  const toggleDropdownCal = () => setCalIsDropdownOpen(!CalIsDropdownOpen);

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const renderCalendar = (month) => {
    const firstDay = startOfMonth(month).getDay();
    const totalDays = endOfMonth(month).getDate();
    const calendarDays = [];

    // Add empty slots for days before the first day
    for (let i = 1; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Add actual dates
    for (let i = 1; i <= totalDays; i++) {
      calendarDays.push(new Date(month.getFullYear(), month.getMonth(), i));
    }

    return (
      <div>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-sm font-medium text-gray-500 text-center">
              {day}
            </div>
          ))}
          {calendarDays.map((day, idx) => (
            <div
              key={idx}
              className={cn(
                "text-center text-sm w-8 h-8 flex items-center justify-center rounded-md",
                day &&
                  day >= selectedRange.start &&
                  day <= selectedRange.end
                  ? "bg-purple-300 text-purple-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-100",
                day ? "cursor-pointer" : "opacity-0 pointer-events-none"
              )}
              onClick={() =>
                day &&
                setSelectedRange((prev) => ({
                  ...prev,
                  start: day < prev.start ? day : prev.start,
                  end: day > prev.end ? day : prev.end,
                }))
              }
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setNextMonth(subMonths(nextMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setNextMonth(addMonths(nextMonth, 1));
  };

  const presetRanges = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "Last 365 Days",
    "This Month",
    "Last Month",
    "This Year",
    "Last Year",
    "All Time",
  ];
  // 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out flex flex-col items-center",
          isSidebarExpanded ? "pl-68" : "pl-[130px]"
        )}
      >
        {/* Header */}
        <header className="border-b w-[110%] ">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">Visitor Analysis</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* <Select defaultValue="custom">
                <SelectTrigger className="w-[240px]">
                  <SelectValue>17 Dec 2024 to 25 Jan 2025</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">17 Dec 2024 to 25 Jan 2025</SelectItem>
                </SelectContent>
              </Select> */}
              <button
                className="border px-4 py-2 rounded-lg bg-white text-sm shadow-sm"
                onClick={toggleDropdownCal}
              >
                {`${format(selectedRange.start, "dd MMM yyyy")} to ${format(
              selectedRange.end,
              "dd MMM yyyy"
            )}`}
              </button>

              {CalIsDropdownOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[800px] bg-white shadow-lg rounded-md border p-4 z-10">
            <div className="flex">
              {/* Preset Ranges */}
              <div className="w-1/4 border-r pr-4">
                {presetRanges.map((range) => (
                  <div
                    key={range}
                    className="py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
                  >
                    {range}
                  </div>
                ))}
              </div>

              {/* Calendar Section */}
              <div className="w-3/4 pl-4">
                <div className="flex items-center justify-between">
                  <button
                    className="p-2 rounded-md bg-gray-100"
                    onClick={handlePrevMonth}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-semibold">
                      {format(currentMonth, "MMMM yyyy")}
                    </span>
                    <span className="text-sm font-semibold">
                      {format(nextMonth, "MMMM yyyy")}
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-md bg-gray-100"
                    onClick={handleNextMonth}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  {renderCalendar(currentMonth)}
                  {renderCalendar(nextMonth)}
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="bg-purple-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
              <Avatar>
                <AvatarImage src="https://i.postimg.cc/d3LgsNFD/testi-1.jpg" />
                <AvatarFallback>logo</AvatarFallback>
              </Avatar>
            
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {[
              { label: "Page is /dashboard", value: "dashboard" },
              { label: "Source is Google", value: "google" },
              { label: "Screen size is Desktop", value: "desktop" },
              { label: "Browser is Chrome", value: "chrome" },
            ].map((filter) => (
              <div
                key={filter.value}
                className="flex items-center rounded-md border bg-background px-3 py-1.5 text-sm"
              >
                {filter.label}
                <Button variant="ghost" size="icon" className="ml-1 h-4 w-4 p-0">
                  <X className="h-3 w-3" />
                </Button>
                
              </div>
            ))}
            <div className="relative">
                <Button variant="ghost" size="icon" onClick={toggleDropdown}>
                  <Settings className="h-5 w-5" />
                </Button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <ul className="p-2">
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Page</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Source</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Location</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Screen Size</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Browser</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">OS</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">UTM Tags</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Goal</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Page Type</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">CTA</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Scroll</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Session</li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer">Events</li>
                    </ul>
                  </div>
                )}
              </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 w-[150%] max-w-7xl ">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <LiveMetric value="15" />
            <UniqueVisitorMetric value="9.4K" />
            <ViewsMetric value="16.5K" />
            <ViewsPerVisitMetric value="3.44" />
            <AvgTimeMetric value="00:30" />
            <BounceRateMetric value="83%" />
            <VisitDurationMetric value="6m 19S" />
          </div>

          {/* Graph Card */}
          <PageViewsChart />

          {/* Bottom Section */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TopChannelsTable />
            <TopPagesTable />
          </div>

          {/* Additional Tables Section */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <CitiesTable />
            <DevicesTable />
          </div>
        </main>
      </div>
    </div>
  );
}


