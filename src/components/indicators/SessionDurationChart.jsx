/**
 * @file SessionDurationChart.jsx
 * @module SessionDurationChart
 * @description Composant de graphique linéaire pour afficher la durée moyenne des sessions.
 * Ce graphique illustre la durée des sessions (en minutes) sur une période donnée. Il utilise Recharts pour afficher
 * une ligne de tendance accompagnée d'un curseur personnalisé, d'une infobulle et d'une légende.
 */

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

/**
 * Abréviations des jours de la semaine.
 * @constant {Array<string>}
 */
const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * Composant de curseur personnalisé pour le graphique des sessions.
 *
 * Ce composant rend un rectangle semi-transparent qui s'étend du point de survol jusqu'à la fin du graphique,
 * offrant ainsi un repère visuel sur la zone actuellement survolée.
 *
 * @component
 * @memberof module:SessionDurationChart
 * @param {Object} props - Les propriétés du curseur personnalisé.
 * @param {number} props.left - La coordonnée gauche du conteneur du graphique.
 * @param {number} props.top - La coordonnée supérieure du conteneur du graphique.
 * @param {number} props.width - La largeur du conteneur du graphique.
 * @param {number} props.height - La hauteur du conteneur du graphique.
 * @param {Array<Object>} props.points - Les points de données survolés par la souris.
 * @returns {JSX.Element|null} Le rendu du curseur personnalisé ou null s'il n'y a pas de point survolé.
 */
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

/**
 * Composant d'infobulle personnalisé pour le graphique des sessions.
 *
 * Affiche la durée de la session (en minutes) au survol d'un point de données.
 *
 * @component
 * @memberof module:SessionDurationChart
 * @param {Object} props - Les propriétés de l'infobulle.
 * @param {boolean} props.active - Indique si l'infobulle doit être affichée.
 * @param {Array<Object>} props.payload - Les données associées au point survolé.
 * @param {Object} props.coordinate - Les coordonnées { x, y } pour positionner l'infobulle.
 * @returns {JSX.Element|null} Le rendu de l'infobulle personnalisée ou null si inactif.
 */
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

/**
 * Composant de légende personnalisé pour le graphique des sessions.
 *
 * Affiche le titre de la légende indiquant "Durée moyenne des sessions".
 *
 * @component
 * @memberof module:SessionDurationChart
 * @param {Object} props - Les propriétés de la légende.
 * @returns {JSX.Element} Le rendu de la légende personnalisée.
 */
const CustomLegend = ({ payload }) => {
  return (
    <h3 className="text-base font-medium text-white opacity-50">
      Durée moyenne des <br /> sessions
    </h3>
  );
};

/**
 * Composant SessionDurationChart.
 *
 * Ce composant affiche un graphique linéaire représentant la durée moyenne des sessions d'un utilisateur.
 * Les données, contenant une clé "day" (numérique) et "sessionLength" (durée en minutes), sont utilisées pour tracer la ligne.
 * Les jours sont affichés sous forme d'abréviations (ex. L, M, M, J, V, S, D) et le graphique inclut un curseur personnalisé,
 * une infobulle et une légende.
 *
 * @component
 * @memberof module:SessionDurationChart
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.data - Le tableau de données pour le graphique. Chaque objet doit contenir :
 *        - {number} day - Le jour de la session (exprimé en index de jour, 1 pour Lundi, etc.).
 *        - {number} sessionLength - La durée de la session en minutes.
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du graphique.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du graphique de durée des sessions.
 */
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
