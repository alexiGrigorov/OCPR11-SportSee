/**
 * @file IconMeditating.jsx
 * @module IconMeditating
 * @description Composant pour afficher l'icône de la méditation.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant la méditation,
 * stylisée selon les standards du système de design nutritionnel de l'application.
 */

import SvgIcon from "../SvgIcon";
import Meditating from "../../assets/icons/sports/meditating.svg?react";

/**
 * Composant IconMeditating.
 *
 * Ce composant encapsule l'icône SVG de la méditation via le composant SvgIcon.
 * Il applique des classes CSS spécifiques pour définir la couleur, le fond, la taille, l'espacement et le style,
 * garantissant ainsi une intégration cohérente avec le système de design de l'application.
 *
 * @component
 * @memberof module:IconMeditating
 * @returns {JSX.Element} Le rendu de l'icône de la méditation encapsulée dans le composant SvgIcon.
 */
function IconMeditating() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Meditating />}
    />
  );
}

export default IconMeditating;
