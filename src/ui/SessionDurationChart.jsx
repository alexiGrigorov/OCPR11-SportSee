import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Map day numbers (1...7) to French labels:
// L (lundi), M (mardi), M (mercredi), J (jeudi), V (vendredi), S (samedi), D (dimanche)
const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

// A custom Tooltip to display the session length as “NN min”
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#FFFFFF",
          color: "#000000",
          padding: "6px 12px",
          borderRadius: 4,
        }}
      >
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const SessionDurationChart = ({ data }) => {
  return (
    // Container for styling (red background, padding, etc.)
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "#FF0101", // red background
        borderRadius: "8px",
        position: "relative",
        padding: "1rem",
      }}
    >
      {/* Chart title overlaid in the corner */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "rgba(255,255,255,0.8)",
          fontSize: "14px",
        }}
      >
        Durée moyenne des sessions
      </div>

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
        >
          {/* Hide the grid lines to mimic your screenshot’s clean look */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />

          {/* X‐axis with custom day labels */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="#ffffff"
            tick={({ x, y, payload }) => {
              const dayIndex = payload.value - 1; // day starts at 1
              return (
                <text
                  x={x}
                  y={y + 10} // move label down a bit
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.8)"
                  style={{ fontSize: "12px" }}
                >
                  {dayLabels[dayIndex]}
                </text>
              );
            }}
          />

          {/* Hide the Y‐axis. If you need it, you can show or customize it. */}
          <YAxis hide />

          {/* Tooltip for hovering (show “NN min”) */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "rgba(255,255,255,0.3)", strokeWidth: 1 }}
          />

          {/* Smooth white line, no dots except the active dot on hover */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
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
