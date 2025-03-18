/**
 * @file ScoreChart.jsx
 * @module ScoreChart
 * @description Composant de graphique radial pour afficher le score de l'utilisateur.
 * Ce graphique représente le score sous forme de pourcentage, en remplissant une barre radiale du haut vers le bas en sens antihoraire.
 * Au centre, le pourcentage ainsi qu'un sous-titre sont affichés pour indiquer l'atteinte de l'objectif.
 */

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * Composant d'étiquette personnalisée pour le graphique radial.
 *
 * Affiche le pourcentage sous forme d'entier et un sous-titre indiquant "de votre objectif".
 *
 * @component
 * @memberof module:ScoreChart
 * @param {Object} props - Les propriétés de l'étiquette.
 * @param {number} props.cx - Coordonnée X du centre du graphique.
 * @param {number} props.cy - Coordonnée Y du centre du graphique.
 * @param {number} props.value - La valeur (pourcentage) à afficher.
 * @param {Object} [props.viewBox] - L'objet viewBox contenant notamment l'innerRadius du graphique.
 * @returns {JSX.Element} Le rendu de l'étiquette personnalisée.
 */
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

/**
 * Composant de légende personnalisé pour le graphique de score.
 *
 * Affiche le titre "Score" en haut du graphique.
 *
 * @component
 * @memberof module:ScoreChart
 * @returns {JSX.Element} Le rendu de la légende personnalisée.
 */
const CustomLegend = () => {
  return <h3 className="text-base font-medium">Score</h3>;
};

/**
 * Composant ScoreChart.
 *
 * Affiche un graphique radial de type RadialBarChart représentant le score de l'utilisateur.
 * Le score est fourni sous forme de fraction (entre 0 et 1) et est converti en pourcentage pour l'affichage.
 * Le graphique se remplit de manière antihoraire en partant du haut (90°) et se termine à 450°.
 *
 * @component
 * @memberof module:ScoreChart
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.data - Une valeur numérique entre 0 et 1 représentant le score (par exemple, 0.12 pour 12%).
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du graphique.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du graphique radial de score.
 */
function ScoreChart({ data, className, ...props }) {
  // Convertir la fraction en pourcentage
  const dataValue = data * 100;
  const score = [
    { name: "Score", value: dataValue, fill: "#FF0000" }, // Arc en rouge pour le score
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
          endAngle={450} // Remplissage en sens antihoraire depuis le haut
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
