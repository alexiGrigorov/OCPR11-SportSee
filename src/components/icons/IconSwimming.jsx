/**
 * @file IconSwimming.jsx
 * @module IconSwimming
 * @description Composant pour afficher l'icône de la natation.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant la natation,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Swimming from "../../assets/icons/sports/swimming.svg?react";

/**
 * Composant IconSwimming.
 *
 * Ce composant encapsule l'icône SVG de la natation via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconSwimming
 * @returns {JSX.Element} Le rendu de l'icône de la natation encapsulée dans le composant SvgIcon.
 */
function IconSwimming() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Swimming />}
    />
  );
}

export default IconSwimming;
