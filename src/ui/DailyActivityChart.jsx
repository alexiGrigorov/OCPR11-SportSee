import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// A custom tooltip that displays kg and kCal in a red box.
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length === 2) {
    const kg = payload[0].value; // 'kilogram'
    const kcal = payload[1].value; // 'calories'
    return (
      <div
        style={{
          background: "#E60000",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <div>{`${kg}kg`}</div>
        <div>{`${kcal}kCal`}</div>
      </div>
    );
  }
  return null;
};

const DailyActivityChart = ({ data }) => {
  // Parse each item’s date with the built-in Date object.
  // e.g. "2020-07-01" => new Date("2020-07-01").getDate() => 1
  const processedData = data.map((item) => {
    const dateObj = new Date(item.day);
    const dayIndex = dateObj.getDate();
    return {
      ...item,
      dayIndex,
    };
  });

  // Find min/max values to set axis domains nicely
  const maxCal = Math.max(...processedData.map((d) => d.calories));
  const minKg = Math.min(...processedData.map((d) => d.kilogram));
  const maxKg = Math.max(...processedData.map((d) => d.kilogram));

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        background: "#FBFBFB",
        padding: "1rem",
      }}
    >
      <h2 style={{ margin: "0 0 1rem 0" }}>Activité quotidienne</h2>
      <ResponsiveContainer>
        <BarChart
          data={processedData}
          barGap={8}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* Light dashed grid lines */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DEDEDE"
            vertical={false}
          />

          {/* X-axis showing dayIndex as a plain number */}
          <XAxis
            dataKey="dayIndex"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />

          {/* Left Y-axis for Calories */}
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            domain={[0, maxCal + 50]}
          />

          {/* Right Y-axis for Weight (kg) */}
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            domain={[minKg - 1, maxKg + 1]}
          />

          {/* Tooltip for showing “NNkg” and “NNkCal” in a small red box */}
          <Tooltip content={<CustomTooltip />} />

          {/* Legend with black & red labels */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            height={40}
            wrapperStyle={{ top: 0, right: 20 }}
            formatter={(value) =>
              value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"
            }
          />

          {/* Black bar for kilogram */}
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            name="kilogram"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />

          {/* Red bar for calories */}
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            name="calories"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityChart;
