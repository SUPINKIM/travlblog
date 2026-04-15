"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface ActivityHeatmapProps {
  activityMap: Record<string, number>;
}

interface CellData {
  date: string;
  count: number;
  dayOfWeek: number;
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getColor(count: number): string {
  if (count === 0) return "var(--color-empty)";
  if (count === 1) return "var(--color-level1)";
  if (count === 2) return "var(--color-level2)";
  if (count === 3) return "var(--color-level3)";
  return "var(--color-level4)";
}

function getWeeksForYear(
  year: number,
  activityMap: Record<string, number>
): CellData[][] {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  // Adjust start to previous Sunday
  const startDay = startDate.getDay();
  if (startDay !== 0) {
    startDate.setDate(startDate.getDate() - startDay);
  }

  const weeks: CellData[][] = [];
  let currentWeek: CellData[] = [];

  for (
    let d = new Date(startDate);
    d <= endDate;
    d.setDate(d.getDate() + 1)
  ) {
    const dateStr = d.toISOString().slice(0, 10);
    const dayOfWeek = d.getDay();
    const isInYear = d.getFullYear() === year;

    currentWeek.push({
      date: dateStr,
      count: isInYear ? (activityMap[dateStr] || 0) : -1, // -1 = outside year
      dayOfWeek,
    });

    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    // Fill remaining days
    while (currentWeek.length < 7) {
      const last = currentWeek[currentWeek.length - 1];
      const nextDay = new Date(last.date);
      nextDay.setDate(nextDay.getDate() + 1);
      currentWeek.push({
        date: nextDay.toISOString().slice(0, 10),
        count: -1,
        dayOfWeek: currentWeek.length,
      });
    }
    weeks.push(currentWeek);
  }

  return weeks;
}

function getAvailableYears(activityMap: Record<string, number>): number[] {
  const years = new Set<number>();
  for (const date of Object.keys(activityMap)) {
    years.add(new Date(date).getFullYear());
  }
  // Always include current year
  years.add(new Date().getFullYear());
  return Array.from(years).sort((a, b) => b - a);
}

export function ActivityHeatmap({ activityMap }: ActivityHeatmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());
  const [cellSize, setCellSize] = useState(11);
  const [tooltip, setTooltip] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  const availableYears = useMemo(() => getAvailableYears(activityMap), [activityMap]);
  const weeks = useMemo(
    () => getWeeksForYear(selectedYear, activityMap),
    [selectedYear, activityMap]
  );

  const yearPosts = useMemo(() => {
    return Object.entries(activityMap)
      .filter(([date]) => new Date(date).getFullYear() === selectedYear)
      .reduce((sum, [, count]) => sum + count, 0);
  }, [activityMap, selectedYear]);

  const activeDays = useMemo(() => {
    return Object.entries(activityMap)
      .filter(([date, count]) => new Date(date).getFullYear() === selectedYear && count > 0)
      .length;
  }, [activityMap, selectedYear]);

  // Calculate month label positions
  const monthLabels = useMemo(() => {
    const labels: { label: string; weekIdx: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIdx) => {
      // Find first day of this week that's in the selected year
      const dayInYear = week.find(
        (d) => d.count >= 0 && new Date(d.date).getFullYear() === selectedYear
      );
      if (dayInYear) {
        const month = new Date(dayInYear.date).getMonth();
        if (month !== lastMonth) {
          labels.push({ label: MONTH_LABELS[month], weekIdx });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [weeks, selectedYear]);

  // Responsive cell sizing
  const calculateCellSize = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const dayLabelWidth = 28; // space for Mon/Wed/Fri labels
    const gap = 3;
    const numWeeks = weeks.length;
    const availableWidth = containerWidth - dayLabelWidth;
    const maxCellSize = Math.floor((availableWidth - gap * (numWeeks - 1)) / numWeeks);
    setCellSize(Math.max(6, Math.min(13, maxCellSize)));
  }, [weeks.length]);

  useEffect(() => {
    calculateCellSize();
    const observer = new ResizeObserver(calculateCellSize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [calculateCellSize]);

  const gap = cellSize <= 8 ? 2 : 3;

  return (
    <div
      className="w-full"
      style={{
        ["--color-empty" as string]: "hsl(var(--surface-3) / 0.5)",
        ["--color-level1" as string]: "hsl(var(--brand-cyan) / 0.25)",
        ["--color-level2" as string]: "hsl(var(--brand-cyan) / 0.45)",
        ["--color-level3" as string]: "hsl(var(--brand-cyan) / 0.65)",
        ["--color-level4" as string]: "hsl(var(--brand-cyan) / 0.9)",
      }}
    >
      {/* Header: year selector + stats */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        {/* Year tabs */}
        <div className="flex items-center gap-1">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                selectedYear === year
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-3"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span>
            <span className="text-foreground font-semibold">{yearPosts}</span> posts
          </span>
          <span>
            <span className="text-foreground font-semibold">{activeDays}</span> active days
          </span>
        </div>
      </div>

      {/* Heatmap grid */}
      <div ref={containerRef} className="w-full overflow-hidden">
        {/* Month labels */}
        <div className="flex" style={{ paddingLeft: `${28 + gap}px` }}>
          {monthLabels.map(({ label, weekIdx }, idx) => {
            const nextWeekIdx = monthLabels[idx + 1]?.weekIdx ?? weeks.length;
            const span = nextWeekIdx - weekIdx;
            return (
              <span
                key={`${label}-${idx}`}
                className="text-[10px] text-muted-foreground leading-none"
                style={{
                  width: `${span * (cellSize + gap)}px`,
                  flexShrink: 0,
                }}
              >
                {cellSize >= 8 ? label : label.charAt(0)}
              </span>
            );
          })}
        </div>

        {/* Grid with day labels */}
        <div
          className="flex mt-1"
          style={{ gap: `${gap}px` }}
        >
          {/* Day labels */}
          <div
            className="flex flex-col shrink-0"
            style={{ gap: `${gap}px`, width: "28px" }}
          >
            {DAY_LABELS.map((label, i) => (
              <span
                key={i}
                className="text-muted-foreground flex items-center justify-end pr-1"
                style={{
                  height: `${cellSize}px`,
                  fontSize: cellSize <= 8 ? "7px" : "9px",
                }}
              >
                {i % 2 === 1 ? (cellSize >= 10 ? label.slice(0, 3) : label.charAt(0)) : ""}
              </span>
            ))}
          </div>

          {/* Cells */}
          <div className="flex flex-1 min-w-0" style={{ gap: `${gap}px` }}>
            {weeks.map((week, weekIdx) => (
              <div
                key={weekIdx}
                className="flex flex-col"
                style={{ gap: `${gap}px` }}
              >
                {week.map((cell, dayIdx) => {
                  if (cell.count < 0) {
                    // Outside year — render empty transparent cell
                    return (
                      <div
                        key={dayIdx}
                        style={{
                          width: `${cellSize}px`,
                          height: `${cellSize}px`,
                        }}
                      />
                    );
                  }

                  return (
                    <div
                      key={dayIdx}
                      className="rounded-sm cursor-pointer transition-all duration-150 hover:ring-1 hover:ring-foreground/30"
                      style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        backgroundColor: getColor(cell.count),
                      }}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          date: cell.date,
                          count: cell.count,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="rounded-sm"
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                backgroundColor: getColor(level),
              }}
            />
          ))}
          <span className="text-[10px] text-muted-foreground">More</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-2.5 py-1.5 rounded-md bg-surface-1 border border-border text-[11px] text-foreground shadow-lg -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <span className="font-medium">
            {tooltip.count > 0
              ? `${tooltip.count} post${tooltip.count > 1 ? "s" : ""}`
              : "No posts"}
          </span>{" "}
          on {tooltip.date}
        </div>
      )}
    </div>
  );
}
