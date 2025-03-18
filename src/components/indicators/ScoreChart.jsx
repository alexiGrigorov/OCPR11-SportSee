import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
  Pie,
} from "recharts";

// Custom label component to render text in the center of the chart
const CustomLabel = ({ cx, cy, value, viewBox }) => {
  const intValue = Math.round(value);
  const computedInnerRadius = viewBox?.innerRadius;

  return (
    <>
      {computedInnerRadius && (
        <circle cx={cx} cy={cy} r={computedInnerRadius} fill="#fff" />
      )}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        fontWeight="bold"
        fill="#282D30"
      >
        {intValue}%
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fill="#74798C"
      >
        de votre objectif
      </text>
    </>
  );
};

const CustomLegend = () => {
  return <h3 className="text-base font-medium">Score</h3>;
};

/**
 * A radial score chart that fills from the top in a counterclockwise direction.
 * Displays a percentage and a subtitle in the center.
 *
 * @param {number} data - A number between 0 and 1 representing the fraction filled (e.g., 0.12 for 12%).
 */
function ScoreChart({ data, className, ...props }) {
  const dataValue = data * 100; // Convert 0.12 => 12
  const score = [
    { name: "Score", value: dataValue, fill: "#FF0000" }, // red arc
  ];

  return (
    <div
      className={`${className} aspect-square rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={10}
          startAngle={90}
          endAngle={450} // fill counterclockwise from top
          data={score}
        >
          <Legend verticalAlign="top" height={50} content={<CustomLegend />} />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar
            minAngle={15}
            dataKey="value"
            clockWise={false}
            cornerRadius={10}
            label={<CustomLabel />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;
