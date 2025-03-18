/**
 * @file DailyActivityChart.jsx
 * @module DailyActivityChart
 * @description Composant de graphique représentant l'activité quotidienne de l'utilisateur.
 * Ce composant utilise la bibliothèque Recharts pour afficher un graphique en barres avec deux axes :
 * un axe pour le poids (kilogrammes) et un axe pour les calories brûlées.
 * Des composants personnalisés (CustomTooltip et CustomLegend) sont intégrés pour améliorer la lisibilité
 * et l'expérience utilisateur.
 */

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

/**
 * Composant d'infobulle personnalisé pour le graphique.
 *
 * Affiche le poids et les calories brûlées dans une infobulle positionnée dynamiquement.
 *
 * @component
 * @memberof module:DailyActivityChart
 * @param {Object} props - Les propriétés de l'infobulle.
 * @param {boolean} props.active - Indique si l'infobulle doit être affichée.
 * @param {Array} props.payload - Les données associées au point survolé.
 * @param {Object} props.coordinate - Les coordonnées { x, y } pour positionner l'infobulle.
 * @returns {JSX.Element|null} L'infobulle personnalisée ou null si inactif.
 */
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

/**
 * Composant de légende personnalisé pour le graphique.
 *
 * Affiche le titre du graphique et une légende avec des indicateurs colorés pour le poids et les calories.
 *
 * @component
 * @memberof module:DailyActivityChart
 * @param {Object} props - Les propriétés de la légende.
 * @param {Array} props.payload - Les entrées de légende fournies par Recharts.
 * @returns {JSX.Element} Le rendu de la légende personnalisée.
 */
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

/**
 * Composant DailyActivityChart.
 *
 * Ce composant traite les données d'activité quotidienne et les affiche dans un graphique en barres.
 * Chaque barre représente les calories brûlées et le poids de l'utilisateur sur une journée donnée.
 * Les axes sont configurés dynamiquement en fonction des valeurs minimales et maximales des données.
 *
 * @component
 * @memberof module:DailyActivityChart
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.data - Le tableau des données d'activité quotidienne.
 *        Chaque objet doit contenir au moins les clés "day", "kilogram" et "calories".
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du graphique.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du graphique d'activité quotidienne.
 */
function DailyActivityChart({ data, className, ...props }) {
  // Traiter les données pour extraire l'indice du jour à partir de la date
  const processedData = data.map((item) => {
    const dateObj = new Date(item.day);
    const dayIndex = dateObj.getDate();
    return {
      ...item,
      dayIndex,
    };
  });

  // Déterminer les domaines pour les axes
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
