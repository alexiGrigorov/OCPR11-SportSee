import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Optional dictionary to map your `kind` property into labels (French or otherwise).
// If a data item’s `kind` isn’t found here, we’ll just display the original kind.
const kindLabels = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Énergie",
  cardio: "Cardio",
};

// Define the order in which you want the axes to appear around the radar.
const displayOrder = [
  "intensity",
  "speed",
  "strength",
  "endurance",
  "energy",
  "cardio",
];

function sortByDisplayOrder(a, b) {
  return displayOrder.indexOf(a.kind) - displayOrder.indexOf(b.kind);
}

const RadarPerformanceChart = ({ data }) => {
  // 1) Sort and transform the incoming data.
  //    - Sort by our desired order (above)
  //    - Convert each item to { subject: "...", value: ... } for Recharts
  const preparedData = [...data].sort(sortByDisplayOrder).map((item) => ({
    subject: kindLabels[item.kind] ?? item.kind,
    value: item.value,
  }));

  // 2) Dynamically determine the max domain for the radial axis
  //    so your radar fully accommodates the highest value.
  const maxValue = Math.max(...data.map((d) => d.value)) || 1;

  // 3) Render the chart with a dark background and a red radar fill, similar to your screenshot.
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "#2F2F2F", // dark gray
        borderRadius: "10px",
        padding: "1rem",
      }}
    >
      <ResponsiveContainer>
        <RadarChart data={preparedData} outerRadius="70%">
          <PolarGrid
            stroke="#FFFFFF"
            radialLines={false} // Toggle if you want radial lines or not
          />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            tickLine={false}
            axisLine={false}
            // Optional styling if needed:
            // tick={{ fontSize: 12, fill: "#FFFFFF" }}
          />
          <PolarRadiusAxis
            domain={[0, maxValue]}
            tick={false}
            axisLine={false}
            stroke="#FFFFFF"
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarPerformanceChart;
