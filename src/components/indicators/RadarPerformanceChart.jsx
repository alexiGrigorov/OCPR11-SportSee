import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const kindLabels = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Énergie",
  cardio: "Cardio",
};

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

const RadarPerformanceChart = ({ data, className, ...props }) => {
  const preparedData = [...data].sort(sortByDisplayOrder).map((item) => ({
    subject: kindLabels[item.kind] ?? item.kind,
    value: item.value,
  }));

  const maxValue = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <div
      className={`${className} aspect-square rounded-sm bg-neutral-800 p-8`}
      {...props}
    >
      <ResponsiveContainer>
        <RadarChart data={preparedData} outerRadius="70%">
          <PolarGrid stroke="#FFFFFF" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            tickLine={false}
            axisLine={false}
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
