/**
 * @file IconCalories.jsx
 * @module IconCalories
 * @description Composant pour afficher l'icône des calories.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant les calories,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Calories from "../../assets/icons/nutrition/calories.svg?react";

/**
 * Composant IconCalories.
 *
 * Ce composant encapsule l'icône SVG des calories via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconCalories
 * @returns {JSX.Element} Le rendu de l'icône des calories encapsulée dans le composant SvgIcon.
 */
function IconCalories() {
  return (
    <SvgIcon
      className="text-primary bg-primary-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Calories />}
    />
  );
}

export default IconCalories;
