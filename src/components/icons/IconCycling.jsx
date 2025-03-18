/**
 * @file IconCycling.jsx
 * @module IconCycling
 * @description Composant pour afficher l'icône de cyclisme.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant le cyclisme,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Cycling from "../../assets/icons/sports/cycling.svg?react";

/**
 * Composant IconCycling.
 *
 * Ce composant encapsule l'icône SVG de cyclisme via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconCycling
 * @returns {JSX.Element} Le rendu de l'icône de cyclisme encapsulée dans le composant SvgIcon.
 */
function IconCycling() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Cycling />}
    />
  );
}

export default IconCycling;
