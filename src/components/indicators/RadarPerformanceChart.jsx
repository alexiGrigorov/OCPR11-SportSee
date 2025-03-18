/**
 * @file RadarPerformanceChart.jsx
 * @module RadarPerformanceChart
 * @description Composant de graphique radar pour afficher la performance de l'utilisateur.
 * Ce composant utilise la bibliothèque Recharts pour rendre un graphique radar qui compare
 * différentes mesures de performance (intensité, vitesse, force, endurance, énergie, cardio).
 * Les données sont triées selon un ordre défini et étiquetées en français pour l'affichage.
 */

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Dictionnaire de correspondance pour traduire les clés de performance en libellés français.
 * @constant {Object<string, string>}
 */
const kindLabels = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Énergie",
  cardio: "Cardio",
};

/**
 * Ordre d'affichage des types de performance.
 * @constant {Array<string>}
 */
const displayOrder = [
  "intensity",
  "speed",
  "strength",
  "endurance",
  "energy",
  "cardio",
];

/**
 * Fonction de tri des données de performance selon l'ordre d'affichage défini.
 *
 * @param {Object} a - Premier élément à comparer.
 * @param {string} a.kind - La clé de performance du premier élément.
 * @param {Object} b - Deuxième élément à comparer.
 * @param {string} b.kind - La clé de performance du deuxième élément.
 * @returns {number} La différence d'index pour déterminer l'ordre.
 */
function sortByDisplayOrder(a, b) {
  return displayOrder.indexOf(a.kind) - displayOrder.indexOf(b.kind);
}

/**
 * Composant RadarPerformanceChart.
 *
 * Ce composant prépare les données de performance, les trie selon un ordre défini et
 * les transforme pour être affichées dans un graphique radar. Le graphique affiche
 * les mesures de performance (valeurs) pour différents sujets (traduit en français).
 *
 * @component
 * @memberof module:RadarPerformanceChart
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.data - Le tableau de données de performance. Chaque objet doit contenir les clés "kind" et "value".
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du graphique.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du graphique radar de performance.
 */
const RadarPerformanceChart = ({ data, className, ...props }) => {
  // Préparation des données : tri et transformation pour inclure des libellés français
  const preparedData = [...data].sort(sortByDisplayOrder).map((item) => ({
    subject: kindLabels[item.kind] ?? item.kind,
    value: item.value,
  }));

  // Calcul de la valeur maximale pour définir le domaine de l'axe radial
  const maxValue = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <div
      className={`${className} aspect-square rounded-sm bg-neutral-800 p-2`}
      {...props}
    >
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadarChart data={preparedData} outerRadius={60}>
          <PolarGrid stroke="#FFFFFF" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            tickLine={false}
            axisLine={false}
            tickMargin={1000}
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
