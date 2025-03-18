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

const CustomTooltip = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length === 2) {
    const kg = payload[0].value;
    const kcal = payload[1].value;
    return (
      <div
        className="bg-primary pointer-events-none absolute flex flex-col items-center gap-3.5 p-2 text-xs font-medium text-white"
        style={{
          left: coordinate.x + 20,
          top: coordinate.y - 50,
        }}
      >
        <div>{`${kg}kg`}</div>
        <div>{`${kcal}kCal`}</div>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  const DOT_SIZE = 8;

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-base font-medium">Activité quotidienne</h3>

      <div className="flex flex-row items-center gap-8">
        {payload?.map((entry, index) => (
          <div
            key={`legend-item-${index}`}
            className="flex items-center gap-2.5"
          >
            <svg width={DOT_SIZE} height={DOT_SIZE} style={{ marginRight: 8 }}>
              <circle
                cx={DOT_SIZE / 2}
                cy={DOT_SIZE / 2}
                r={DOT_SIZE / 2}
                fill={entry.color}
              />
            </svg>

            <span className="text-label">
              {entry.value === "kilogram"
                ? "Poids (kg)"
                : "Calories brûlées (kCal)"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

function DailyActivityChart({ data, className, ...props }) {
  const processedData = data.map((item) => {
    const dateObj = new Date(item.day);
    const dayIndex = dateObj.getDate();
    return {
      ...item,
      dayIndex,
    };
  });

  const maxCal = Math.max(...processedData.map((d) => d.calories));
  const minKg = Math.min(...processedData.map((d) => d.kilogram));
  const maxKg = Math.max(...processedData.map((d) => d.kilogram));

  return (
    <div
      className={`${className} aspect-3/1 rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <ResponsiveContainer width="100%">
        <BarChart data={processedData} barGap={8}>
          <Legend verticalAlign="top" height={50} content={<CustomLegend />} />

          <XAxis
            dataKey="dayIndex"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
          />

          <YAxis
            yAxisId="calories"
            dataKey="calories"
            hide={true}
            domain={[0, maxCal + 50]}
          />

          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            domain={[minKg - 2, maxKg + 1]}
          />

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#DEDEDE"
            vertical={false}
          />

          <Tooltip cursor={true} content={<CustomTooltip />} />

          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            name="kilogram"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />

          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="var(--color-primary)"
            name="calories"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivityChart;
