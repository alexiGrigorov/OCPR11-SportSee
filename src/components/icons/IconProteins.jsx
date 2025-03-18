/**
 * @file IconProteins.jsx
 * @module IconProteins
 * @description Composant pour afficher l'icône des proteines.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant les proteines,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Proteins from "../../assets/icons/nutrition/proteins.svg?react";

/**
 * Composant IconProteins.
 *
 * Ce composant encapsule l'icône SVG des proteines via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconProteins
 * @returns {JSX.Element} Le rendu de l'icône des proteines encapsulée dans le composant SvgIcon.
 */
function IconProteins() {
  return (
    <SvgIcon
      className="text-proteins bg-proteins-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Proteins />}
    />
  );
}

export default IconProteins;
