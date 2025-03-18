/**
 * @file SiteLogo.jsx
 * @module SiteLogo
 * @description Composant pour afficher le logo du site.
 * Ce composant utilise le composant SvgIcon pour encapsuler l'icône SVG représentant le logo du site,
 * garantissant une intégration harmonieuse avec le système de design interne.
 */

import SvgIcon from "./SvgIcon";
import Logo from "../assets/icons/logo/logo.svg?react";

/**
 * Composant SiteLogo.
 *
 * Ce composant encapsule l'icône SVG du logo du site via le composant SvgIcon.
 * La classe CSS "text-primary" assure que l'icône hérite de la couleur primaire du thème,
 * tandis que "w-38" définit sa largeur selon les standards de notre système de design.
 *
 * @component
 * @memberof module:SiteLogo
 * @returns {JSX.Element} Le rendu du logo du site encapsulé dans le composant SvgIcon.
 */
function SiteLogo() {
  return <SvgIcon className="text-primary w-38" svg={<Logo />} />;
}

export default SiteLogo;
