import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * A radial score chart that fills from the top in a counterclockwise direction.
 * Displays a percentage and a subtitle in the center.
 *
 * @param {number} percentage - A number between 0 and 1 representing the fraction filled (e.g., 0.12 for 12%).
 * @param {number} [size=200] - The width and height (in px) of the chart container.
 */
function ScoreChart({ data, className, ...props }) {
  // Recharts expects a data array. We'll just have one data point.
  const dataValue = data * 100; // convert 0.12 => 12
  const score = [
    { name: "Score", value: dataValue, fill: "#FF0000" }, // red arc
  ];

  // Custom label component to render text in the center of the chart
  const CustomLabel = ({ cx, cy, value }) => {
    // cx, cy: center of the chart
    // value: the 'value' of the data point (e.g., 12 for 12%)
    const intValue = Math.round(value);

    return (
      <>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="20"
          fontWeight="bold"
          fill="#333"
        >
          {intValue}%
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12"
          fill="#666"
        >
          de votre objectif
        </text>
      </>
    );
  };

  /**
   * Explanation of key props:
   * - startAngle={90}, endAngle={-270}: This defines a full 360° sweep from top (90°) around to top again,
   *   in the negative direction, which results in a counterclockwise fill.
   * - barSize={10}: Thickness of the arc.
   * - innerRadius/outerRadius: Control how big the ring is.
   * - domain={[0, 100]}: We treat 100 as the max (for 100%).
   * - clockWise={false}: For a negative sweep (counterclockwise).
   */
  return (
    <div
      className={`${className} aspect-square rounded-sm bg-neutral-50 p-8`}
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
          {/* Hide the default axis/ticks; just define the domain */}
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
