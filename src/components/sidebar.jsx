import React, { useState } from "react";
import {
  Home,
  Users,
  BarChart2,
  MessageSquare,
  ArrowLeftRight,
  Bell,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: Home, label: "Dashboard", isActive: true },
  { icon: Users, label: "Visitor Analysis", isActive: true },
  { icon: BarChart2, label: "User Analytics", isActive: true },
  { icon: MessageSquare, label: "Customer", isActive: true },
  { icon: ArrowLeftRight, label: "User Path", isActive: true },
  { icon: Bell, label: "Campaigns", isActive: true },
  { icon: RotateCcw, label: "Feature Usage", isActive: true },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen bg-background transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-[60px]"
      )}
    >
      <div className="flex h-full flex-col items-center py-4">
        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="icon"
          className="mb-4"
          onClick={() => setIsExpanded(!isExpanded)} // Toggle state
        >
          <ChevronRight
            className={cn(
              "h-5 w-5 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
        {/* Sidebar Items */}
        {sidebarItems.map((Item, index) => (
          <button
            key={index}
            className={cn(
              "flex h-[40px] items-center justify-start rounded-md px-2",
              "my-1 w-full hover:bg-accent",
              Item.isActive && "bg-accent",
              isExpanded ? "px-4" : "px-2"
            )}
          >
            <Item.icon className="h-5 w-5 shrink-0" />
            {isExpanded && (
              <span className="ml-4 text-sm font-medium">{Item.label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
