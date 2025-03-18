import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

const CustomCursor = ({ left, top, width, height, points }) => {
  if (!points || points.length === 0) return null;

  const hoverX = points[0].x;
  const chartRight = left + width;

  const rectWidth = chartRight - hoverX;

  return (
    <g>
      <rect
        x={hoverX}
        y={0}
        width={rectWidth}
        height={height * 3}
        fill="black"
        opacity="0.1"
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <div
          className="pointer-events-none absolute bg-white p-2 text-xs font-medium whitespace-nowrap"
          style={{
            left: coordinate.x + 15,
            top: coordinate.y - 15,
          }}
        >
          {`${payload[0].value} min`}
        </div>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <h3 className="text-base font-medium text-white opacity-50">
      Durée moyenne des <br /> sessions
    </h3>
  );
};

const SessionDurationChart = ({ data, className, ...props }) => {
  return (
    <div
      className={`${className} bg-primary aspect-square rounded-sm p-4`}
      {...props}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <Legend verticalAlign="top" height={50} content={<CustomLegend />} />
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={({ x, y, payload }) => {
              const dayIndex = payload.value - 1;
              return (
                <text
                  x={x}
                  y={y + 20}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  style={{ fontSize: "12px" }}
                >
                  {dayLabels[dayIndex]}
                </text>
              );
            }}
          />

          <YAxis hide />

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255,255,255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: "rgba(255,255,255, 0.5)",
              strokeWidth: 10,
              fill: "#ffffff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionDurationChart;
