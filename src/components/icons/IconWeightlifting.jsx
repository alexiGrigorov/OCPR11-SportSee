/**
 * @file IconWeightlifting.jsx
 * @module IconWeightlifting
 * @description Composant pour afficher l'icône de l'haltérophilie.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant l'haltérophilie,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Weightlifting from "../../assets/icons/sports/weightlifting.svg?react";

/**
 * Composant IconWeightlifting.
 *
 * Ce composant encapsule l'icône SVG de l'haltérophilie via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconWeightlifting
 * @returns {JSX.Element} Le rendu de l'icône de l'haltérophilie encapsulée dans le composant SvgIcon.
 */
function IconWeightlifting() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Weightlifting />}
    />
  );
}

export default IconWeightlifting;
