/**
 * @file IconLipids.jsx
 * @module IconLipids
 * @description Composant pour afficher l'icône des lipides.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant les lipides,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Lipids from "../../assets/icons/nutrition/lipids.svg?react";

/**
 * Composant IconLipids.
 *
 * Ce composant encapsule l'icône SVG des lipides via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconLipids
 * @returns {JSX.Element} Le rendu de l'icône des lipides encapsulée dans le composant SvgIcon.
 */
function IconLipids() {
  return (
    <SvgIcon
      className="text-lipids bg-lipids-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Lipids />}
    />
  );
}

export default IconLipids;
