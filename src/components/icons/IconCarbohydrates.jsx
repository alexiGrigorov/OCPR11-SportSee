/**
 * @file IconCarbohydrates.jsx
 * @module IconCarbohydrates
 * @description Composant pour afficher l'icône des glucides.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant les glucides,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Carbohydrates from "../../assets/icons/nutrition/carbohydrates.svg?react";

/**
 * Composant IconCarbohydrates.
 *
 * Ce composant encapsule l'icône SVG des glucides via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconCarbohydrates
 * @returns {JSX.Element} Le rendu de l'icône des glucides encapsulée dans le composant SvgIcon.
 */
function IconCarbohydrates() {
  return (
    <SvgIcon
      className="text-carbohydrates bg-carbohydrates-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Carbohydrates />}
    />
  );
}

export default IconCarbohydrates;
